// import { useState } from "react";

// const images = [
//   "/feedback1.jpg",
//   "/feedback.png",
//   "/feedback3.jpg",
//   "/feedback4.jpg",
//   "/feedback5.jpg",
//   "/feedback6.jpg",
// ];

// export default function Carousel() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((current - 1 + images.length) % images.length);
//   };

//   const nextSlide = () => {
//     setCurrent((current + 1) % images.length);
//   };

//   const goToSlide = (index) => {
//     setCurrent(index);
//   };

//   return (
//     <div className="bg-[#060606]">
//       <div className="relative mx-auto mt-20 overflow-hidden rounded-lg max-w-[1200px] w-full h-[600px] bg-[#060606]">
//         {/* Images */}
//         <div
//           className="flex transition-transform duration-500 h-full "
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-contain flex-shrink-0"
//             />
//           ))}
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//         >
//           <img src="/left-arrow.png" alt="Previous" className="w-6 h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//         >
//           <img src="/right-arrow.png" alt="Next" className="w-6 h-6" />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-3 w-3 rounded-full ${
//                 current === index ? "bg-yellow-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

const images = [
  "/feedback1.jpg",
  "/feedback.png",
  "/feedback3.jpg",
  "/feedback4.jpg",
  "/feedback5.jpg",
  "/feedback6.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="bg-[#060606] px-4">
      <div className="relative mx-auto mt-20 overflow-hidden rounded-lg max-w-[1200px] w-full h-[600px] bg-[#060606]">
        {/* Images */}
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          <div className="w-6 h-6 aspect-square">
            <img
              src="/left-arrow.png"
              alt="Previous"
              className="w-full h-full object-contain"
            />
          </div>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          <div className="w-6 h-6 aspect-square">
            <img
              src="/right-arrow.png"
              alt="Next"
              className="w-full h-full object-contain"
            />
          </div>
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                current === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
