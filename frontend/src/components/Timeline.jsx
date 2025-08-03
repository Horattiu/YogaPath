import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"; // Fișier pentru stiluri personalizate

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#060606] montserrat">
      <div className="timeline max-w-screen-lg mx-auto">
        {/* Element stânga */}
        <div className="  container  " data-aos="fade-right">
          <div className="text-white p-3  md:p-6 bg-[#242424] rounded-lg shadow-lg">
            <h2 className="text-[#fcd34d]">CITIRI AKASHICE</h2>
            <p>
              Citirea Akashică este cel mai intens și valoros instrument pe care
              îl poți avea la îndemână pentru a afla răspunsurile pe care le-ai
              căutat dintotdeauna.
            </p>
          </div>
          <img
            src="./chakra.png"
            alt="icon"
            className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
          />
        </div>

        {/* Element dreapta */}
        <div className="container right w-full lg:w-1/2" data-aos="fade-left">
          <div className="flex">
            <img
              src="./chakra.png"
              alt="icon"
              className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
            />
            <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
              <h2 className="text-[#fcd34d]">SHAMANIC JOURNEYS</h2>
              <p>
                Constituie un instrument valoros de accesare a lumii tale
                interioare pentru a căuta de unde vin provocările vieții tale,
                de a aduce schimbări reale, de a aduce vindecare la toate
                nivelele.
              </p>
            </div>
          </div>
        </div>

        {/* Alt element stânga */}
        <div className="container left w-full lg:w-1/2" data-aos="fade-right">
          <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
            <h2 className="text-[#fcd34d]">SPIRITUAL COACHING</h2>
            <p>
              Este o formă de terapie săptămânală sau lunară în care ne întâlnim
              și timp de 75 min povestim despre tine, căutăm împreună soluții la
              provocările vieții tale și integrăm ce am lucrat până acum.
            </p>
          </div>
          <img
            src="./chakra.png"
            alt="icon"
            className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
          />
        </div>

        {/* Element dreapta */}
        <div className="container right w-full lg:w-1/2" data-aos="fade-left">
          <div className="flex">
            <img
              src="./chakra.png"
              alt="icon"
              className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
            />
            <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
              <h2 className="text-[#fcd34d]">1:1 THERAPY</h2>
              <p>
                Din dorința de a ajuta oamenii în procesul de vindecare și
                autocunoaștere, acum mulți ani m-am îndreptat spre partea
                terapeutică a Yoga, dobândind abilități de...
              </p>
            </div>
          </div>
        </div>

        {/* Alt element stânga */}
        <div className="container left w-full lg:w-1/2" data-aos="fade-right">
          <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
            <h2 className="text-[#fcd34d]">KUNDALINI</h2>
            <p>
              Energia Kundalini este cea mai puternică energie din corpul
              nostru, energia feminină cât și cea sexuală
            </p>
          </div>
          <img
            src="./chakra.png"
            alt="icon"
            className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
          />
        </div>

        {/* Element dreapta */}
        <div className="container right w-full lg:w-1/2" data-aos="fade-left">
          <div className="flex">
            <img
              src="./chakra.png"
              alt="icon"
              className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
            />
            <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
              <h2 className="text-[#fcd34d]">RETREATS</h2>
              <p>
                Retreat-urile noastre au început în 2020 în plină pandemie când
                am simțit nevoia să concretizăm în ceva palpabil ceea ce își
                doreau foarte mulți din jurul nostru – să se reconecteze cu
                ceilalți, cât și cu ei înșiși.
              </p>
            </div>
          </div>
        </div>
        {/* Alt element stânga */}
        <div className="container left w-full lg:w-1/2" data-aos="fade-right">
          <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
            <h2 className="text-[#fcd34d]">WORKSHOPS</h2>
            <p>
              Workshop-urile noastre sunt focusate pe învățare, experimentare și
              integrare.
            </p>
          </div>
          <img
            src="./chakra.png"
            alt="icon"
            className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
          />
        </div>

        {/* Element dreapta */}
        <div className="container right w-full lg:w-1/2" data-aos="fade-left">
          <div className="flex">
            <img
              src="./chakra.png"
              alt="icon"
              className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
            />
            <div className="text-white p-6 bg-[#242424] rounded-lg shadow-lg">
              <h2 className="text-[#fcd34d]">CURSURI</h2>
              <p>
                Cursurile noastre sunt potrivite pentru tine dacă ai nevoie de o
                practică sau învățare organizată care să facă parte dintr-un
                program pe care ți-l asumi pentru o anumită perioadă de timp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../App.css";

