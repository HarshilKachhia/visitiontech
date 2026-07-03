import React, { useState, useEffect, useCallback, useMemo } from "react";

const categoryImages = {
  "Pharmaceutical": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
  "Cosmetic and Healthcare": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
  "Food & Beverages": ["img1.jpg", "img2.jpg", "img 3.jpg", "img4.jpg", "img5.jpg"],
  "Wine & Liquor": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
  "Chemical & Lubricants": ["img1.jpg", "img2.jpg", "img3.jpg"],
  "Consumer Electronics Labels": ["img1.jpg", "img2.jpg", "img3.png", "img4.jpg"],
  "Automotive Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
  "Garment Labels": ["img1.jpg", "img2.jpg", "img3.jpg"],
  "Hologram Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
  "Thermal Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
  "Transparent Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"],
  "Frozen Proof Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
  "High Temperature Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
  "Sandwich (Piggyback) Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
  "Void Labels": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
};

const ProductCategories = () => {
  const [rawCategories, setRawCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 });

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("/products-gallery-list.json");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery configurations.");
        }
        const data = await response.json();

        const uniqueCategories = [];
        data.forEach((product) => {
          if (product.imagePath && !uniqueCategories.includes(product.name)) {
            uniqueCategories.push(product.name);
          }
        });

        setCategories(uniqueCategories);
        setRawCategories(data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading gallery details:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      // If "All Labels", show exactly two images per product category
      const items = [];
      rawCategories.forEach((product) => {
        if (product.imagePath) {
          const lastSlashIndex = product.imagePath.lastIndexOf('/');
          const basePath = product.imagePath.substring(0, lastSlashIndex);
          const filenames = categoryImages[product.name] || ["img1.jpg", "img2.jpg"];

          // Slice the first 2 images
          filenames.slice(0, 2).forEach((filename, idx) => {
            items.push({
              id: `${product.name}-${filename}`,
              src: `${basePath}/${filename}`,
              category: product.name,
              title: product.name
            });
          });
        }
      });
      return items;
    } else {
      // If a specific category, show all available images in that folder
      const product = rawCategories.find((p) => p.name === activeFilter);
      if (!product || !product.imagePath) return [];

      const lastSlashIndex = product.imagePath.lastIndexOf('/');
      const basePath = product.imagePath.substring(0, lastSlashIndex);
      const filenames = categoryImages[product.name] || ["img1.jpg", "img2.jpg"];

      return filenames.map((filename, idx) => ({
        id: `${product.name}-${filename}`,
        src: `${basePath}/${filename}`,
        category: product.name,
        title: product.name
      }));
    }
  }, [activeFilter, rawCategories]);

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index });
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeLightbox = useCallback(() => {
    setLightbox({ isOpen: false, currentIndex: 0 });
    document.body.style.overflow = "unset"; // Re-enable scrolling
  }, []);

  const nextImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % filteredItems.length
    }));
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + filteredItems.length) % filteredItems.length
    }));
  }, [filteredItems.length]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen, closeLightbox, nextImage, prevImage]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#99cc33]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-white">
        <p className="text-red-500 text-lg font-medium mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 bg-[#99cc33] text-white rounded-full font-semibold hover:bg-[#88bb22] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#f8fafc]">
      <style>{`
        .gallery-card {
          animation: scaleUpIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes scaleUpIn {
          from {
            opacity: 0;
            transform: scale(0.93) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        /* Custom horizontal scroll styling for mobile categories */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Our Gallery
          </h2>
          <div className="h-1 w-20 bg-[#99cc33] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-4 text-base md:text-lg">
            Explore our premium range of industrial labels, stickers, and barcode solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto pb-4 md:pb-0 max-w-full px-2 no-scrollbar scroll-smooth">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${activeFilter === "All"
                  ? "bg-[#99cc33] text-white shadow-lg shadow-[#99cc33]/25 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-slate-200/80"
                }`}
            >
              All Labels
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${activeFilter === category
                    ? "bg-[#99cc33] text-white shadow-lg shadow-[#99cc33]/25 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-slate-200/80"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[300px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 40}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative pt-[85%] w-full overflow-hidden bg-slate-50">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/imgs/logo.png";
                    e.target.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto opacity-20 grayscale object-contain";
                  }}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#99cc33] bg-[#99cc33]/15 px-2.5 py-1 rounded-full border border-[#99cc33]/30 backdrop-blur-sm inline-block">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && filteredItems[lightbox.currentIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm select-none">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 border border-white/5 shadow-2xl"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 z-40 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 border border-white/5 shadow-2xl"
                aria-label="Previous Image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 z-40 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 border border-white/5 shadow-2xl"
                aria-label="Next Image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image & Detail Wrapper */}
          <div
            className="w-full max-w-5xl px-4 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[70vh] flex justify-center items-center">
              <img
                src={filteredItems[lightbox.currentIndex].src}
                alt={filteredItems[lightbox.currentIndex].title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/imgs/logo.png";
                }}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Info panel */}
            <div className="w-full max-w-2xl text-center mt-6 text-white px-2">
              <h3 className="text-xl font-bold tracking-wide">
                {filteredItems[lightbox.currentIndex].title}
              </h3>
              <p className="text-white/40 text-xs mt-2">
                Image {lightbox.currentIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>

          {/* Click background to close */}
          <div className="absolute inset-0 z-10" onClick={closeLightbox}></div>
        </div>
      )}
    </section>
  );
};

export default ProductCategories;
