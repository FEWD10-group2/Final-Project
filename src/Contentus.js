import { useState } from "react";
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
    <div className="-mx-2">
      <div>
        <h1>About us</h1>
        <h1>About Hotels.com</h1>
        <p>
          Hotels.com gives travellers one of the widest selections of
          accommodation on the net, including both independent and major chain
          hotels as well as self-catering in over hundreds of thousands
          properties worldwide. The company offers a one-stop shopping source
          for hotel pricing, amenities and availability.
        </p>
        <p>
          This website is operated by Expedia, Inc., with its head office at
          1111 Expedia Group Way W, Seattle, WA98119, USA.
        </p>
        <p>
          Expedia, Inc. is a registered Seller of Travel in the State of
          Washington USA, Licence No. 601975803.
        </p>
        <p>Hong Kong Travel Licence number 354712 held by Expedia, Inc. </p>
      </div>
      <div class="w-full md:w-1/2 px-2">
        <div class="h-auto overflow-hidden w-[330px] h-[200px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!..."
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>address:123</p>
          <p>phone:123</p>
          <p>work time:123</p>
        </div>
      </div>

      <div className="w-full mt-12 m md:w-1/2 ">
        <form
          onSubmit={sendEmail}
          className="border rounded-lg shadow-lg bg-white p-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Contact Us
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
