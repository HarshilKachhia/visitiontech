import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [productStructure, setProductStructure] = useState([]);
  const location = useLocation();
  const isProductActive = location.pathname.startsWith('/product');

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (e) => {
    if (e) e.preventDefault();
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100]">
      <div className="container mx-auto px-4 lg:px-28 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 w-[22%]">
          <img src="/vision text logo.png" alt="Logo" className="h-auto w-full max-w-[180px]" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
          </li>
          <li className="nav-item relative group">
            <NavLink to="/products" className={`nav-link cursor-pointer flex items-center ${isProductActive ? 'active' : ''}`}>
              Products
              {/* <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg> */}
            </NavLink>
            <ul className="dropdown">
              {productStructure.map((cat, idx) => (
                <li key={idx} className="dropdown-item relative group/sub flex justify-between items-center">
                  <span className="flex-1">{cat.category}</span>
                  {/* <svg className="w-3 h-3 ml-2 text-gray-400 group-hover/sub:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg> */}
                  <ul className="submenu">
                    {cat.items.map((item, i) => (
                      <li key={i} className="submenu-item">
                        <NavLink to={`/product/${item.slug}`} className="hover:text-blue-600 transition-colors">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none p-2">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-[110] transition-opacity duration-300" onClick={toggleSidebar}>
          <div
            className="fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-[120] flex flex-col transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b">
              <img src="/vision full logo.png" alt="Logo" className="h-10 w-auto" />
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto py-6 px-4 space-y-2 text-gray-700 font-bold italic">
              <li><NavLink to="/" className="block py-3 px-4 rounded-lg hover:bg-gray-50" onClick={toggleSidebar}>Home</NavLink></li>
              <li><NavLink to="/about" className="block py-3 px-4 rounded-lg hover:bg-gray-50" onClick={toggleSidebar}>About Us</NavLink></li>

              <li className="space-y-1">
                <div
                  className={`flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer ${isProductActive ? 'text-brandPrimary font-bold' : 'text-brandSecondary'}`}
                >
                  <NavLink to="/products" className="flex-1" onClick={toggleSidebar}>Products</NavLink>
                  <div onClick={toggleDropdown} className="px-2 py-1">
                    <svg className={`w-4 h-4 transition-transform ${dropdownVisible ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {dropdownVisible && (
                  <div className="pl-4 space-y-4 pb-4 animate-fadeIn">
                    {productStructure.map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="font-bold text-gray-400 text-xs tracking-wider uppercase px-4 underline decoration-dotted underline-offset-4">
                          {cat.category}
                        </div>
                        <ul className="space-y-1">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <NavLink
                                to={`/product/${item.slug}`}
                                className="block py-2 px-6 text-sm hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all font-bold"
                                onClick={toggleSidebar}
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li><NavLink to="/gallery" className="block py-3 px-4 rounded-lg hover:bg-gray-50" onClick={toggleSidebar}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className="block py-3 px-4 rounded-lg hover:bg-gray-50" onClick={toggleSidebar}>Contact Us</NavLink></li>
            </ul>

            <div className="p-6 bg-gray-50 border-t">
              <p className="text-xs text-gray-400 text-center uppercase tracking-widest">Vision Tech - Premium Solutions</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
