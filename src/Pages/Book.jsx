import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import BookCarList from "../Components/BookCarList";
import { useEffect } from "react";

const Book = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const handleScroll = () => {
  //     window.scrollTo(0, 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = (event) => {
      // Check if the user is scrolling down
      if (window.scrollY > 0) {
        // Prevent the default scroll behavior
        event.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const data = [
    {
      carName: "Camry Car Service",
      seat: "4 Seat",
      imgLink:
        "https://www.autopediame.com/storage/images/Toyota/Camry%202023/LE%20STD.jpg",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>  Makkah Hotel</strong> 300 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>  Jeddah Hotel</strong> 200 SR",
        route2:
          "<strong>Makkah Hotel </strong> to <strong> Madina Hotel</strong> 550 SR",
        route3:
          "<strong>Jeddah Airport </strong> to <strong> Madina Hotel </strong> 550 SR",
        route4:
          "<strong>Madina Airport</strong> to <strong> Madina Hotel </strong> 200 SR",
        route5:
          "<strong>Madina Hotel</strong> to <strong> Madina Airpot </strong> 125 SR",
        route6: "<strong>Makkah Ziyarat</strong> 225 SR",
        route7: "<strong>Madina Ziyarat </strong> 200 SR",
        route8:
          "<strong>Jeddah</strong> to <strong> Taif and Return </strong> 700 SR",
        route9:
          "<strong>Makkah </strong> to <strong> Taif and Return</strong> 500 SR",
        route10: "<strong>Per Hour Rates</strong>  100 SR",
        route11:
          "<strong>Madina Hotel </strong> to <strong> Makkah Hotel </strong> 550 SR",
        route12:
          "<strong>Makkah Hotel </strong> to <strong> Jeddah Airport</strong> 250 SR",
        route13: "<strong>Masjid Ayesha Meeqat</strong> 100 SR",
        route14: "<strong>Masjid Jurana Meeqat</strong> 150 SR",
        route15:
          "<strong>Madina Ziarat </strong> to <strong> Wadiya Jin</strong> 300 SR",
        route16:
          "<strong>Makkah Train Station </strong> to <strong> Makkah Hotel</strong> 150 SR",
        route17:
          "<strong>Medina Train station </strong> to <strong> Medina Hotel</strong> 150 SR",
        route18:
          "<strong>Medina Hotel </strong> to <strong> Medina Train Station</strong> 150 SR",
        route19:
          "<strong>Makkah Hotel </strong> to <strong> Train Station</strong> 150 SR",
      },
    },
    {
      carName: "H1 Hyundai Service",
      seat: "7 Seat",
      imgLink:
        "https://ymimg1.b8cdn.com/resized/car_model/5172/logo/listing_main_H1.jpg",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>  Makkah Hotel</strong> 350 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>  Jeddah Hotel</strong> 250 SR",
        route2:
          "<strong>Makkah Hotel </strong> to <strong> Madina Hotel</strong> 700 SR",
        route3:
          "<strong>Jeddah Airport </strong> to <strong> Madina Hotel </strong> 700 SR",
        route4:
          "<strong>Madina Airport</strong> to <strong> Madina Hotel </strong> 250 SR",
        route5:
          "<strong>Madina Hotel</strong> to <strong> Madina Airpot </strong> 200 SR",
        route6: "<strong>Makkah Ziyarat</strong> 300 SR",
        route7: "<strong>Madina Ziyarat </strong> 200 SR",
        route8:
          "<strong>Jeddah</strong> to <strong> Taif and Return </strong> 1000 SR",
        route9:
          "<strong>Makkah </strong> to <strong> Taif and Return</strong> 700 SR",
        route10: "<strong>Per Hour Rates</strong>  100 SR",
        route11:
          "<strong>Madina Hotel </strong> to <strong> Makkah Hotel </strong> 700 SR ",
        route12:
          "<strong>Makkah Hotel </strong> to <strong> Jeddah Airport</strong> 300 SR",
        route13: "<strong>Masjid Ayesha Meeqat</strong> 150 SR",
        route14: "<strong>Masjid Jurana Meeqat</strong> 150 SR",
        route15:
          "<strong>Madina Ziarat </strong> to <strong> Wadiya Jin</strong> 350 SR",
        route16:
          "<strong>Makkah Train Station </strong> to <strong> Makkah Hotel</strong> 200 SR",
        route17:
          "<strong>Medina Train station </strong> to <strong> Medina Hotel</strong> 200 SR",
        route18:
          "<strong>Medina Hotel </strong> to <strong> Medina Train Station</strong> 200 SR",
        route19:
          "<strong>Makkah Hotel </strong> to <strong> Train Station</strong> 200 SR",
      },
    },
    {
      carName: "Gmc Suv Service",
      seat: "7 Seat",
      imgLink:
        "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/43dbea3c-98fc-4dcb-8a97-e97b9c9468dc/431a173e-a21f-48fd-8cff-60b17114e106.png",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>Makkah Hotel</strong> 450 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>Jeddah Hotel</strong> 300 SR",
        route2:
          "<strong>Jeddah Hotel</strong> to <strong>Jeddah Airport</strong> 300 SR",
        route3:
          "<strong>Makkah Hotel</strong> to <strong>Madina Hotel</strong> 900 SR",
        route4:
          "<strong>Jeddah Airport</strong> to <strong>Madina Hotel</strong> 1000 SR",
        route5:
          "<strong>Madina Airport</strong> to <strong>Madina Hotel</strong> 300 SR",
        route6:
          "<strong>Madina Hotel</strong> to <strong>Madina Airport</strong> 250 SR",
        route7: "<strong>Makkah Ziyarat</strong> 400 SR",
        route8: "<strong>Madina Ziyarat</strong> 350 SR",
        route9:
          "<strong>Jeddah</strong> to <strong>Taif and Return</strong> 1500 SR",
        route10:
          "<strong>Makkah</strong> to <strong>Taif and Return</strong> 800 SR",
        route11: "<strong>Per Hour Rates</strong> 150 SR",
        route12:
          "<strong>Madina Hotel</strong> to <strong>Makkah Hotel</strong> 900 SR",
        route13:
          "<strong>Makkah Hotel</strong> to <strong>Jeddah Airport</strong> 400 SR",
        route14: "<strong>Madina Ziarat and Wadiya Jin</strong> 500 SR",
        route15: "<strong>Masjid Ayesha Meeqat</strong> 200 SR",
        route16: "<strong>Masjid Jurana Meeqat</strong> 250 SR",
        route17:
          "<strong>Makkah hotel</strong> to <strong>train station</strong> 250 SR",
        route18:
          "<strong>Makkah train station</strong> to <strong>Makkah Hotel</strong> 250 SR",
        route19:
          "<strong>Medina Train station</strong> to <strong>Medina hotel</strong> 250 SR",
        route20:
          "<strong>Medina Hotel</strong> to <strong>Medina train station</strong> 250 SR",
      },
    },
    {
      carName: "Hiace Service",
      seat: "10 Seat",
      imgLink:
        "https://billplz-production.s3.amazonaws.com/uploads/open_collection/photo/135790/retina_d7ea64166da8d918bbae365975b18519-toyota-hiace-for-rent-kl-selangor.png",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>Makkah Hotel</strong> 500 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>Jeddah Hotel</strong> 300 SR",
        route2:
          "<strong>Jeddah Hotel</strong> to <strong>Jeddah Airport</strong> 300 SR",
        route3:
          "<strong>Makkah Hotel</strong> to <strong>Madina Hotel</strong> 800 SR",
        route4:
          "<strong>Jeddah Airport</strong> to <strong>Madina Hotel</strong> 800 SR",
        route5:
          "<strong>Madina Airport</strong> to <strong>Madina Hotel</strong> 400 SR",
        route6:
          "<strong>Madina Hotel</strong> to <strong>Madina Airport</strong> 300 SR",
        route7: "<strong>Makkah Ziyarat</strong> 400 SR",
        route8: "<strong>Madina Ziyarat</strong> 350 SR",
        route9:
          "<strong>Jeddah</strong> to <strong>Taif and Return</strong> 1500 SR",
        route10:
          "<strong>Makkah</strong> to <strong>Taif and Return</strong> 800 SR",
        route11: "<strong>Per Hour Rates</strong> 150 SR",
        route12:
          "<strong>Madina Hotel</strong> to <strong>Makkah Hotel</strong> 800 SR",
        route13:
          "<strong>Makkah Hotel</strong> to <strong>Jeddah Airport</strong> 450 SR",
        route14: "<strong>Madina Ziarat and Wadiya Jin</strong> 500 SR",
        route15: "<strong>Masjid Ayesha Meeqat</strong> 300 SR",
        route16: "<strong>Masjid Jurana Meeqat</strong> 400 SR",
        route17:
          "<strong>Makkah hotel</strong> to <strong>train station</strong> 250 SR",
        route18:
          "<strong>Makkah train station</strong> to <strong>Makkah Hotel</strong> 250 SR",
        route19:
          "<strong>Medina Train station</strong> to <strong>Medina Hotel</strong> 250 SR",
        route20:
          "<strong>Medina Hotel</strong> to <strong>Medina train station</strong> 250 SR",
      },
    },
    {
      carName: "Hyundai Staria Service",
      seat: "9 Seat",
      imgLink: "https://i.ibb.co/5GhV8Rp/hyundai-staria.png",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>  Makkah Hotel</strong> 300 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>  Jeddah Hotel</strong> 200 SR",
        route2:
          "<strong>Makkah Hotel </strong> to <strong> Madina Hotel</strong> 550 SR",
        route3:
          "<strong>Jeddah Airport </strong> to <strong> Madina Hotel </strong> 550 SR",
        route4:
          "<strong>Madina Airport</strong> to <strong> Madina Hotel </strong> 200 SR",
        route5:
          "<strong>Madina Hotel</strong> to <strong> Madina Airpot </strong> 125 SR",
        route6: "<strong>Makkah Ziyarat</strong> 225 SR",
        route7: "<strong>Madina Ziyarat </strong> 200 SR",
        route8:
          "<strong>Jeddah</strong> to <strong> Taif and Return </strong> 700 SR",
        route9:
          "<strong>Makkah </strong> to <strong> Taif and Return</strong> 500 SR",
        route10: "<strong>Per Hour Rates</strong>  100 SR",
        route11:
          "<strong>Madina Hotel </strong> to <strong> Makkah Hotel </strong> 550 SR",
        route12:
          "<strong>Makkah Hotel </strong> to <strong> Jeddah Airport</strong> 250 SR",
        route13: "<strong>Masjid Ayesha Meeqat</strong> 100 SR",
        route14: "<strong>Masjid Jurana Meeqat</strong> 150 SR",
        route15:
          "<strong>Madina Ziarat </strong> to <strong> Wadiya Jin</strong> 300 SR",
        route16:
          "<strong>Makkah Train Station </strong> to <strong> Makkah Hotel</strong> 150 SR",
        route17:
          "<strong>Medina Train station </strong> to <strong> Medina Hotel</strong> 150 SR",
        route18:
          "<strong>Medina Hotel </strong> to <strong> Medina Train Station</strong> 150 SR",
        route19:
          "<strong>Makkah Hotel </strong> to <strong> Train Station</strong> 150 SR",
      },
    },
    {
      carName: "Innova Car Service",
      seat: "7 Seat",
      imgLink:
        "https://cache4.pakwheels.com/system/car_generation_pictures/6382/original/Toyota_Innova_Front_Right_Angled.jpg?1649402472",
      routeData: {
        route0:
          "<strong>Jeddah Airport</strong> to <strong>  Makkah Hotel</strong> 300 SR",
        route1:
          "<strong>Jeddah Airport</strong> to <strong>  Jeddah Hotel</strong> 200 SR",
        route2:
          "<strong>Makkah Hotel </strong> to <strong> Madina Hotel</strong> 550 SR",
        route3:
          "<strong>Jeddah Airport </strong> to <strong> Madina Hotel </strong> 550 SR",
        route4:
          "<strong>Madina Airport</strong> to <strong> Madina Hotel </strong> 200 SR",
        route5:
          "<strong>Madina Hotel</strong> to <strong> Madina Airpot </strong> 125 SR",
        route6: "<strong>Makkah Ziyarat</strong> 225 SR",
        route7: "<strong>Madina Ziyarat </strong> 200 SR",
        route8:
          "<strong>Jeddah</strong> to <strong> Taif and Return </strong> 700 SR",
        route9:
          "<strong>Makkah </strong> to <strong> Taif and Return</strong> 500 SR",
        route10: "<strong>Per Hour Rates</strong>  100 SR",
        route11:
          "<strong>Madina Hotel </strong> to <strong> Makkah Hotel </strong> 550 SR",
        route12:
          "<strong>Makkah Hotel </strong> to <strong> Jeddah Airport</strong> 250 SR",
        route13: "<strong>Masjid Ayesha Meeqat</strong> 100 SR",
        route14: "<strong>Masjid Jurana Meeqat</strong> 150 SR",
        route15:
          "<strong>Madina Ziarat </strong> to <strong> Wadiya Jin</strong> 300 SR",
        route16:
          "<strong>Makkah Train Station </strong> to <strong> Makkah Hotel</strong> 150 SR",
        route17:
          "<strong>Medina Train station </strong> to <strong> Medina Hotel</strong> 150 SR",
        route18:
          "<strong>Medina Hotel </strong> to <strong> Medina Train Station</strong> 150 SR",
        route19:
          "<strong>Makkah Hotel </strong> to <strong> Train Station</strong> 150 SR",
      },
    },
  ];
  return (
    <>
      <Breadcrumbs page="Book" link="/Book" />
      <div className="flex justify-center text-4xl font-extrabold leading-tight lg:text-6xl">
        <span>
          Pick Your <span className="text-yellow-400">Car</span> Taxi
        </span>
      </div>
      <BookCarList carData={data} />
    </>
  );
};

export default Book;
