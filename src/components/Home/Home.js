import React,{useState,useEffect} from "react";
import videologo1 from "../videos/videologo1.mp4";
import { FaCode, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";
import image1 from '../Images/image1.png'
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from '../Images/image4.png'
import image5 from "../Images/image5.png";
import image6 from '../Images/image6.png'
import HomeService from "./HomeService";


function Home() {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clientCount < 80) {
        setClientCount((prevCount) => prevCount + 1);
      }
    }, 1000); // Increment every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [clientCount]);
  return (
    <>
      <section className="flex justify-between mt-4 items-center p-8">
        <div className="max-w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Achieve Growth And Success With{" "}
            <span className="text-blue-500">OzTech</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            We leverage software development to develop your ventures, measure
            your impact, and carry out your mission forward. Our offshore
            software development team and in-house products are ready to serve
            your needs. See our latest work and get in touch with us!
          </p>
          <a
            href="/projects"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Our Works
          </a>
        </div>
        <div className="max-w-1/2">
          <video autoPlay muted loop className="w-[105rem] center rounded-lg">
            <source src={videologo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-gray-600 font-semibold">Our Clients</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {clientCount}+
            </h1>
            <p className="text-lg text-gray-700">
              We work with startups, corporations, and nonprofits across various
              service providers. Our mission is to deliver results within time
              and budget restraints. That’s why many customers rely on us.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div>
              <a
                href="https://victor-estate.netlify.app/"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Vector Estate
              </a>
              <a
                href="_"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Car Commerce
              </a>
              <a
                href="https://football-stat-90.netlify.app/"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Football Stats
              </a>
              <a
                href="https://trustgold.site/"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Trust Gold
              </a>
            </div>

            <div>
              <a
                href="http://zinocoinn.com/"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Zino Coinn 
              </a>
              <a
                href="http://vegopayai.com/"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Vego Pay ai
              </a>
              <a
                href="http://dayprofits.link/"
                className="block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Day Profits
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Technology Team
            </h3>
            <div className="flex justify-center mt-4">
              <span className="flex items-center mr-4">
                <FaCode className="text-blue-600 mr-2" size={24} /> Coding
              </span>
              <span className="flex items-center mr-4">
                <FaTools className="text-blue-600 mr-2" size={24} /> Engineering
              </span>
              <span className="flex items-center mr-4">
                <FaLaptopCode className="text-blue-600 mr-2" size={24} />{" "}
                Development
              </span>
              <span className="flex items-center">
                <FaDatabase className="text-blue-600 mr-2" size={24} /> Database
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            We provide full-time remote developers
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <img
              src={image1}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
            <img
              src={image2}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
            <img
              src={image3}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <img
              src={image4}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
            <img
              src={image5}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
            <img
              src={image6}
              alt="Placeholder"
              className="rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      <HomeService/>
    </>
  );
}

export default Home;
