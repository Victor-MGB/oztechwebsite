import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import logo11 from "../Images/logo11.jpeg";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          <div className="w-full md:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <img
                src={logo11}
                alt="_logo"
                className="text-3xl w-[6rem] h-[8rem] rounded-lg font-bold"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Useful Resources</h3>
              <ul>
                <li>
                  <a href="/case">Case Study</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/terms">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt className="inline-block mr-2" size={24} />
                  <span>House: Road: 07, Obia, Anambra, Nigeria.</span>
                </li>
                <li>
                  <FaPhoneAlt className="inline-block mr-2" size={24} />
                  <span>+234 902 135 7526</span>
                </li>
                <li>
                  <FaEnvelope className="inline-block mr-2" size={24} />
                  <span>oztech640@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="container mx-auto flex justify-between px-4">
          <p className="text-gray-500">© 2024 OzTech, All rights reserved.</p>
          <div>
            <a href="_" className="text-gray-500 hover:text-gray-300 mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="_" className="text-gray-500 hover:text-gray-300 mr-4">
              <FaInstagram size={24} />
            </a>
            <a href="_" className="text-gray-500 hover:text-gray-300 mr-4">
              <FaTiktok size={24} />
            </a>
            <a href="_" className="text-gray-500 hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer