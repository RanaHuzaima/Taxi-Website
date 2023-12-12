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
      <div className="container mb-3">
        <div className="p-2">
          <div class="flex flex-col items-center">
            <h2 class="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
            <p class="text-neutral-500 text-xl mt-3">
              Frequenty asked questions
            </p>
          </div>
          <div class="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
            {FaqsData.map((data, index) => (
              <div key={index} class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className=" text-xl font-bold">{data.Question}</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {data.Answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
