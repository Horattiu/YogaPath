// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleScrollToContact = (event) => {
//     event.preventDefault();
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const contactSection = document.getElementById("contact");
//         if (contactSection) {
//           contactSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <>
//       <nav className="border-black bg-black relative">
//         <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 px-12 md:px-0">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">
//               logo
//             </span>
//           </Link>
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded={isMenuOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>

//           {/* Desktop menu */}
//           <div className="hidden md:flex md:items-center md:justify-between">
//             <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
//               <li>
//                 <Link
//                   to="/about"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/offerings"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   OFFERINGS
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/events"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   EVENTS
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleScrollToContact}
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   CONTACT
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Full-screen dropdown menu for mobile */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 md:hidden">
//             {/* Close button */}
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-gray-200 text-3xl font-bold"
//             >
//               &times;
//             </button>

//             <ul className="font-medium flex flex-col space-y-6 text-center">
//               <li>
//                 <Link
//                   to="/about"
//                   className="block text-gray-200 text-xl hover:text-yellow-500"
//                   onClick={toggleMenu}
//                 >
//                   ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/offerings"
//                   className="block text-gray-200 text-xl hover:text-yellow-500"
//                   onClick={toggleMenu}
//                 >
//                   OFFERINGS
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/blogs"
//                   className="block text-gray-200 text-xl hover:text-yellow-500"
//                   onClick={toggleMenu}
//                 >
//                   BLOGS
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={(e) => {
//                     toggleMenu();
//                     handleScrollToContact(e);
//                   }}
//                   className="block text-gray-200 text-xl hover:text-yellow-500"
//                 >
//                   CONTACT
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleScrollToContact = (event) => {
//     event.preventDefault();
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const contactSection = document.getElementById("contact");
//         if (contactSection) {
//           contactSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <>
//       <nav className="border-black bg-[#050505] relative">
//         <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 px-12 md:px-0">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">
//               <img src="./logo.png" alt="" className="w-20 " />
//             </span>
//           </Link>
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//             aria-controls="navbar-default"
//             aria-expanded={isMenuOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5 text-gray-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>

//           {/* Desktop menu */}
//           <div className="hidden md:flex md:items-center md:justify-between">
//             <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
//               <li>
//                 <Link
//                   to="/about"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   ABOUT
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/offerings"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   OFFERINGS
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/events"
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   EVENTS
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleScrollToContact}
//                   className="block py-2 px-3 rounded text-gray-200 hover:text-yellow-500"
//                 >
//                   CONTACT
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile menu with slide animation */}
//         <div
//           className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden  bg-black flex flex-col items-center justify-center ${
//             isMenuOpen
//               ? "translate-x-0"
//               : "translate-x-full pointer-events-none"
//           }`}
//         >
//           {/* Close button */}
//           <button
//             onClick={toggleMenu}
//             className="absolute top-4 right-4 text-gray-200 text-3xl font-bold"
//           >
//             &times;
//           </button>

//           <ul className="font-medium flex flex-col space-y-6 text-center">
//             <li>
//               <Link
//                 to="/about"
//                 className="block text-gray-200 text-xl hover:text-yellow-500"
//                 onClick={toggleMenu}
//               >
//                 ABOUT
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/offerings"
//                 className="block text-gray-200 text-xl hover:text-yellow-500"
//                 onClick={toggleMenu}
//               >
//                 OFFERINGS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/events"
//                 className="block text-gray-200 text-xl hover:text-yellow-500"
//                 onClick={toggleMenu}
//               >
//                 EVENTS
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={(e) => {
//                   toggleMenu();
//                   handleScrollToContact(e);
//                 }}
//                 className="block mx-auto text-gray-200 text-xl hover:text-yellow-500"
//               >
//                 CONTACT
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleScrollToContact = (event) => {
//     event.preventDefault();
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate("/contact");
//       setTimeout(() => {
//         const section = document.getElementById("contact");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <nav className="border-black bg-[#050505] relative">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-6 md:px-12">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">
//             <img src="./logo.png" alt="Logo" className="w-20" />
//           </span>
//         </Link>

//         {/* Hamburger button - visible on small screens only */}
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="md:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:items-center">
//           <ul className="flex flex-row space-x-8 font-medium text-gray-200">
//             <li>
//               <Link to="/about" className="hover:text-yellow-500">
//                 ABOUT
//               </Link>
//             </li>
//             <li>
//               <Link to="/offerings" className="hover:text-yellow-500">
//                 OFFERINGS
//               </Link>
//             </li>
//             <li>
//               <Link to="/events" className="hover:text-yellow-500">
//                 EVENTS
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={handleScrollToContact}
//                 className="hover:text-yellow-500"
//               >
//                 CONTACT
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out md:hidden ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Close Button - exact poziție și dimensiune ca hamburger */}
//         <button
//           onClick={toggleMenu}
//           className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
//           aria-label="Close menu"
//         >
//           <span className="text-3xl leading-none">&times;</span>
//         </button>

//         {/* Mobile Nav Links */}
//         <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium text-gray-200">
//           <li>
//             <Link
//               to="/about"
//               onClick={toggleMenu}
//               className="hover:text-yellow-500"
//             >
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/offerings"
//               onClick={toggleMenu}
//               className="hover:text-yellow-500"
//             >
//               OFFERINGS
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/events"
//               onClick={toggleMenu}
//               className="hover:text-yellow-500"
//             >
//               EVENTS
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={(e) => {
//                 toggleMenu();
//                 handleScrollToContact(e);
//               }}
//               className="hover:text-yellow-500"
//             >
//               CONTACT
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Înlocuit cu navigare directă pe /contact
  const handleGoToContact = (event) => {
    event.preventDefault();
    navigate("/contact");
    setIsMenuOpen(false); // Închide meniul dacă e deschis
  };

  return (
    <nav className="border-black bg-[#050505] relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">
            <img src="./logo.png" alt="Logo" className="w-20" />
          </span>
        </Link>

        {/* Hamburger button - visible on small screens only */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center">
          <ul className="flex flex-row space-x-8 font-medium text-gray-200">
            <li>
              <Link to="/about" className="hover:text-yellow-500">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/offerings" className="hover:text-yellow-500">
                OFFERINGS
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-yellow-500">
                EVENTS
              </Link>
            </li>
            <li>
              <button
                onClick={handleGoToContact}
                className="hover:text-yellow-500"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
          aria-label="Close menu"
        >
          <span className="text-3xl leading-none">&times;</span>
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium text-gray-200">
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-yellow-500"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/offerings"
              onClick={toggleMenu}
              className="hover:text-yellow-500"
            >
              OFFERINGS
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              onClick={toggleMenu}
              className="hover:text-yellow-500"
            >
              EVENTS
            </Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                toggleMenu();
                handleGoToContact(e);
              }}
              className="hover:text-yellow-500"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
