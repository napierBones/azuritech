'use client';

import CountUp from 'react-countup';

// Utility function to convert numbers into words
const numberToWords = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)} Million`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)} Thousand`;
  }
  return num.toString();
};

const stats = [
  {
    number: 75000,
    text: 'Deals',
  },
  {
    number: 6000,
    text: 'Retailers',
  },
  {
    number: 2000000,
    text: 'Active Users',
  },
  {
    number: 1300000,
    text: 'App Downloads',
  },
];

const Stats = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center border-t">
      <div className="w-full md:w-[80%] flex md:flex-row  flex-wrap items-center justify-between md:p-5 p-1">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="max-md:w-[40%]  flex flex-col items-center justify-center md:gap-5 md:p-5 max-md:m-3"
          >
            {index === 2 || index === 3 ? (
              <p className="font-bold md:text-4xl">{numberToWords(stat.number)}</p>
            ) : (
              <p className="font-bold md:text-4xl">
                <CountUp
                  duration={1}
                  decimals={0}
                  end={stat.number}
                  separator=","
                />
                +
              </p>
            )}
            <p className="font-bold text-sm">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
