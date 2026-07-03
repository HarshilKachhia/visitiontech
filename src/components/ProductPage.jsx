import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductPage = () => {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(true);
  const [productStructure, setProductStructure] = useState([]);
  const [bannerImage, setBannerImage] = useState("/imgs/products/banner.jpg");

  // Helper to map slug to JSON filename
  const slugToFilename = (slug) => {
    // Replace URL-encoded spaces or literal spaces with hyphens for normalization
    const normalizedSlug = slug.replace(/%20| /g, "-").toLowerCase();

    // Split by hyphen and capitalize each word
    let filename = normalizedSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Handle special mappings (like & and And)
    filename = filename.replace(/\bAnd\b/g, "&");

    return filename;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const filename = slugToFilename(productSlug);
        const response = await fetch(`/productsJsonData/${filename}.json`);
        if (!response.ok) throw new Error("Product data not found");
        const data = await response.json();
        setProductData(data);
        // Set first tab as active if available
        if (data.tabs && data.tabs.length > 0) {
          setActiveTab(data.tabs[0].tabName);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0); // Scroll to top when product changes
  }, [productSlug]);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const response = await fetch("/product-structure.json");
        const data = await response.json();
        setProductStructure(data);
      } catch (error) {
        console.error("Error fetching product structure:", error);
      }
    };
    fetchStructure();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
        <p className="mt-4 text-gray-600">The product you are looking for does not exist or has been moved.</p>
        <Link to="/products" className="mt-8 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Back to Products
        </Link>
      </div>
    );
  }

  const activeTabData = productData.tabs.find((t) => t.tabName === activeTab);

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Banner Section */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${bannerImage}')` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
              {productData.page}
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Premium Label Solutions for Your Business Needs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs (Hidden as requested) */}
        {/* <nav className="flex mb-8 text-sm font-medium text-gray-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" />
                <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" />
                <span className="text-blue-600 truncate max-w-[200px] md:max-w-none">{productData.page}</span>
              </div>
            </li>
          </ol>
        </nav> */}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">
            {/* Sidebar Categories */}
            {productStructure.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm italic">
                <div className="bg-brandPrimary px-4 py-2 flex justify-between items-center">
                  <h3 className="text-white font-bold text-lg">{cat.category}</h3>
                  <div className="bg-white/20 rounded p-1">
                    {cat.category.toLowerCase().includes("industry") ? (
                      <ChevronDownIcon className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronUpIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
                <ul className="divide-y divide-gray-100">
                  {cat.items.map((item, i) => (
                    <li key={i} className="group transition hover:bg-gray-50 underline decoration-dotted underline-offset-4">
                      <Link
                        to={`/product/${item.slug}`}
                        className={`flex items-center px-4 py-2.5 text-sm font-bold transition-all ${productSlug?.replace(/%20| /g, "-").toLowerCase() === item.slug.toLowerCase() ? "text-brandPrimary bg-gray-50" : "text-gray-700 hover:text-brandPrimary"
                          }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-colors ${productSlug?.replace(/%20| /g, "-").toLowerCase() === item.slug.toLowerCase() ? "bg-brandPrimary" : "bg-gray-500 group-hover:bg-brandPrimary"
                          }`}>
                          <ChevronRightIcon className="w-3 h-3 text-white" />
                        </div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Enquiry Container */}
            <div className="space-y-1 italic">
              <Link
                to="/contact"
                className="flex items-center space-x-4 p-4 bg-[#f2f2f2] rounded-md border-b border-gray-200 hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm">
                  <img src="/imgs/enquiry-icon.png" alt="" className="w-6 h-6" onError={(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/1067/1067555.png'} />
                </div>
                <div>
                  <h5 className="text-gray-800 font-bold text-sm">Send Enquiry</h5>
                </div>
              </Link>
              <a
                href="tel:+919925209252"
                className="flex items-center space-x-4 p-4 bg-[#f2f2f2] rounded-md border-b border-gray-200 hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-brandPrimary">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-gray-800 font-bold text-sm">+91 99252 09252</h5>
                </div>
              </a>
              <a
                href="mailto:info@visiontechbarcode.com"
                className="flex items-center space-x-4 p-4 bg-[#f2f2f2] rounded-md border-b border-gray-200 hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-purple-600">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-gray-800 font-bold text-sm">Email Us</h5>
                </div>
              </a>
              <a
                href={`https://wa.me/919925209252?text=${encodeURIComponent("Hi, I want to get more info about " + productData.page)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-[#f2f2f2] rounded-md hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-green-600">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2C6.48 2 2 6.48 2 12c0 2.17.7 4.18 1.89 5.83L2.05 22l4.3-1.8c1.6.9 3.47 1.4 5.65 1.4 5.52 0 10-4.48 10-10S17.524 2 12.004 2zm5.72 14.33c-.24.68-1.2 1.25-1.92 1.33-.49.05-1.13.08-3.23-.79-2.69-1.11-4.42-3.85-4.55-4.03-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.93.91-2.19.24-.26.53-.32.71-.32.18 0 .36.01.51.02.16.01.37-.06.58.45.21.52.73 1.79.8 1.93.07.14.11.31.02.49-.09.18-.14.29-.28.45-.14.16-.3.36-.43.48-.15.14-.31.3-.13.61.18.31.8 1.31 1.71 2.12.91.81 1.67 1.06 2.02 1.23.36.17.57.14.78-.1.21-.24.91-1.06 1.15-1.42.24-.36.49-.3.82-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.08.15.08.87-.16 1.55z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-gray-800 font-bold text-sm">WhatsApp Us</h5>
                </div>
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full lg:w-3/4">
            {/* Tab Navigation (Hidden if only 1 tab) */}
            {productData.tabs.length > 1 && (
              <div className="flex mb-4 gap-2">
                {productData.tabs.map((tab) => (
                  <button
                    key={tab.tabName}
                    onClick={() => setActiveTab(tab.tabName)}
                    className={`px-6 py-2 text-sm font-bold border transition-all duration-300 rounded shadow-sm ${activeTab === tab.tabName
                      ? "bg-[#4d4d4d] text-white border-[#4d4d4d]"
                      : "bg-brandPrimary text-white border-brandPrimary hover:brightness-110"
                      }`}
                  >
                    {tab.tabName}
                  </button>
                ))}
              </div>
            )}

            {/* Tab Content */}
            <div className="min-h-[400px] animate-fadeIn">
              {activeTab === "Overview" && activeTabData && (
                <div className="space-y-8 italic">
                  {activeTabData.sections.map((section, idx) => (
                    <section key={idx}>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <div className="w-1.5 h-8 bg-blue-600 rounded-full mr-4"></div>
                        {section.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed font-bold">
                        {section.content}
                      </p>
                    </section>
                  ))}

                  {activeTabData.features && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 italic font-bold">
                      {activeTabData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                          <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTabData.clients && (
                    <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <h3 className="text-lg font-bold text-blue-900 mb-4">Our Pharma Clients Include:</h3>
                      <div className="flex flex-wrap gap-3">
                        {activeTabData.clients.map((client, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white rounded-full text-blue-700 font-medium text-sm shadow-sm border border-blue-50">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTabData.trends && (
                    <div className="mt-8 italic font-semibold">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 ">Latest Trends:</h3>
                      <ul className="space-y-3">
                        {activeTabData.trends.map((trend, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <ChevronRightIcon className="w-4 h-4 text-blue-500 mr-2" />
                            {trend}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Product Image Gallery */}
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <div className="w-1.5 h-8 bg-brandPrimary rounded-full mr-4"></div>
                      Product Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((imgNum) => (
                        <GalleryImage
                          key={`${productSlug}-${imgNum}`}
                          src={`/imgs/products/${productSlug?.replace(/%20| /g, "-").toLowerCase().replace('-and-', '-').replace('-labels', '')}/img${imgNum}.jpg`}
                          alt={`${productData.page} view ${imgNum}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Label Options" && activeTabData && (
                <div className="space-y-10 italic font-bold">
                  {activeTabData.labelMaterials && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-800 border-b-2 border-orange-500 pb-2">Paper Types</h4>
                        <ul className="space-y-2">
                          {activeTabData.labelMaterials.paperTypes.map((t, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2">Film Types</h4>
                        <ul className="space-y-2">
                          {activeTabData.labelMaterials.filmTypes.map((t, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {activeTabData.labelFinishes && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-gray-800 border-b-2 border-green-500 pb-2">Label Finishes</h4>
                          <ul className="space-y-2">
                            {activeTabData.labelFinishes.map((t, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-bold">
                    {activeTabData.adhesives && (
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h4 className="text-lg font-bold text-gray-800 mb-4 ">Adhesives</h4>
                        <div className="flex flex-wrap gap-3">
                          {activeTabData.adhesives.map((t, i) => (
                            <span key={i} className="px-4 py-2 bg-white rounded-lg text-gray-700 shadow-sm border border-gray-100">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTabData.formats && (
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 italic ">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Formats</h4>
                        <div className="flex flex-wrap gap-3">
                          {activeTabData.formats.map((t, i) => (
                            <span key={i} className="px-4 py-2 bg-white rounded-lg text-gray-700 shadow-sm border border-gray-100">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Printing Options" && activeTabData && (
                <div className="space-y-12 italic font-bold">
                  {/* Printing Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-bold">
                    {activeTabData.printingDescriptions.map((item, idx) => (
                      <div key={idx} className="group italic font-bold">
                        <h4 className="text-lg font-bold text-blue-700 mb-2 group-hover:translate-x-1 transition-transform border-l-4 border-blue-200 pl-3">
                          {activeTabData.printingTypes.find(t => t.toLowerCase().includes(item.key.toLowerCase().replace(/([A-Z])/g, ' $1').trim())) ||
                            item.key.charAt(0).toUpperCase() + item.key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-gradient-to-br from-brandPrimary to-brandSecondary rounded-2xl text-white shadow-xl italic font-bold">
                    <h3 className="text-2xl font-bold mb-4">Need help with printing options?</h3>
                    <p className="text-blue-100 mb-6 max-w-xl">
                      Our experts are here to guide you through the best printing choices for your specific label requirements.
                    </p>
                    <Link to="/contact">
                      <button className="px-8 py-3 bg-white text-brandSecondary font-bold rounded-lg hover:bg-gray-100 transition-colors">
                        Talk to an Expert
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Inline Icon Components
const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronUpIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const GalleryImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <div className="relative group overflow-hidden rounded-xl border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 aspect-square">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        onError={() => setHasError(true)}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
          View Detail
        </span>
      </div>
    </div>
  );
};

export default ProductPage;
