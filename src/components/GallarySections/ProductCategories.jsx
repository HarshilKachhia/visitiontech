const ProductCategories = () => {
    const categories = [
      {
        image: "imgs/gallary/1.jpg", // Replace with actual image path
        alt: "Cosmetic Products",
      },
      {
        image: "imgs/gallary/2.avif",
        alt: "Cleaning Supplies",
      },
      {
        image: "imgs/gallary/3.jpg",
        alt: "Warning Labels",
      },
      {
        image: "imgs/gallary/4.avif",
        alt: "Packaging Labels",
      },
      {
        image: "imgs/gallary/5.avif",
        alt: "Packaging Labels",
      },
      {
        image: "imgs/gallary/6.jpg",
        alt: "Packaging Labels",
      },
      {
        image: "imgs/gallary/7.jpg",
        alt: "Packaging Labels",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductCategories;
  