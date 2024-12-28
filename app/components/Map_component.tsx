'use client';
import { useEffect, useState } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';

interface Deal {
  location: {
    lng: string;
    lat: string;
  };
  store: {
    name: string;
    business_logo: string;
  };
  business_deal: {
    title: string;
  };
}

const Map = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [map, setMap] = useState<MapboxMap | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
      console.error('Mapbox token is not set');
      return;
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Initialize Map
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    mapInstance.addControl(new mapboxgl.NavigationControl());
    setMap(mapInstance);

    // Cleanup on unmount
    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    // Fetch Deals
    fetch('https://www.deelly.com/api/nearby_deals/')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch deals: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setDeals(data.data);
        }
      })
      .catch((error) => console.error('Error fetching deals:', error));
  }, []);

  useEffect(() => {
    if (map && deals.length > 0) {
      // Add Markers
      deals.forEach((deal) => {
        const { location, store, business_deal } = deal;

        if (location && store && business_deal) {
          const marker = new mapboxgl.Marker()
            .setLngLat([parseFloat(location.lng), parseFloat(location.lat)])
            .addTo(map);

          marker.setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <h3>${store.name}</h3>
              <p>${business_deal.title}</p>
              <a href="${store.business_logo}" target="_blank" rel="noopener noreferrer">View Store</a>
            `)
          );
        }
      });
    }
  }, [map, deals]); // Run only when the map is ready, or deals are updated

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '500px',
      }}
    ></div>
  );
};

export default Map;
