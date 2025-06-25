import React from "react";
import Navbar from "./Navbar";

function Offerings() {
  const offerings = [
    { name: "Workshops", route: "/workshops" },
    { name: "Terapie Yoga 1on1", route: "/terapieYoga" },
    { name: "Retreats", route: "/retreats" },
    { name: "Kundalini & Tantra", route: "/kundaliniTantra" },
    { name: "Cursuri", route: "/cursuri" },
    { name: "Citiri Akashice ", route: "/akashicReadings" },
    { name: "Calatorii Shamanice ", route: "/Calatorii-samanice" },

    { name: "Clase", route: "/clase" },
    { name: "Spiritual Coaching", route: "/spiritual-coaching" },
    { name: "Medicine for spirit & body", route: "/medicine-for-mind" },
  ];

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop";

  return (
    <>
      <div className="max-w-5xl md:mx-auto mt-20 montserrat mb-12 mx-2">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {offerings.map((offering, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2 cursor-pointer"
              key={index}
              onClick={() => (window.location.href = offering.route)}
            >
              <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out">
                {/* Blurred background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-70"
                  style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                  }}
                ></div>

                {/* Text content */}
                <h2 className="relative z-10 text-white text-2xl hover:text-yellow-600 cursor-pointer text-center transform transition-transform duration-200 ease-in-out hover:scale-110">
                  {offering.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Offerings;
