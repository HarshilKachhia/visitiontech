const Achievement = () => {
    const features = [
      {
        icon: "🔧", // Replace with an actual SVG or icon
        title: "Excellent Services",
      },
      {
        icon: "👥",
        title: "Satisfied Customers",
      },
      {
        icon: "👍",
        title: "Quality And Reliability",
      },
      {
        icon: "✔️",
        title: "Guaranteed Work",
      },
      {
        icon: "⭐",
        title: "Warranty On Products",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-pink-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-6 rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-700">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievement;
  