import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="container">
        <div className="text-gray-600 body-font">
          <div className=" w-full h-full bg-gray-300">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951142.3876132265!2d38.655573678124995!3d21.374151100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205ec2de11183%3A0xf8e8dc7efb6d0e0f!2sUmrah%20Taxi%20Service!5e0!3m2!1sen!2s!4v1701507349703!5m2!1sen!2s"
              height="500px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
