import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1w6owdr",
        "template_op5qrm3",
        form.current,
        "AX0Zi8A6oJKlELg9r"
      )
      .then(
        (result) => {
          toast.success("Message Sent", { autoClose: 1800 });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Sent", { autoClose: 1900 });
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
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline shadow-lg"
                type="text"
                name="from_name"
                placeholder="Name"
                required
              />
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline shadow-lg"
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline number shadow-lg"
                type="number"
                name="from_number"
                placeholder="Phone Number"
                required
                min="0"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message"
                name="message"
                required
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline shadow-lg"
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
