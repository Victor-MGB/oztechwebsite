import React from 'react'
import image8 from "../Images/image8.png"
import image9 from "../Images/image9.png";
import image10 from "../Images/image10.png";
import image11 from "../Images/image11.png";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-600 mb-8">
          Our Web & Software Services
        </h1>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Our Services
          </h3>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
            Here's what we excel at the most
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg rounded-lg">
              <h2
                className="text-blue-600 hover:underline text-xl md:text-2xl font-semibold mb-4"
              >
                Web Development Service
              </h2>
              <img
                src={image8}
                alt="_Image"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg">
                Get custom-built software and web and mobile apps while making
                significant cost savings. We apply our knowledge, experience,
                expertise, and technologies to provide reliable offshore
                development services.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg rounded-lg">
              <h2
                className="text-blue-600 hover:underline text-xl md:text-2xl font-semibold mb-4"
              >
                Web App
              </h2>
              <img
                src={image9}
                alt="_Image"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg">
                We develop well-planned, highly scalable, and secure web apps
                tailored to your unique needs. Our web application development
                team includes skillful managers, designers, and architects who
                work together to ensure a seamless experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg rounded-lg">
              <h2
                className="text-blue-600 hover:underline text-xl md:text-2xl font-semibold mb-4"
              >
                E-COMMERCE DEVELOPMENT
              </h2>
              <img
                src={image10}
                alt="_Image"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg">
                We’re experts in custom eCommerce development services. We
                unlock the potential of eCommerce technologies like WooCommerce,
                Drupal, Shopify, BigCommerce, and Drupal to create online stores
                with impressive designs and functionalities.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg rounded-lg">
              <h2
                className="text-blue-600 hover:underline text-xl md:text-2xl font-semibold mb-4"
              >
                DEVOPS SERVICES
              </h2>
              <img
                src={image11}
                alt="_Image"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg">
                We provide comprehensive DevOps services to help organizations
                streamline their software delivery processes, improve
                collaboration between development and operations teams, and
                achieve faster time-to-market for software releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Ready to start your project?
          </h3>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
            Contact us now to discuss your requirements and get started!
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services