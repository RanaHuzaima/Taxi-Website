import React from "react";
import HeroSection from "../Components/HeroSection";
import Fleet from "../Components/Fleet";
import SimpleSection from "../Components/SimpleSection";
import PickSection from "../Components/PickSection";
import ChooseSection from "../Components/ChooseSection";

const Home = () => {
  const hero_info = {
    subtitle: true,
    button: true,
    title: "Lets Book Your Umrah Taxi Instantly",
    text: "Experience seamless and convenient Umrah pilgrimage with our top-notch Umrah Taxi Service. We offer reliable transportation, experienced drivers, and exceptional customer service to ensure a worry-free journey.",
    img_link: "https://i.ibb.co/jGc4tmQ/taxi-img.jpg",
  };
  const Simple_info = {
    title: "Any Group Size, Any Distance.",
    text: "Our Umrah Taxi company is first of it’s kind of cab service specializing for in Transport service giving the chance of instant online booking for numerous type of vehicles varying in sizes depending on the number of members in the group. For the best ground transportation experience, let us provide our recognised transport service for your Umrah, family or business trip, parties, airport transfers and corporate travel needs, in Makkah or Madinah.",
  };
  return (
    <>
      {/* Hero-Section */}
      <HeroSection hero_value={hero_info} />
      {/* Fleet-Section */}
      <Fleet />
      {/* Size-Section */}
      <SimpleSection Simple_value={Simple_info} />
      {/* Pick-Section */}
      <PickSection />
      {/* Choose-Section */}
      <ChooseSection />
      {/* TESTIMONIALS */}
      <div className="container mx-auto bg-white mt-10 mb-10">
        <div class="container flex text-center flex-col m-auto px-6 md:px-12 xl:px-6">
          <span class="mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
            Some Our <span className="text-yellow-400">Testimonial</span>
          </span>
          <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div class="h-full flex flex-col justify-center space-y-4">
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p class="text-gray-600 md:text-xl">
                  <span class="font-serif">"</span>Book harmain zirah taxi
                  service for travelling from Medina to Makkah and also from
                  Makkah to Jeddah. Polite and good drivers clean cars and great
                  service. Reached on time and helped reaching right terminal
                  for airport.
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Adila</h6>
                </div>
              </div>
            </div>

            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span>Thanks to Abu Usman for
                  arranging a great trip from Madinah to Makkah … medina
                  ziyarat, Makkah ziyarat and to the airport with no hassle at
                  all. Pick up was on time and Profesional service and kept us
                  well informed during ziyarat
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Ali</h6>
                </div>
              </div>
            </div>
            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span>Best Service… very easy to
                  book.. very quickly response. Sorted out Ziyaraat in Medina
                  the driver was excellent he knew all the main areas and
                  explained them really well. Very profesional taxi service for
                  ziarat.. Thanks Harmain Ziarah
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Abu Usman </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
