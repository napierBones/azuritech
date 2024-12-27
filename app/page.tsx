import Deals from './components/Deals';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Inquiry from './components/Inquiry';
import MapComponent from './components/Map_component';
import Motivation from './components/Motivation';
import Navbar from './components/Navbar';
import Phone from './components/Phone';
import Socials from './components/Socials';
import Stats from './components/Stats';
import Top_notification from './components/Top_notification';

export default function Home() {
  return (
    <main>
      <Top_notification />
      <Navbar />
      <Hero />
      <Motivation />
      <Deals bg="bg-[#FFFFFF]" />
      <Deals bg="bg-[#FCF5DC]" />
      <Phone />
      <Stats/>
      <Inquiry/>
      <MapComponent />
      <Footer/>
      <Socials/>
    </main>
  );
}
