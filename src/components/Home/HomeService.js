import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCrosshairs } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaShoppingCart } from 'react-icons/fa';
import HomeCount from './HomeCount';

function HomeService() {
  return (
    <>
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-gray-600 text-lg font-semibold">
              Our Services
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Technology and Software Services
            </h1>
            <p className="text-lg text-gray-700">
              We help with Software development along with Web Applications,
              Mobile apps, e-Commerce development, DevOps, and Digital
              Marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <FaCode className="text-blue-600 mb-4 mx-auto" size={24} />
              <a
                href="/webdev"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                Development Services
              </a>
              <p className="text-gray-700">
                We are a global provider of developers in order to build
                cross-border IT and engineering organizations and affiliate
                companies in Europe and America.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <FaGlobe className="text-blue-600 mb-4 mx-auto" size={24} />
              <a
                href="/webapp"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                Web Application Development
              </a>
              <p className="text-gray-700">
                One can rely on the development of impactful, efficient, and
                easy-to-use corporate and customer-facing web apps, web portals,
                SaaS/XaaS products, and more.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <FaCrosshairs className="text-blue-600 mb-4 mx-auto" size={24} />
              <a
                href="/crossplat"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                Cross-Platform Mobile App Development
              </a>
              <p className="text-gray-700">
                We offer peerless expertise in developing cross-platform mobile
                apps including all aspects of transformation, from ideation to
                development and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <FaShoppingCart
                className="text-blue-600 mb-4 mx-auto"
                size={24}
              />
              <a
                href="/ecom"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                E-Commerce Development{" "}
              </a>
              <p className="text-gray-700">
                We're a creative digital agency that specializes in e-commerce
                site developments using a custom web design & development,
                mobile app development, and API Integration.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <RiToolsFill className="text-blue-600 mb-4 mx-auto" size={24} />
              <a
                href="/devop"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                DevOps
              </a>
              <p className="text-gray-700">
                We are a major offshore DevOps service provider situated in the
                United States that offers unique services to increase DevOps
                adoption and execution along with an experienced DevOps team.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <FaAmazon className="text-blue-600 mb-4 mx-auto" size={24} />
              <a
                href="/digital"
                className="text-xl font-bold text-blue-600 hover:underline block mb-2"
              >
                Digital Marketing
              </a>
              <p className="text-gray-700">
                Our digital marketing services are intended to increase brand
                awareness and attract new customers to your company.
                ReformedTech's digital marketing professionals will devise the
                best approach for increasing your online presence using organic
                search, social media, paid ads, and other web-based mediums.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeCount/>
    </>
  );
}

export default HomeService