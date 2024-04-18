import React from 'react'
import Footer from '../Footer/Footer';

function HomeIdea() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Have An Idea
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Let's Turn Your Ideas Into Valuable Products
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default HomeIdea