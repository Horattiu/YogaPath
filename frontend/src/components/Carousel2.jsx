// // Carousel.jsx
// import { useState } from "react";

// const images = ["/event1.jpg", "/event2.jpg", "/event3.jpg"];

// export default function Carousel2() {
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
//     <div className="relative w-full overflow-hidden">
//       {/* Images */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index}`}
//             className="w-full flex-shrink-0 object-cover"
//           />
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//       >
//         ▶
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 rounded-full ${
//               current === index ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const images = ["/event1.jpg", "/retreat2-1.jpg"];

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

// import { useState } from "react";

// const images = ["/event1.jpg", "/retreat2-1.jpg"];

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
//     <div className="bg-[#060606] px-2 sm:px-4 pb-10">
//       <div className="relative mx-auto overflow-hidden rounded-lg max-w-[1200px] w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#060606]">
//         {/* Images */}
//         <div
//           className="flex transition-transform duration-500 h-full"
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
//           className="absolute top-1/2 left-2 sm:left-4 md:left-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full shadow w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
//         >
//           <img
//             src="/left-arrow.png"
//             alt="Previous"
//             className="w-4 h-4 sm:w-5 sm:h-5"
//           />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 sm:right-4 md:right-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full shadow w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
//         >
//           <img
//             src="/right-arrow.png"
//             alt="Next"
//             className="w-4 h-4 sm:w-5 sm:h-5"
//           />
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

const images = ["/event1.jpg", "/retreat2-1.jpg"];

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
    <div className="bg-[#060606] px-2 sm:px-4 pb-10">
      <div className="relative mx-auto max-w-[1200px] w-full overflow-hidden rounded-lg bg-[#060606] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        {/* Slide track */}
        <div
          className="flex h-full transition-transform duration-500"
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
          className="absolute top-1/2 left-2 sm:left-4 md:left-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full shadow w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          <img
            src="/left-arrow.png"
            alt="Previous"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 md:right-10 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full shadow w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          <img
            src="/right-arrow.png"
            alt="Next"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