// const Timeline = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="bg-[#060606] montserrat py-10">
//       <div className="timeline max-w-screen-lg mx-auto relative">
//         {/* Pe mobil, container-ul devine full width cu padding */}
//         {/* Pe desktop, conțin în stânga/dreapta */}

//         {/* Element stânga */}
//         <div
//           className="container left w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-right"
//         >
//           <div className="content p-6 bg-black rounded-lg shadow-lg relative z-10">
//             <h2 className="text-[#fcd34d]">CITIRI AKASHICE</h2>
//             <p>
//               Citirea Akashică este cel mai intens și valoros instrument pe care
//               îl poți avea la îndemână pentru a afla răspunsurile pe care le-ai
//               căutat dintotdeauna.
//             </p>
//           </div>
//           <img
//             src="./chakra.png"
//             alt="icon"
//             className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
//           />
//         </div>

//         {/* Element dreapta */}
//         <div
//           className="container right w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-left"
//         >
//           <div className="flex items-start">
//             <img
//               src="./chakra.png"
//               alt="icon"
//               className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
//             />
//             <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//               <h2 className="text-[#fcd34d]">SHAMANIC JOURNEYS</h2>
//               <p>
//                 Constituie un instrument valoros de accesare a lumii tale
//                 interioare pentru a căuta de unde vin provocările vieții tale,
//                 de a aduce schimbări reale, de a aduce vindecare la toate
//                 nivelele.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Element stânga */}
//         <div
//           className="container left w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-right"
//         >
//           <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//             <h2 className="text-[#fcd34d]">SPIRITUAL COACHING</h2>
//             <p>
//               Este o formă de terapie săptămânală sau lunară în care ne întâlnim
//               și timp de 75 min povestim despre tine, căutăm împreună soluții la
//               provocările vieții tale și integrăm ce am lucrat până acum.
//             </p>
//           </div>
//           <img
//             src="./chakra.png"
//             alt="icon"
//             className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
//           />
//         </div>

//         {/* Element dreapta */}
//         <div
//           className="container right w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-left"
//         >
//           <div className="flex items-start">
//             <img
//               src="./chakra.png"
//               alt="icon"
//               className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
//             />
//             <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//               <h2 className="text-[#fcd34d]">1:1 THERAPY</h2>
//               <p>
//                 Din dorința de a ajuta oamenii în procesul de vindecare și
//                 autocunoaștere, acum mulți ani m-am îndreptat spre partea
//                 terapeutică a Yoga, dobândind abilități de...
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Element stânga */}
//         <div
//           className="container left w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-right"
//         >
//           <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//             <h2 className="text-[#fcd34d]">Kundalini</h2>
//             <p>
//               Energia Kundalini este cea mai puternică energie din corpul
//               nostru, energia feminină cât și cea sexuală
//             </p>
//           </div>
//           <img
//             src="./chakra.png"
//             alt="icon"
//             className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
//           />
//         </div>

//         {/* Element dreapta */}
//         <div
//           className="container right w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-left"
//         >
//           <div className="flex items-start">
//             <img
//               src="./chakra.png"
//               alt="icon"
//               className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
//             />
//             <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//               <h2 className="text-[#fcd34d]">Retreats</h2>
//               <p>
//                 Retreat-urile noastre au început în 2020 în plină pandemie când
//                 am simțit nevoia să concretizăm în ceva palpabil ceea ce își
//                 doreau foarte mulți din jurul nostru – să se reconecteze cu
//                 ceilalți, cât și cu ei înșiși.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Element stânga */}
//         <div
//           className="container left w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-right"
//         >
//           <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//             <h2 className="text-[#fcd34d]">WORKSHOPS</h2>
//             <p>
//               Workshop-urile noastre sunt focusate pe învățare, experimentare și
//               integrare.
//             </p>
//           </div>
//           <img
//             src="./chakra.png"
//             alt="icon"
//             className="hidden lg:block absolute lg:top-12 lg:right-2 w-8 h-8 filter invert"
//           />
//         </div>

//         {/* Element dreapta */}
//         <div
//           className="container right w-full lg:w-1/2 relative mb-10 lg:mb-0"
//           data-aos="fade-left"
//         >
//           <div className="flex items-start">
//             <img
//               src="./chakra.png"
//               alt="icon"
//               className="hidden lg:block absolute lg:top-12 lg:left-2 w-8 h-8 filter invert"
//             />
//             <div className="content p-6 bg-white rounded-lg shadow-lg relative z-10">
//               <h2 className="text-[#fcd34d]">CURSURI</h2>
//               <p>
//                 Cursurile noastre sunt potrivite pentru tine dacă ai nevoie de o
//                 practică sau învățare organizată care să facă parte dintr-un
//                 program pe care ți-l asumi pentru o anumită perioadă de timp.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
