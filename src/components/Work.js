import React from "react";
import MakersBNB from "../assets/projects/makersBNB.png";
import PetFeed from "../assets/projects/petFeed.png";
import Acebookers from "../assets/projects/acebookers.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F4B393]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${MakersBNB})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
               flex justify-center items-center mx:auto content-div"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ruby Application
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${PetFeed})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Application
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${Acebookers})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx:auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Application
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  {" "}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
