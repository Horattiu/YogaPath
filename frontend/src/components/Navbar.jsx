// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Înlocuit cu navigare directă pe /contact
//   const handleGoToContact = (event) => {
//     event.preventDefault();
//     navigate("/contact");
//     setIsMenuOpen(false); // Închide meniul dacă e deschis
//   };

//   return (
//     <nav className="border-black bg-[#050505] relative montserrat">
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
//                 onClick={handleGoToContact}
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
//         {/* Close Button */}
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
//                 handleGoToContact(e);
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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleGoToContact = (event) => {
    event.preventDefault();
    navigate("/contact");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#050505] relative montserrat h-20 border-b border-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto h-full px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="./logo.png"
            alt="Logo"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Hamburger - Mobile */}
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
        <ul className="hidden md:flex flex-row space-x-8 font-medium text-gray-200">
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-6 w-12 h-12 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
          aria-label="Close menu"
        >
          <span className="text-5xl">&times;</span>
        </button>

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
