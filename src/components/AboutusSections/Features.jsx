const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 space-y-12 pb-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="imgs/aboutUs/strength.avif" // Replace with actual image URL
              alt="Our Strength"
              className="rounded-md shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Strength
            </h2>
            <hr className="w-12 border-t-2 border-gray-800 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Expertise And Experience In Developing The Most Suitable Solutions
              And In Integration Of Our Data Collection System With Customers’
              Existing Application Operations Including ERPs Like SAP, Oracle,
              Baan Etc. <br />
              In-House Software Development Facility With Expert Professionals
              For Developing Applications Targeted For Windows, Palm, Wince, And
              Pocket PC Platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <hr className="w-12 border-t-2 border-brandPrimary mb-4" />
              <p className="text-gray-600 leading-relaxed">
                To Design, Develop, And Deploy High-Quality Solutions For Our
                Clients. It Is Our Commitment To A Sustainable Value Addition To
                Their Business By Continuously Learning, Adapting, And
                Innovating In Our Chosen Field. <br />
                Our Sales Team Will Achieve Specific Objectives For Our
                Customers, Employees, Shareholders, And Our Principles.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="imgs/aboutUs/mission.avif" // Replace with actual image URL
                alt="Our Mission"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 space-y-12 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="imgs/aboutUs/vision.avif" // Replace with actual image URL
              alt="Our Strength"
              className="rounded-md shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <hr className="w-12 border-t-2 border-gray-800 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Vision Tech Barcode Solution Has Long Had Strict
              Procedures For Quality Control That All Our Staff Are Comfortable
              With. Indeed, It Is A Core Part Of Our Organizational Culture.
              These Include: Documented SOPs: Written Standard Operating
              Procedures Are In Place For All Of Our Departments. All Staff
              Learn Them, Keep Up To Date With Them And Can Reference Them If
              Uncertain. Defined Responsibilities : All Of Our Staff Clearly
              Know What Stage Of The Process They Are Responsible For. There Is
              No "Buck Passing". Because Everyone Knows Their Role, They Can
              Dedicate Their Abilities To Ensuring The Highest Quality
              Standards. Multiple Quality Checks : During Each Stage Ofboth The
              Design And Production Processes, Individuals In Each Department
              Review And Check Their Colleagues' Work. This Ensures Another
              Layer Of Certainty And Quality That Ensures Error Free And On Time
              Delivery Of Your Product. We Take No Chances With Your Work, So
              That Your Business Can Rely On One Thing: Getting Top Quality
              Labels In Time, On Budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
