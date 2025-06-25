// import React from "react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const TextImageComponent = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration in milliseconds
//       offset: 350,
//       once: false, // Allows animation to trigger every time element is in view
//     });
//   }, []);
//   return (
//     <div data-aos="fade-up" className="bg-black   max-w-7xl mx-auto">
//       <div className="bg-black min-h-screen w-5/6  flex flex-col lg:flex-row items-center justify-between mx-auto gap-10">
//         {/* Text în stânga */}
//         <div className="text-gray-300 text-center lg:text-left w-full lg:w-1/2">
//           <h1 className="mrs-saint-delafield-regular text-4xl lg:text-5xl">
//             Who am I?
//           </h1>
//           <p className="mt-4 text-base lg:text-lg montserrat">
//             Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
//             Practician Shaman, Ghid Spiritual și Terapeut Yoga. M-am întâlnit
//             prima data cu yoga la 6 ani când m-am și îndrăgostit ireversibil de
//             această practica....
//             <span className="text-yellow-400 ml-1 cursor-pointer">
//               citeste mai mult
//             </span>
//           </p>
//         </div>

//         {/* Imagine în dreapta */}
//         <div className="w-full lg:w-1/3">
//           <img
//             src="./whoami.png"
//             alt="Imagine în dreapta"
//             className="w-3/4 lg:w-full h-auto mx-auto filter rounded-md "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextImageComponent;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const TextImageComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 350,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#060606] py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        data-aos="fade-up"
      >
        {/* Text */}
        <div className="text-gray-300 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="mrs-saint-delafield-regular text-4xl sm:text-5xl lg:text-6xl">
            Who am I?
          </h1>
          <p className="mt-4 text-base md:text-lg montserrat">
            Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
            Practician Shaman, Ghid Spiritual și Terapeut Yoga. M-am întâlnit
            prima dată cu yoga la 6 ani când m-am și îndrăgostit ireversibil de
            această practică...
            <span className="text-yellow-400 ml-1 cursor-pointer">
              <Link
                to="/about"
                className="text-yellow-400 ml-1 cursor-pointer hover:text-yellow-500 transition-colors duration-200"
              >
                citeste mai mult
              </Link>
            </span>
          </p>
        </div>

        {/* Imagine */}
        <div className="w-full lg:w-1/3">
          <img
            src="./whoami.png"
            alt="Adela"
            className="w-3/4 sm:w-2/3 lg:w-full h-auto mx-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TextImageComponent;
