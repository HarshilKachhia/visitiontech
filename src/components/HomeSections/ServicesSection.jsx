const ServicesSection = () => {
    const features = [
      {
        icon: "👩‍💼", // Replace with actual icons or SVGs
        title: "CLIENT CENTRICITY",
        description:
          "We are focused on clients and solutioning approach to deliver the best in the industry products.",
      },
      {
        icon: "🤝",
        title: "COMMITMENT",
        description:
          "We are committed to continuous improvement, defect prevention and minimum wastage to meet client objectives.",
      },
      {
        icon: "🧩",
        title: "TEAMWORK",
        description:
          "We believe in always working together as a Team, taking collective responsibility and individual accountability.",
      },
      {
        icon: "💡",
        title: "INNOVATION",
        description:
          "We strive to innovate through our depth of knowledge and find the best in the industry solutions for our clients.",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition"
            >
              <span>📄</span> Download Brochure
            </a>
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
            >
              <span>📞</span> Get In Touch Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  