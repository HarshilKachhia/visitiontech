import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-brandPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      number: "51",
      title: "Number Of Employees",
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-brandPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
        </svg>
      ),
      number: "1800",
      title: "Completed Projects",
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-brandPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11l-4 4-2-2" />
        </svg>
      ),
      number: "500",
      title: "Number Of Clients",
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12 text-brandPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5 10h12" />
        </svg>
      ),
      number: "10",
      title: "Network In Cities",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Number */}
              <div className="text-3xl font-bold text-gray-800">{feature.number}</div>
              {/* Title */}
              <div className="text-sm font-semibold text-gray-600 mt-2">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;