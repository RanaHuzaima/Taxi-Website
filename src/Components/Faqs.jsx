import React from "react";

const Faqs = () => {
  const FaqsData = [
    {
      Question: "When do I get charged for a ride?",
      Answer:
        "You will be charged for a ride immediately after the ride is completed, However If you book a ride from airport, you will pay in advance.",
    },
    {
      Question: "How do I book a ride with Umrah Taxi Service?",
      Answer:
        "You can book a ride with us by filling out our online booking form, calling our customer service hotline, or using our mobile app. We recommend booking in advance to ensure availability and preferred vehicle type.",
    },
    {
      Question: "Can I pay for an trip with credit card or online?",
      Answer:
        "Initially credit card payments are not accepted but you can pay online via wire transfer.",
    },
    {
      Question: "Can I get a ride from an airport?",
      Answer: "Yes you can get a ride form Jeddah and Madina airport.",
    },
    {
      Question: "How do I get a price estimate in the app?",
      Answer:
        "We already updated all price plans on our website. please visit Pricing page for this purpose.",
    },
    {
      Question: "What types of vehicles do you offer?",
      Answer:
        "We offer a range of vehicles to suit different group sizes, preferences, and budgets, including sedan cars, SUVs, Coasters, Grand Cabin HiAce, vans, and buses.",
    },
  ];
  return (
    <>
      <div className=" container">
        <div className="bg-white mb-3 rounded-lg shadow-xl pb-7">
          <h1 className="text-4xl font-bold  tracking-widest text-center">
            FAQs
          </h1>
          <p className="text-center text-gray-600 text-sm mt-2">
            Here are some of the frequently asked questions
          </p>
          <div className="space-y-12 px-2 md:px-10 mt-12">
            {FaqsData.map((data) => (
              <div key={data.Question} className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-yellow-400">
                    <span className="text-4xl text-yellow-400 px-4">Q.</span>
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-black">
                    <span className="text-4xl text-gray-400 px-4">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-yellow-400 font-bold">
                      {data.Question}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">{data.Answer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
