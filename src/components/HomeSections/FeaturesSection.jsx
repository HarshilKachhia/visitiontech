const FeaturesSection = () => {
    const features = [
      {
        id: 1,
        icon: "👥", // Replace this with an icon or an image
        number: "51",
        title: "Number Of Employees",
      },
      {
        id: 2,
        icon: "⚙️", // Replace this with an icon or an image
        number: "1800",
        title: "Completed Projects",
      },
      {
        id: 3,
        icon: "🏠", // Replace this with an icon or an image
        number: "500",
        title: "Number Of Clients",
      },
      {
        id: 4,
        icon: "🔧", // Replace this with an icon or an image
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
                <div className="text-4xl mb-4 text-gray-700">{feature.icon}</div>
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
  