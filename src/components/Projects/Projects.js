import React from 'react'
import { FaUserTie, FaShoppingCart, FaBriefcase, FaPenNib, FaChalkboardTeacher, FaUsers, FaCloud, FaFileAlt, FaTools } from 'react-icons/fa';
import Footer from '../Footer/Footer';

function Projects() {
  
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Our Website Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Website */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaUserTie className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
              <p className="text-gray-600 mb-6">
                Elevate your online presence with a sleek and professional
                corporate website.
              </p>
              
            </div>
            {/* E-Commerce Platform */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaShoppingCart className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600 mb-6">
                Drive sales and maximize revenue with a robust e-commerce
                platform tailored to your business goals.
              </p>
              
            </div>
            {/* Portfolio Website */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaBriefcase className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-600 mb-6">
                Highlight your work and attract new opportunities with a
                stunning portfolio website.
              </p>
              
            </div>
            {/* Blogging Platform */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaPenNib className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Blogging Platform</h3>
              <p className="text-gray-600 mb-6">
                Share your insights, expertise, and industry knowledge with a
                dynamic blogging platform.
              </p>
              
            </div>
            {/* Online Learning Portal */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaChalkboardTeacher className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Online Learning Portal
              </h3>
              <p className="text-gray-600 mb-6">
                Empower learners and educators with an innovative online
                learning portal.
              </p>
              
            </div>
            {/* Community Forum */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaUsers className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600 mb-6">
                Facilitate meaningful connections and discussions with a
                community forum platform.
              </p>
              
            </div>
            {/* SaaS Application */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaCloud className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">SaaS Application</h3>
              <p className="text-gray-600 mb-6">
                Transform your ideas into scalable software-as-a-service (SaaS)
                applications that deliver value to users worldwide.
              </p>
              
            </div>
            {/* Landing Page */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaFileAlt className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
              <p className="text-gray-600 mb-6">
                Capture leads, promote offers, and drive conversions with a
                high-converting landing page.
              </p>
              
            </div>
            {/* Personal Website */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaUserTie className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Personal Website</h3>
              <p className="text-gray-600 mb-6">
                Showcase your skills, portfolio, and accomplishments with a
                professional personal website.
              </p>
              
            </div>
            {/* Custom Web Solutions */}
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <FaTools className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Custom Web Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Have a unique idea or a specific requirement? Our team
                specializes in developing custom web solutions tailored to your
                exact specifications.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Projects