import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <img
                    src="imgs/about1.avif"
                    alt="About Us"
                    className="w-full h-auto border-2 border-black shadow-lg"
                />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 bg-gray-800 text-white p-6 lg:ml-6">
                <h2 className="text-2xl text-blue-400 font-semibold mb-2">Welcome To</h2>
                <h1 className="text-3xl text-blue-400 font-bold mb-4">
                    Vision Tech Barcode Solution
                </h1>
                <p className="text-gray-300 leading-relaxed">
                    Since the year 2006, Vision Tech Barcode Solution is one of the topmost and
                    recognized manufacturers and suppliers of industrial labels and ribbon in
                    India. Being a reputed industry, we have been able to raise our remarkable
                    position among the customers. Equipped with modern tools, equipment, and
                    technology, we manufacture and supply premium quality labels that meet custom
                    needs of the clients. All the processes of manufacturing execute in a safe,
                    hygienic, and clean environment that ensures superior adhesion property.
                </p>
                <Link to="/about">
                    <button className="mt-4 bg-brandPrimary hover:bg-brandPrimaryHover text-white font-semibold py-2 px-4 rounded shadow">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutSection;
