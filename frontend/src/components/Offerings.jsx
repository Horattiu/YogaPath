import React from "react";
import Navbar from "./Navbar";

function Offerings() {
  return (
    <div className="max-w-5xl md:mx-auto mt-20 montserrat mb-12 mx-2">
      <div className="flex flex-wrap -m-1 md:-m-2">
        {/* Citiri Akashice */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/akashicReadings")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(Untitled.jpg)`,
                backgroundPosition: "center 70%", // ⬅️ Mută imaginea mai jos
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              CITIRI AKASHICE
            </h2>
          </div>
        </div>

        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/Calatorii-samanice")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(calatoriisam.JPG)` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              CALATORII SHAMANICE
            </h2>
          </div>
        </div>

        {/* <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3 mx-auto"
          onClick={() => (window.location.href = "/medicine-for-mind")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(medicine.png)`,
                backgroundPosition: "center 30%", // ⬅️ Mută imaginea mai jos
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              MEDICINE FOR SPIRIT & BODY
            </h2>
          </div>
        </div> */}

        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3 mx-auto"
          onClick={() => (window.location.href = "/medicine-for-mind")}
        >
          <div className="relative h-64 flex flex-col justify-end rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(medicine.png)`,
                backgroundPosition: "center 30%",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <h2 className="relative z-10 text-yellow-500 text-3xl text-center mb-4 hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              MEDICINE FOR SPIRIT & BODY
            </h2>
          </div>
        </div>

        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/spiritual-coaching")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(coaching.jpg)` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              SPIRITUAL COACHING
            </h2>
          </div>
        </div>

        {/* Terapie Yoga 1on1 */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/terapieYoga")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(pozaadela.png)` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              TERAPIE YOGA <br /> 1 ON 1
            </h2>
          </div>
        </div>
        {/* Kundalini & Tantra */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/kundaliniTantra")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url(kundalini.png)`,
                backgroundPosition: "center 20%", // ⬅️ Mută imaginea mai jos
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative mt-10 z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              KUNDALINI & TANTRA
            </h2>
          </div>
        </div>

        {/* Retreats */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/retreats")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hafidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(retreatss.png)`,
                backgroundPosition: "center 30%", // ⬅️ Mută imaginea mai jos
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              RETREATS
            </h2>
          </div>
        </div>

        {/* Workshops */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/workshops")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/workshopadela.png)` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              WORKSHOPS
            </h2>
          </div>
        </div>

        {/* Cursuri */}
        <div
          className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
          onClick={() => (window.location.href = "/cursuri")}
        >
          <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(cursuri.jpg)` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
              CURSURI
            </h2>
          </div>
        </div>

        {/* Clase */}
        <div className="w-full flex justify-center">
          <div
            className="p-1 md:p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3"
            onClick={() => (window.location.href = "/clase")}
          >
            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(clasegrup2.jpg)`,
                  backgroundPosition: "center 40%",
                }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <h2 className="relative z-10 text-yellow-500 text-3xl text-center hover:text-yellow-300 transform hover:scale-110 transition-transform duration-200">
                CLASE
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
