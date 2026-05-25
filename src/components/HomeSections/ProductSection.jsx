const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Industrial Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Industrial Label.",
      image: "imgs/products/p1.jpg",
    },
    {
      id: 2,
      title: "Liquor Bottle Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Liquor Bottle Label.",
      image: "imgs/products/p2.jpg",
    },
    {
      id: 3,
      title: "Edible Oil Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Edible Oil Label.",
      image: "imgs/products/p3.jpg",
    },
    {
      id: 4,
      title: "Food Product Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Food Product Label.",
      image: "imgs/products/p4.jpg",
    },
    {
      id: 5,
      title: "Pharma Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Pharma Label.",
      image: "imgs/products/p5.jpg",
    },
    {
      id: 6,
      title: "Cosmetic Label",
      description:
        "Vision Tech Barcode Solution is a leading manufacturer, supplier & exporter of Cosmetic Label.",
      image: "imgs/products/p6.jpg",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-start">
              {/* Image and Title in Bordered Box */}
              <div className="w-full border-2 border-[#1990ce] rounded-lg shadow-md overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover"
                />
                <div className="bg-blue-500 text-white text-center font-semibold py-2 hover:bg-[#E60094] transition-colors duration-300 cursor-pointer">
                  {product.title}
                </div>
              </div>
              {/* Description with Left Alignment */}
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="text-blue-500 font-semibold text-sm hover:underline mt-2 block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
