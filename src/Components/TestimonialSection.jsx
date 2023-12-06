import React from "react";

const TestimonialSection = () => {
  return (
    <>
      <div className="container mx-auto bg-white mt-10 mb-10">
        <div className="container flex text-center flex-col m-auto px-6 md:px-12 xl:px-6">
          <span className="mb-14 text-4xl font-extrabold leading-tight lg:text-5xl">
            Some Our <span className="text-yellow-400">Testimonial</span>
          </span>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="text-gray-600 md:text-xl">
                  <span className="font-serif">"</span>Book harmain zirah taxi
                  service for travelling from Medina to Makkah and also from
                  Makkah to Jeddah. Polite and good drivers clean cars and great
                  service. Reached on time and helped reaching right terminal
                  for airport.
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Adila</h6>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span>Thanks to Abu Usman for
                  arranging a great trip from Madinah to Makkah … medina
                  ziyarat, Makkah ziyarat and to the airport with no hassle at
                  all. Pick up was on time and Profesional service and kept us
                  well informed during ziyarat
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Ali</h6>
                </div>
              </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span>Best Service… very easy
                  to book.. very quickly response. Sorted out Ziyaraat in Medina
                  the driver was excellent he knew all the main areas and
                  explained them really well. Very profesional taxi service for
                  ziarat.. Thanks Harmain Ziarah
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Abu Usman{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
