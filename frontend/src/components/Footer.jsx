// import React from "react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import MailchimpForm from "./MailchimpForm";

// function Footer() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration in milliseconds
//       offset: 300,
//       once: false, // Allows animation to trigger every time element is in view
//     });
//   }, []);
//   return (
//     <>
//       <div class=" bg-[#060606]  pt-24 md:pt-28" id="contact">
//         <div class=" px-6 md:px-0 grid sm:grid-cols-2 items-start gap-10 py-10 mx-auto max-w-5xl bg-[#060606]  rounded-md font-[sans-serif]">
//           <div>
//             <h1 class="text-gray-200 text-5xl  mrs-saint-delafield-regular">
//               Let's Talk
//             </h1>
//             <p class="text-base text-gray-300 mt-4 montserrat">
//               Daca ceea ce sunt și fac te cheamă să experimenăm împreună,
//               scrie-mi un mesaj pentru orice ai nevoie: - citiri akashcice,
//               spiritual coaching,calatorii shamanice de vindecare, sesiuni
//               private de yoga/ tatra/kundalini, workshopuri/cursuri, colaborari
//               ca și guest la evenimentele tale
//             </p>

//             <div class="mt-4">
//               <h2 class="text-gray-300 text-base font-bold">Email</h2>
//               <ul class="mt-4">
//                 <li class="flex items-center">
//                   <div class="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                       height="20px"
//                       fill="#FFDF00"
//                       viewBox="0 0 479.058 479.058"
//                     >
//                       <path
//                         d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
//                         data-original="#000000"
//                       />
//                     </svg>
//                   </div>
//                   <a href="javascript:void(0)" class=" text-sm ml-4">
//                     <small class="block">Mail</small>
//                     <p className="text-gray-300">yoga.adele@gmail.com</p>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div class="mt-4">
//               <h2 class="text-gray-300 text-base font-bold">Socials</h2>

//               <ul class="flex mt-4 space-x-2">
//                 <li class="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                   <a href="javascript:void(0)">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                       height="20px"
//                       fill="#FFDF00"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
//                         data-original="#000000"
//                       />
//                     </svg>
//                   </a>
//                 </li>

//                 <li class="bg-[#060606]h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                   <a href="javascript:void(0)">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                       height="20px"
//                       fill="#FFDF00"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
//                     </svg>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <form class="ml-auto space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               class="w-full text-gray-300 rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               class="w-full text-gray-300 rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               class="w-full text-gray-300 rounded-md py-2.5 px-4 border bg-gray-200 text-sm outline-yellow-500"
//             />
//             <textarea
//               placeholder="Message"
//               rows="6"
//               class="w-full text-gray-300 rounded-md px-4 border text-sm pt-2.5 bg-gray-200 outline-yellow-500"
//             ></textarea>
//             <button
//               type="button"
//               class="font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm px-4 py-3 w-full !mt-6"
//             >
//               Trimite
//             </button>
//           </form>
//         </div>
//       </div>
//       <MailchimpForm />

//       <div className="text-center bg-[#060606] p-2">
//         <hr className="styled-hr" />
//         <p className="text-gray-200 text-sm ">
//           © 2024 Adela's yoga path. All rights reserved
//         </p>
//       </div>
//     </>
//   );
// }

// export default Footer;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import MailchimpForm from "./MailchimpForm";

// function Footer() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       offset: 300,
//       once: false,
//     });
//   }, []);

//   return (
//     <>
//       <div className="bg-[#060606] pt-24 md:pt-28" id="contact">
//         <div className="px-6 md:px-0 grid sm:grid-cols-2 items-start gap-10 py-10 mx-auto max-w-5xl bg-[#060606] rounded-md font-[sans-serif]">
//           <div>
//             <h1 className="text-gray-200 text-5xl mrs-saint-delafield-regular">
//               Let's Talk
//             </h1>
//             <p className="text-base text-gray-300 mt-4 montserrat">
//               Daca ceea ce sunt și fac te cheamă să experimenăm împreună,
//               scrie-mi un mesaj pentru orice ai nevoie: - citiri akashcice,
//               spiritual coaching, călătorii șamanice de vindecare, sesiuni
//               private de yoga/tantra/kundalini, workshopuri/cursuri, colaborări
//               ca și guest la evenimentele tale.
//             </p>

//             <div className="mt-4 space-y-4">
//               <div>
//                 <h2 className="text-gray-300 text-base font-bold">Email</h2>
//                 <ul className="mt-2">
//                   <li className="flex items-center">
//                     <div className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                       {/* Email Icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20px"
//                         height="20px"
//                         fill="#FFDF00"
//                         viewBox="0 0 479.058 479.058"
//                       >
//                         <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
//                       </svg>
//                     </div>
//                     <a
//                       href="mailto:yoga.adele@gmail.com"
//                       className="text-sm ml-4"
//                     >
//                       <p className="text-gray-300">yoga.adele@gmail.com</p>
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-gray-300 text-base font-bold">Telefon</h2>
//                 <ul className="mt-2">
//                   <li className="flex items-center">
//                     <div className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                       {/* Phone Icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20px"
//                         height="20px"
//                         fill="#FFDF00"
//                         viewBox="0 0 512 512"
//                       >
//                         <path d="M391.1 351.1c-24.6 0-48.3-3.8-70.8-11.2-11.3-3.7-23.8-1-32.5 6.8l-45.5 34.6c-50.3-26.7-91.2-67.6-117.9-117.9l34.6-45.5c7.9-8.7 10.6-21.2 6.9-32.5-7.4-22.5-11.2-46.2-11.2-70.8 0-17.4-14.1-31.5-31.5-31.5H47.6C30.2 83.1 16 97.2 16 114.6 16 313.7 198.3 496 397.4 496c17.4 0 31.5-14.1 31.5-31.5v-75.3c.1-17.4-14-31.5-31.4-31.5z" />
//                       </svg>
//                     </div>
//                     <a href="tel:+40712345678" className="text-sm ml-4">
//                       <p className="text-gray-300">+40 712 345 678</p>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-gray-300 text-base font-bold">Socials</h2>
//               <ul className="flex mt-4 space-x-2">
//                 <li className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                   <a
//                     href="https://facebook.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                       height="20px"
//                       fill="#FFDF00"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75z" />
//                     </svg>
//                   </a>
//                 </li>

