import React,{useState} from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import HomeIdea from "./HomeIdea";

function HomeCount() {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = [
      {
        name: "Eric Purucker",
        role: "CEO",
        feedback:
          "OzTech design did a great job for us. We may have been one of their picky customers but they were always patient with our changes. We highly recommend Red Spot for website design. They are very responsive and quick when it comes to changes.",
      },

      {
        name: "Godwin Prince",
        role: "CEO",
        feedback:
          "ReformedTech design did a great job for us. We may have been one of their picky customers but they were always patient with our changes. We highly recommend Red Spot for website design. They are very responsive and quick when it comes to changes.",
      },
    ];

    const handleNext = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    const handlePrev = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

  return (
    <>
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Some Count That Matters
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Our Achievement in the Journey Depicted in Numbers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">25</h1>
              <p className="text-lg text-gray-700">Developers</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">20</h1>
              <p className="text-lg text-gray-700">Fortune Clients</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">7</h1>
              <p className="text-lg text-gray-700">Years of Journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Happy Customers
            </h1>
            <p className="text-lg text-gray-700">
              Feedback from these happy customers helps us in reaching the
              heights
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="mr-4">
              <FaArrowLeft
                size={24}
                onClick={handlePrev}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center">
              <RiUserFollowFill size={64} className="text-blue-500 mb-2" />
              <h1 className="text-xl font-bold mb-1">
                {testimonials[activeIndex].name}
              </h1>
              <span className="text-gray-600">
                {testimonials[activeIndex].role}
              </span>
              <p className="text-gray-800 text-center mt-4">
                {testimonials[activeIndex].feedback}
              </p>
            </div>

            <div className="ml-4">
              <FaArrowRight
                size={24}
                onClick={handleNext}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeIdea/>
    </>
  );
}

export default HomeCount;
