import { Link } from "react-router-dom";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Industrial Label",
      link: "/product/chemical-and-lubricants",
      description:
        "High-durability safety and warning labels for machinery and industrial equipment. Featuring clear danger signs like 'Isolate Equipment,' they are designed with weather-resistant and chemical-proof materials to withstand harsh environments.",
      image: "imgs/products/p1.jpg",
    },
    {
      id: 2,
      title: "Liquor Bottle Label",
      link: "/product/wine-and-liquor",
      description:
        "Premium self-adhesive labels designed to elevate spirits and wine branding like Brother's Bond Bourbon. Engineered with moisture-resistant materials to keep their elegant visual appeal even inside ice buckets.",
      image: "imgs/products/p2.jpg",
    },
    {
      id: 3,
      title: "Edible Oil Label",
      link: "/product/food-and-beverages",
      description:
        "Grease-resistant and oil-proof pressure-sensitive labels for edible oils like Armanti Sunflower Oil. Specially formulated with strong adhesives to ensure branding remains pristine and securely affixed despite handling.",
      image: "imgs/products/p3.jpg",
    },
    {
      id: 4,
      title: "Food Product Label",
      link: "/product/food-and-beverages",
      description:
        "Vibrant and food-grade packaging labels for jams, honey jars like Humble Bee, coffee, and preserves. Designed to resist moisture, low temperatures, and wear, ensuring compliance and visual appeal.",
      image: "imgs/products/p4.jpg",
    },
    {
      id: 5,
      title: "Pharma Label",
      link: "/product/pharmaceutical",
      description:
        "Precision-printed labels for pharmaceutical products and supplements like Nose Fluent and Energy Vitality. Engineered to meet strict medical standards, providing high-contrast readability and reliable container adhesion.",
      image: "imgs/products/p5.jpg",
    },
    {
      id: 6,
      title: "Cosmetic Label",
      link: "/product/cosmetic-and-healthcare",
      description:
        "Sophisticated and water-resistant labels designed for beauty and personal care packaging like LETitSEE and C-MEglow. Features elegant, textured, and durable finishes that withstand contact with water and oils.",
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
              <div className="w-full border-2 border-brandPrimary rounded-lg shadow-md overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover"
                />
                <Link to={product.link}>
                  <div className="bg-brandPrimary text-white text-center font-semibold py-2 hover:bg-brandSecondary transition-colors duration-300 cursor-pointer">
                    {product.title}
                  </div>
                </Link>
              </div>
              {/* Description with Left Alignment */}
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={product.link}
                  className="text-brandPrimary font-semibold text-sm hover:underline mt-2 block"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
