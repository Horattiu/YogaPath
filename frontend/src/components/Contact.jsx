import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import MailchimpForm from "./MailchimpForm";

function Contact() {
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
          © 2024 Adela's yoga path. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Contact;
