import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import { FaLifeRing } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaTools, FaShieldAlt } from "react-icons/fa";
import image19 from "../Images/imaage19.png"
import { IoEllipse } from "react-icons/io5";
import Footer from '../Footer/Footer';


function About() {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Meet our artistic developers and designers
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Who we are</h2>
            <p className="text-gray-600">
              We're a full-service mobile and web development company based in
              Bangladesh. We take pride in our dynamic team of software
              developers, web designers and developers, engineers, and business
              strategies.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Our values</h2>
            <p className="text-gray-600">
              OzTech creates enterprise-grade product development to help
              entrepreneurs unleash their full potential. We're driven by
              purpose, not just profit. That's why client satisfaction is our
              topmost priority.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Industries we serve</h2>
            <p className="text-gray-600">
              We've been helping clients operating in various industries
              worldwide. Our clients include startups, medium-sized businesses,
              and established organizations who rely on us for their digital
              needs. We listen to you and develop tailored to your unique
              business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose OzTech
          </h1>
          <p className="text-center text-gray-600">
            OzTech is a privately-owned technology solution provided with a
            proud team of experts. If you wonder why to choose us to support
            your IT infrastructure, here are the things that make us unique:
          </p>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Our People</h3>
              <p className="text-gray-600">
                Our team impacts our success. That's why we hire skillful and
                dedicated people.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaHeadset className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                To ensure complete client satisfaction, we provide superior
                customer services.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaLifeRing className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Unmatched Support</h3>
              <p className="text-gray-600">
                Our talented engineers are always there to solve all of your IT
                issues.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <FaStar className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We commit to delivering outstanding IT solutions with real
                values.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaTools className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Our Tools</h3>
              <p className="text-gray-600">
                We're equipped with the best tools and technologies to deliver
                custom solutions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <p className="text-gray-600">
                We offer all types of design and development services for mobile
                and web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Philosophy
          </h1>
          <p className="text-center text-gray-600 mb-8">
            In today’s ever-changing world of technology, people come up with
            new ideas every day. Our talented developers can provide customized
            solutions that help your business grow and stand out no matter your
            needs
          </p>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <img
              src={image19}
              alt="_image"
              className="w-full md:w-1/3 mb-8 md:mb-0"
            />

            <div className="w-full md:w-2/3 md:ml-8">
              <div className="flex items-center mb-4">
                <IoEllipse size={24} className="text-blue-500 mr-2" />{" "}
                <p className="text-gray-600">
                  Multi-page sites and one-page sites
                </p>
              </div>
              <div className="flex items-center mb-4">
                <IoEllipse size={24} className="text-blue-500 mr-2" />{" "}
                <p className="text-gray-600">
                  Built with Bootstrap 5 and Tailwind or PrelineUi
                </p>
              </div>
              <div className="flex items-center mb-4">
                <IoEllipse size={24} className="text-blue-500 mr-2" />{" "}
                <p className="text-gray-600">
                  little fortune for updates and support
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg py-4">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-blue-500">
                      40+
                    </span>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-200 rounded-lg py-4">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-blue-500">
                      150+
                    </span>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-200 rounded-lg py-4">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-blue-500">
                      250+
                    </span>
                    <p className="text-gray-600">Dedicated Members</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-200 rounded-lg py-4">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-blue-500">
                      40+
                    </span>
                    <p className="text-gray-600">Congratulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About