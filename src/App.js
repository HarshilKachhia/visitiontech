import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import ProductPage from "./components/ProductPage";
import { Helmet } from "react-helmet";

const App = () => {
    return (
        <>
        
        
        <Helmet>
        <title>Home | Vision Tech Barcode Solution</title>
        <link rel="icon" href="/imgs/favicon2.ico" type="image/png" />
      </Helmet>
        <Router>
            <Navbar />
            <div style={{ minHeight: "80vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/product/:productSlug" element={<ProductPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
        </>

    );
};

export default App;
