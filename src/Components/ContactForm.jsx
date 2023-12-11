import React from "react";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9fd8tn",
        "template_n1nnh07",
        form.current,
        "dys7SFrmJ2i985__K"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="flex justify-center mt-10 text-4xl font-extrabold leading-tight lg:text-5xl">
          <span>
            Contact
            <span className="text-yellow-400"> Us</span>
          </span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full p-8 my-4 md:px-12 mr-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline number"
                type="number"
                name="phone-number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message"
                name="message"
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 flex justify-center items-center">
              <button className="uppercase text-sm font-bold tracking-wide bg-yellow-400 hover:bg-yellow-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
