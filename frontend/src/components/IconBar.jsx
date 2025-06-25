// import React from "react";

// const IconBar = () => {
//   return (
//     <div className="bg-black h-52 flex items-center justify-center">
//       <div className="flex space-x-40 gap-20">
//         {/* Iconițele din folderul public cu invert filter */}
//         <img
//           src="./lotusicon.png"
//           alt="Icon 1"
//           className="h-12 w-12 filter invert"
//         />
//         <img
//           src="./lotus-flower.png"
//           alt="Icon 2"
//           className="h-16 w-16 filter invert opacity-80"
//         />
//         <img
//           src="./lotusicon.png"
//           alt="Icon 3"
//           className="h-12 w-12 filter invert"
//         />
//       </div>
//     </div>
//   );
// };

// export default IconBar;

import React from "react";

const IconBar = () => {
  return (
    <div className="bg-[#060606] h-52 flex items-center justify-center">
      <div className="flex gap-6 md:gap-20 lg:space-x-40">
        {/* Iconițele din folderul public cu invert filter */}
        <img
          src="./lotusicon.png"
          alt="Icon 1"
          className="h-10 w-10 md:h-12 md:w-12 filter invert"
        />
        <img
          src="./lotus-flower.png"
          alt="Icon 2"
          className="h-12 w-12 md:h-16 md:w-16 filter invert opacity-80"
        />
        <img
          src="./lotusicon.png"
          alt="Icon 3"
          className="h-10 w-10 md:h-12 md:w-12 filter invert"
        />
      </div>
    </div>
  );
};

export default IconBar;