//                 <li className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                   <a
//                     href="https://instagram.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                       height="20px"
//                       fill="#FFDF00"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
//                     </svg>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form className="ml-auto space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full text-gray-300 rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full text-gray-300 rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full text-gray-300 rounded-md py-2.5 px-4 border bg-gray-200 text-sm outline-yellow-500"
//             />
//             <textarea
//               placeholder="Message"
//               rows="6"
//               className="w-full text-gray-300 rounded-md px-4 border text-sm pt-2.5 bg-gray-200 outline-yellow-500"
//             ></textarea>
//             <button
//               type="button"
//               className="font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm px-4 py-3 w-full !mt-6"
//             >
//               Trimite
//             </button>
//           </form>
//         </div>
//       </div>

//       <MailchimpForm />

//       <div className="text-center bg-[#060606] p-2">
//         <hr className="styled-hr" />
//         <p className="text-gray-200 text-sm">
//           © 2024 Adela's yoga path. All rights reserved
//         </p>
//       </div>
//     </>
//   );
// }

// export default Footer;

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import MailchimpForm from "./MailchimpForm";

function Footer() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 300,
      once: false,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1nysye", // schimba cu ID-ul serviciului tau
        "template_f7xo6bg", // schimba cu ID-ul template-ului tau
        formRef.current,
        "y4MvrNYK13-GnlBkh" // schimba cu cheia publica emailjs
      )
      .then(
        (result) => {
          setStatusMessage("Mesajul a fost trimis cu succes!");
          formRef.current.reset();
        },
        (error) => {
          setStatusMessage("A intervenit o eroare. Te rog încearcă din nou.");
        }
      );
  };

  return (
    <>
      <div className="bg-[#060606] pt-24 md:pt-28" id="contact">
        <div className="px-6 md:px-0 grid sm:grid-cols-2 items-start gap-10 py-10 mx-auto max-w-5xl bg-[#060606] rounded-md font-[sans-serif]">
          <div>
            <h1 className="text-gray-200 text-5xl mrs-saint-delafield-regular">
              Let's Talk
            </h1>
            <p className="text-base text-gray-300 mt-4 montserrat">
              Daca ceea ce sunt și fac te cheamă să experimenăm împreună,
              scrie-mi un mesaj pentru orice ai nevoie: - citiri akashcice,
              spiritual coaching, călătorii șamanice de vindecare, sesiuni
              private de yoga/tantra/kundalini, workshopuri/cursuri, colaborări
              ca și guest la evenimentele tale.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h2 className="text-gray-300 text-base font-bold">Email</h2>
                <ul className="mt-2">
                  <li className="flex items-center">
                    <div className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      {/* Email Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#FFDF00"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                      </svg>
                    </div>
                    <a href="mailto:yoga.adele@gmail.com" className="text-md ">
                      <p className="text-gray-300">yoga.adele@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-gray-300 text-base font-bold">Telefon</h2>
                <ul className="mt-2">
                  <li className="flex items-center">
                    <div className="bg-[#060606] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#FFDF00"
                        viewBox="0 0 512 512"
                      >
                        <path d="M391.1 351.1c-24.6 0-48.3-3.8-70.8-11.2-11.3-3.7-23.8-1-32.5 6.8l-45.5 34.6c-50.3-26.7-91.2-67.6-117.9-117.9l34.6-45.5c7.9-8.7 10.6-21.2 6.9-32.5-7.4-22.5-11.2-46.2-11.2-70.8 0-17.4-14.1-31.5-31.5-31.5H47.6C30.2 83.1 16 97.2 16 114.6 16 313.7 198.3 496 397.4 496c17.4 0 31.5-14.1 31.5-31.5v-75.3c.1-17.4-14-31.5-31.4-31.5z" />
                      </svg>
                    </div>
                    <a
                      href="tel:+40712345678"
                      className="text-md font-semibold ml-4"
                    >
                      <p className="text-gray-300">+40 712 345 678</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="ml-auto space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full text-black rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full text-black rounded-md py-2.5 px-4 border text-sm bg-gray-200 outline-yellow-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full text-black rounded-md py-2.5 px-4 border bg-gray-200 text-sm outline-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              className="w-full text-black rounded-md px-4 border text-sm pt-2.5 bg-gray-200 outline-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
              Trimite
            </button>
            {statusMessage && (
              <p className="mt-2 text-center text-yellow-400">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <MailchimpForm />
      <div className="text-center bg-[#060606] p-2">
        <hr className="styled-hr" />
        <p className="text-gray-200 text-sm">
          © 2025 Adela's oracle path. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
