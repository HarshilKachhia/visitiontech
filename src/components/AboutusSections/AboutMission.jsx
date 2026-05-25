import React from "react";

const AboutMissions = () => {
  return (
    <div className=" bg-[#f2f2f2cc] p-8">
      {/* Left Section - Text Content */}
      <div className="bg-white flex flex-wrap justify-center items-start">
      <div className="w-full md:w-1/2 p-4">
        <h5 className="text-lg font-bold text-black">About Us</h5>
        <h5 className="text-2xl font-bold text-blue-500 mt-2">
          Vision Tech Barcode Solution
        </h5>
        <p className="text-justify text-gray-600 mt-4 leading-relaxed text-sm">
          "Our Company Is Working Successfully Since 2006 In The Field Of
          Industry."
        </p>
        <p className="text-justify text-gray-600 mt-4 leading-relaxed text-sm">
          The Founders Of This Company Have Personal Experience In Manufacturing
          Of Industrial Labels Since 2006. In The Beginning We Started Our
          Company At Small Scale & Named It "Vision Tech Barcode Solution". We
          Established This Company In 2006.
        </p>
        <p className="text-justify text-gray-600 mt-4 leading-relaxed text-sm">
          Brand In Manufacturing Of Industrial Labels & Ribbons And Service
          Provider. We Look Forward Towards Integration With Software Solutions.
          Industrial Printers, Industrial Scanners, Hand-Held Terminals (Batch
          And RF), Industrial Labels And Ribbons Is A Key Feature Of Our
          Services. End To End Solutions Are Further Enhanced By Our Label
          Division With Its State-Of-The-Art Equipments To Manufacture Labels
          That Meet The Custom Requirements Of Our Clients.
        </p>
        <p className="text-justify text-gray-600 mt-4 leading-relaxed text-sm">
          Our End-To-End Bar Coding Solutions Are Built Around The Products From
          Technology Leaders. We Are The Authorized Distributor And Authorized
          Service Provider For Their Entire Range Of Products And Solutions.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative w-full h-full overflow-hidde">
          <img
            src="https://static.wixstatic.com/media/efb6d2_66bc5a4b794f4c57a4fa37b6c1e1733c~mv2.jpg"
            alt="Vision Tech Barcode Solution"
            className="w-full h-full"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutMissions;
