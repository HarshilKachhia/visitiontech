const LabelsSection = () => {
    const images = [
      "imgs/labels/l1.jpg",
      "imgs/labels/l2.jpg",
      "imgs/labels/l3.jpg",
      "imgs/labels/l4.jpg",
      "imgs/labels/l5.jpg",
      "imgs/labels/l6.jpg",
    ];
  
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Text Content */}
            <div>
              <h2 className="text-xl font-bold text-blue-500 flex items-center">
                <img
                  src="imgs/labels/icon1.jpg"
                  alt="Label Icon"
                  className="w-6 h-6 mr-2"
                />
                Our Labels Brands
              </h2>
              <h1 className="text-3xl font-bold text-gray-800 mt-4 leading-tight">
                Label Create Customer Required & Clean-Looking Design
              </h1>
              <p className="text-gray-600 mt-4">
                Liquor Bottle Label, Food Product Label, Pharma Label, Cosmetic
                Label, Household Cleaner Label, Industrial Label, Shipping Label,
                digital label and packaging printer. They created a modern and
                professional website to showcase their wide array of label
                products.
              </p>
            </div>
  
            {/* Right Grid of Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                >
                  <img
                    src={image}
                    alt={`Label ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LabelsSection;
  