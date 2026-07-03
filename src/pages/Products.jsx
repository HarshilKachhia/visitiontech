import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsList = async () => {
            try {
                const response = await fetch("/products-gallery-list.json");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products list:", error);
                setLoading(false);
            }
        };
        fetchProductsList();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#99cc33]"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#f4f7f6] min-h-screen pb-20 font-sans">
            <style>{`
                /* Desktop: Devices that support hover and have a fine pointer (mouse) */
                @media (hover: hover) and (pointer: fine) {
                    .product-name-bottom {
                        display: none;
                    }
                    .product-overlay {
                        display: flex;
                        opacity: 0;
                        transition: opacity 0.4s ease;
                    }
                    .product-card:hover .product-overlay {
                        opacity: 1;
                    }
                    .product-card:hover .product-overlay h3 {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    .product-overlay h3 {
                        transform: translateY(20px);
                        opacity: 0;
                        transition: transform 0.4s ease, opacity 0.4s ease;
                    }
                }
                
                /* Touch Devices: Devices with no hover capability and coarse pointer (touch) */
                @media (hover: none) and (pointer: coarse) {
                    .product-name-bottom {
                        display: block;
                    }
                    .product-overlay {
                        display: none;
                    }
                }
            `}</style>

            {/* Banner Section */}
            <div 
                className="relative w-full h-64 md:h-80 bg-cover bg-center overflow-hidden mb-12"
                style={{ backgroundImage: "url('/imgs/products/banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/55"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
                            Our Products
                        </h1>
                        <p className="mt-4 text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            Premium Label Solutions for Your Business Needs
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductHoverCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductHoverCard = ({ product }) => {
    const img1 = product.imagePath;
    const img2 = product.imagePath ? product.imagePath.replace('img1.jpg', 'img2.jpg') : '';
    
    const [img2Error, setImg2Error] = useState(false);

    return (
        <Link 
            to={product.navigationLink} 
            className="product-card group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex flex-col relative hover:-translate-y-2 cursor-pointer"
        >
            <div className="relative w-full pt-[100%] overflow-hidden bg-gray-100">
                <img 
                    src={img1} 
                    alt={product.name}
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = '/imgs/logo.png'; 
                        e.target.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto opacity-30 grayscale object-contain";
                    }}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ${!img2Error ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'}`}
                    loading="lazy"
                />
                
                {!img2Error && (
                    <img 
                        src={img2} 
                        alt={`${product.name} alternate view`}
                        onError={() => setImg2Error(true)}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                        loading="lazy"
                    />
                )}
                
                <div className="product-overlay absolute top-0 left-0 w-full h-full bg-black/65 text-white justify-center items-center text-center p-6 z-10 pointer-events-none">
                    <h3 className="text-[1.35rem] font-bold tracking-wide drop-shadow-md">
                        {product.name}
                    </h3>
                </div>
            </div>
            <div className="product-name-bottom p-5 text-center text-[1.1rem] font-bold text-[#2d3748] bg-white border-t border-gray-50">
                {product.name}
            </div>
        </Link>
    );
};

export default Products;
