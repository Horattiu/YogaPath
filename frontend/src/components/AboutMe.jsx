// import React from "react";

// const AboutMe = () => {
//   return (
//     <div className="bg-[#070707] text-white min-h-screen flex items-center justify-center px-4">
//       <div
//         className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 items-center justify-center "
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         {/* Coloană stângă: text */}
//         <div className="w-full lg:w-1/2">
//           <p className="italic text-lg text-gray-300 mb-10 text-center lg:text-left">
//             {/* Oracol, Vindecătoare, Ghid – o călătoare între lumi și timpuri. */}
//           </p>

//           <div className="space-y-6 text-lg text-left">
//             <p>
//               Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
//               Practician Shaman, Ghid Spiritual și Terapeut Yoga.
//             </p>
//             <p>
//               M-am întâlnit prima dată cu yoga la 6 ani, iar la 11 ani citeam
//               despre Atlantida și cultura maya. Încă de copil visam premonitoriu
//               și primeam mesaje din Spațiul Akashic.
//             </p>
//           </div>

//           <div className="border-t border-yellow-500 my-10 w-full mx-auto lg:mx-0"></div>

//           <div className="space-y-6 text-white text-lg">
//             <h2 className="text-2xl font-semibold text-yellow-500 text-center mb-4">
//               Călătoria Mea
//             </h2>

//             <p>
//               Din 2016 am studiat în India și Europa diverse tradiții de yoga și
//               spiritualitate:
//             </p>

//             <ul className="list-disc pl-5 space-y-1 text-left">
//               <li>TTC 200 h Hatha Yoga – Rishikesh, India</li>
//               <li>TTC 300 h Kundalini Yoga – Rishikesh, India</li>
//               <li>TTC 150 h Tantra – Goa, India</li>
//               <li>TTC 100 h Yoga Therapy – Malaga, Spania</li>
//               <li>TTC 100 h Yoga Kids – Timișoara</li>
//             </ul>

//             <p>
//               Am fost inițiată ca Oracol al Registrelor Akashice alături de
//               Ligia Loali și ca Practician Shaman cu Howard G Charing.
//             </p>

//             <p>
//               Trăiesc ghidată de energia Shakti și de Ghizii Spațiului Sacru al
//               Akashei. Misiunea mea este să ofer mai departe ceea ce am învățat.
//             </p>

//             <p className="italic font-medium text-center text-white mt-10">
//               Pentru asta și pentru tot, mă înclin cu recunoștință infinită.
//             </p>
//           </div>
//         </div>

//         {/* Coloană dreaptă: imagine + overlay + text */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative w-full h-full">
//             <img
//               src="/pozaadela.png"
//               alt="Adela"
//               className="w-full max-h-[800px] object-cover rounded-xl shadow-lg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-4xl md:text-7xl mrs-saint-delafield-regular font-bold text-yellow-500   mr-s text-center">
//                 Who Am I
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#070707] text-white min-h-screen flex items-center justify-center px-4">
      <div
        className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Coloană stângă: text */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <p className="italic text-lg text-gray-300 mb-10 text-center lg:text-left">
            {/* Oracol, Vindecătoare, Ghid – o călătoare între lumi și timpuri. */}
          </p>

          <div className="space-y-6 text-lg text-left">
            <p>
              Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
              Practician Shaman, Ghid Spiritual și Terapeut Yoga.
            </p>
            <p>
              M-am întâlnit prima dată cu yoga la 6 ani, iar la 11 ani citeam
              despre Atlantida și cultura maya. Încă de copil visam premonitoriu
              și primeam mesaje din Spațiul Akashic.
            </p>
          </div>

          <div className="border-t border-yellow-500 my-10 w-full mx-auto lg:mx-0"></div>

          <div className="space-y-6 text-white text-lg">
            <h2 className="text-2xl font-semibold text-yellow-500 text-center mb-4">
              Călătoria Mea
            </h2>

            <p>
              Din 2016 am studiat în India și Europa diverse tradiții de yoga și
              spiritualitate:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-left">
              <li>TTC 200 h Hatha Yoga – Rishikesh, India</li>
              <li>TTC 300 h Kundalini Yoga – Rishikesh, India</li>
              <li>TTC 150 h Tantra – Goa, India</li>
              <li>TTC 100 h Yoga Therapy – Malaga, Spania</li>
              <li>TTC 100 h Yoga Kids – Timișoara</li>
            </ul>

            <p>
              Am fost inițiată ca Oracol al Registrelor Akashice alături de
              Ligia Loali și ca Practician Shaman cu Howard G Charing.
            </p>

            <p>
              Trăiesc ghidată de energia Shakti și de Ghizii Spațiului Sacru al
              Akashei. Misiunea mea este să ofer mai departe ceea ce am învățat.
            </p>

            <p className="italic font-medium text-center text-white mt-10">
              Pentru asta și pentru tot, mă înclin cu recunoștință infinită.
            </p>
          </div>
        </div>

        {/* Coloană dreaptă: imagine + overlay + text */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
          <div className="relative w-full h-full">
            <img
              src="/pozaadela.png"
              alt="Adela"
              className="w-full max-h-[800px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-7xl mrs-saint-delafield-regular font-bold text-yellow-500   mr-s text-center">
                Who Am I
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
