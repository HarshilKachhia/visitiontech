import ProductCategories from "../components/GallarySections/ProductCategories";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Vision Tech Barcode Solution</title>
        <link rel="icon" href="/imgs/favicon2.ico" type="image/png" />
      </Helmet>

      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('imgs/gallary/hero.jpg')" }}
      >
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase pl-[100px]">
            Gallery
          </h1>
        </div>
      </div>
      <ProductCategories />
    </>
  );
};

export default Gallery;
