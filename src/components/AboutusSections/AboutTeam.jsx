const AboutTeam = () => {
    const features = [
      {
        icon: "👩‍💼", // Replace with actual icons or SVGs
        title: "LABEL PRINTING EXPERTISE",
        description:
          "Working to meet the label printing challenges of our clients to achieve continuous growth and establish strong customer relations.",
      },
      {
        icon: "🤝",
        title: "CUSTOMISED LABEL PRINTING SOLUTIONS",
        description:
          "Working closely with customers to understand their specific needs and offer customised solution.",
      },
      {
        icon: "🧩",
        title: "QUALITY FOCUSED",
        description:
          "An ISO certified company striving to deliver quality labels.",
      },
      {
        icon: "💡",
        title: "CUTTING-EDGE TECHNOLOGY",
        description:
          "Upgrading and implementing the emerging technologies to provide the best quality and cost-effective labels on time.",
      },
      {
        icon: "💡",
        title: "ON-TIME DELIVERY",
        description:
          "Providing high-quality labelling solutions aligned with the production schedules to ensure on time delivery.",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-red-500 mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  };
  
  export default AboutTeam;
  