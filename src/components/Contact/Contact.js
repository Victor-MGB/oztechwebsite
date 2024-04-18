import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jr4qd3s", "template_aeqg7zk", form.current, {
        publicKey: "yUOB_COP3hwULj7Ou",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Need Help with your website?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:w-1/2 md:mr-8">
              <h4 className="text-lg font-semibold mb-2">GET IN TOUCH</h4>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Contact Us Here
              </h1>
              <p className="text-gray-700 mb-8">
                We’re here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center">
              <FaEnvelope className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">General Contact</h3>
                <p className="text-gray-700">
                  Have some feedback or a general question? Get in touch with us
                  below
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        {isSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded"
            role="alert"
          >
            <p className="font-bold">Success!</p>
            <p>Your message has been successfully sent.</p>
          </div>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
