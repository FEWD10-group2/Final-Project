import { useState } from "react";
import phone from "./phone-calling-svgrepo-com.svg";
import time from "./time-svgrepo-com.svg";
import address from "./address-svgrepo-com.svg";
import "./App.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    e.target.reset();
  };
  return (
    <div className="-mx-2 m md:w-1/2 flex flex-wrap pt-8 pb-8 bg-cover bg-center justify-center items-center">
      <div className="flex w-full md:w-1/2 px-2 flex-col">
        <div className="overflow-hidden w-[550px] h-[380px] ml-36 mb-4 mt-20 absolute">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.447965134475!2d114.1318653694974!3d22.36148663898441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f89825833649%3A0x40948ca5db317aa4!2z6JG15raM6JG15piM6LevNTHomZ_kuZ3pvo3osr_mmJPkuK3lv4Mx5bqn!5e0!3m2!1szh-TW!2shk!4v1712129789778!5m2!1szh-TW!2shk"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="flex flex-basic-2 md:w-1/2 px-2 flex-col ml-36 absolute top-[37rem]">
          <div className="mb-4 flex items-center pr-[25rem]">
            <img src={address} alt="Address" className="w-6 h-6 mr-2" />
            <p>
              Address: Room 8A, 8/F, Tower 1, Kowloon Commerce Centre, 51 Kwai
              Cheong Road, Kwai Chung.
            </p>
          </div>
          <div className="mb-4 flex items-center pr-4">
            <img src={phone} alt="Phone" className="w-6 h-6 mr-2" />
            <p>Phone: 21800000</p>
          </div>
          <div className="mb-4 flex items-center">
            <img src={time} alt="Time" className="w-6 h-6 mr-2" />
            <span>Work Time: 9:30AM - 17:00PM</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 m md:w-1/4 mt-32">
        <form
          onSubmit={sendEmail}
          className="border rounded-lg shadow-lg bg-white p-4 w-[30rem] absolute top-[10.5rem] right-[25.25rem]"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Content Us
          </h2>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Send"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
