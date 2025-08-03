// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     title: " Retreats & Women's Circles",
//     text: `A fost un eveniment in care m-am reasezat in energia mea feminina, mi-am amintit de darurile pe care noi, femeile le-am primit in aceasta viata si in care am constientizat inca o data ca nu trebuie sa fac nimic mai mult, ci doar sa fiu`,
//   },
//   {
//     title: "Akashic Reading Testimonial",
//     text: `Nu ştiam ce sunt aceste citiri Akashice, până am ajuns să mă iniţieze Adela în aceste taine, așa cum a făcut-o mereu, cu tot ce am învățat de la ea de când am cunoscut-o.
// Prima dată m-a împins curiozitatea așa cum am făcut-o cu toate celelalte. Apoi devenise ceva uimitor, cum sunt majoritatea lucrurilor pe care mi le spune, pur și simplu se legau cu momente, vise, trăiri din viața mea. Din curios am devenit uimit plăcut de aceste citiri care au dezvelit în mine rădăcini de mult uitate sau neştiute, care la rândul lor făceau parte dintr-un întreg, făceau parte din mine.
// Mulțumesc, Adela, pentru tot ce ai împărtășit cu mine. Cu siguranță mă ajută și mă vor ajuta și aici, unde sunt acum, dar şi dincolo de aceste tărâmuri.`,
//   },
//   {
//     title: "Akashic Reading Testimonial ",
//     text: `Tot ce îți spune Akasha se află deja în tine. De aici pornește totul.
// Nu îți schimbă viața miraculos fără ca tu să nu miști un deget :) Însă te ajută ca tu să știi ce deget trebuie să miști, și e o diferență mare.
// Dar totul depinde de persoana care îți face citirea.
// Nu cred că fucționează dacă "cititorul" nu este un canal de informare. Pentru că această informația vine din forțe divine.
// Oricum ai toată încrederea mea, și am zis și atunci, trebuie să fii foarte tare de îngeri să poți duce cu brio tot ce vine din Akasha. :)`,
//   },
//   {
//     title: "Akashic Reading testimonial",
//     text: `Nu am ştiut nimic dinainte despre Citirea Akashică. Am mers pe instinct, pe propriul simț, că e ceea ce trebuie și bine am făcut!
// Am dorit să primesc ceea ce vine și am primit. Pot să spun că am înțeles atât de multe lucruri despre mine în 2h, cât nu am înțeles în alte programe de durată lungă. Mesajele au avut sens, mare sens! Au spus multe despre mine și în același timp m-au ghidat pe mai departe. Cumva m-am simțit mai aşezată după citire, mai liniștită cu mine și mai încrezătoare. Am primit o direcție și da... sunt încrezătoare!
// Adela este un "înger". Am simțit conexiunea încă dinainte să ne vedem. Aș sta să o ascult ore în şir. Mulțumesc, Adela! Sunt foarte recunoscătoare și cu siguranță vom mai lucra împreună!`,
//   },
//   {
//     title: "Retreats & Women's Circles",
//     text: `Mi-a plăcut la retreat că intram în lucruri intense şi adânci, activităţi care ne deschid față de noi să lăsăm traumele să fie văzute, acceptate și puţin câte puţin vindecate.`,
//   },
//   {
//     title: "Akashic Reading Testimonial",
//     text: `Citirea în Akasha făcută de Adela a fost revelatoare, mi-am găsit explicații la anumite situaţii/ comportamente, am înțeles de ce au ajuns unele persoane în viaţa mea, am putut să dau drumul cu mai mare ușurință unor sentimente, am putut să îmbrățișez părți din mine pentru că le-am văzut acum.
// Adela este un ghid spiritual bun care reușește să transmită mesajul potrivit care să rezoneze cu interlocutorul, face să se miște rotițe.
// MIRELA`,
//   },
//   {
//     title: "Retreats & Women's Circles",
//     text: `Workshop-ul Adelei m-a ajutat să-mi reamintesc că sunt necesare anumite practici în fiecare zi pentru a obține rezultate, de exemplu Journaling. Mi s-au părut utile informațiile științifice și mi-au plăcut tehnicile pentru activarea energiei kundalini.`,
//   },
// ];

// const MobileCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const goToPrev = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToNext = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNext, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-64 relative overflow-hidden montserrat">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-6 text-center transition-opacity duration-700 ease-in-out ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(255,255,255,0.02), rgba(0,0,0,0.7))",
//           }}
//         >
//           <div className="relative text-white text-sm leading-relaxed max-w-md px-8 pb-3">
//             <h3 className="text-base font-semibold mb-3">{slide.title}</h3>
//             <img
//               src="/quote.png"
//               alt="quote"
//               className="w-5 h-5 filter invert absolute top-0 left-0"
//               style={{ transform: "translate(-25%, 25%)" }}
//             />
//             <p className="whitespace-pre-line">{slide.text}</p>
//             <img
//               src="/quote.png"
//               alt="quote"
//               className="w-5 h-5 absolute bottom-0 right-0 filter invert rotate-180"
//               style={{ transform: "translate(25%, 25%)" }}
//             />
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={goToPrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-20"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-20"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={24} />
//       </button>

//       <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full border-2 border-yellow-500 transition-all duration-300 ${
//               index === current ? "bg-yellow-500" : "bg-transparent"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileCarousel;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Retreats & Women's Circles",
    text: `A fost un eveniment in care m-am reasezat in energia mea feminina, mi-am amintit de darurile pe care noi, femeile le-am primit in aceasta viata si in care am constientizat inca o data ca nu trebuie sa fac nimic mai mult, ci doar sa fiu`,
  },
  {
    title: "Akashic Reading Testimonial",
    text: `Nu ştiam ce sunt aceste citiri Akashice, până am ajuns să mă iniţieze Adela în aceste taine, așa cum a făcut-o mereu, cu tot ce am învățat de la ea de când am cunoscut-o.
Prima dată m-a împins curiozitatea așa cum am făcut-o cu toate celelalte. Apoi devenise ceva uimitor, cum sunt majoritatea lucrurilor pe care mi le spune, pur și simplu se legau cu momente, vise, trăiri din viața mea. Din curios am devenit uimit plăcut de aceste citiri care au dezvelit în mine rădăcini de mult uitate sau neştiute, care la rândul lor făceau parte dintr-un întreg, făceau parte din mine.
Mulțumesc, Adela, pentru tot ce ai împărtășit cu mine. Cu siguranță mă ajută și mă vor ajuta și aici, unde sunt acum, dar şi dincolo de aceste tărâmuri.`,
  },
  {
    title: "Akashic Reading Testimonial ",
    text: `Tot ce îți spune Akasha se află deja în tine. De aici pornește totul.
Nu îți schimbă viața miraculos fără ca tu să nu miști un deget :) Însă te ajută ca tu să știi ce deget trebuie să miști, și e o diferență mare.
Dar totul depinde de persoana care îți face citirea.
Nu cred că fucționează dacă "cititorul" nu este un canal de informare. Pentru că această informația vine din forțe divine.
Oricum ai toată încrederea mea, și am zis și atunci, trebuie să fii foarte tare de îngeri să poți duce cu brio tot ce vine din Akasha. :)`,
  },
  {
    title: "Akashic Reading testimonial",
    text: `Nu am ştiut nimic dinainte despre Citirea Akashică. Am mers pe instinct, pe propriul simț, că e ceea ce trebuie și bine am făcut!
Am dorit să primesc ceea ce vine și am primit. Pot să spun că am înțeles atât de multe lucruri despre mine în 2h, cât nu am înțeles în alte programe de durată lungă. Mesajele au avut sens, mare sens! Au spus multe despre mine și în același timp m-au ghidat pe mai departe. Cumva m-am simțit mai aşezată după citire, mai liniștită cu mine și mai încrezătoare. Am primit o direcție și da... sunt încrezătoare!
Adela este un "înger". Am simțit conexiunea încă dinainte să ne vedem. Aș sta să o ascult ore în şir. Mulțumesc, Adela! Sunt foarte recunoscătoare și cu siguranță vom mai lucra împreună!`,
  },
  {
    title: "Retreats & Women's Circles",
    text: `Mi-a plăcut la retreat că intram în lucruri intense şi adânci, activităţi care ne deschid față de noi să lăsăm traumele să fie văzute, acceptate și puţin câte puţin vindecate.`,
  },
  {
    title: "Akashic Reading Testimonial",
    text: `Citirea în Akasha făcută de Adela a fost revelatoare, mi-am găsit explicații la anumite situaţii/ comportamente, am înțeles de ce au ajuns unele persoane în viaţa mea, am putut să dau drumul cu mai mare ușurință unor sentimente, am putut să îmbrățișez părți din mine pentru că le-am văzut acum.
Adela este un ghid spiritual bun care reușește să transmită mesajul potrivit care să rezoneze cu interlocutorul, face să se miște rotițe.
MIRELA`,
  },
  {
    title: "Retreats & Women's Circles",
    text: `Workshop-ul Adelei m-a ajutat să-mi reamintesc că sunt necesare anumite practici în fiecare zi pentru a obține rezultate, de exemplu Journaling. Mi s-au părut utile informațiile științifice și mi-au plăcut tehnicile pentru activarea energiei kundalini.`,
  },
];

const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center montserrat px-4 py-6 bg-[#060606]">
      <div className="w-full max-w-md text-center text-white text-sm leading-relaxed relative pt-8 pb-8 px-6">
        <h3 className="text-base font-semibold mb-4">
          {slides[current].title}
        </h3>

        {/* Ghilimele sus */}
        <img
          src="/quote.png"
          alt="quote"
          className="w-5 h-5 filter invert absolute top-6 left-6"
        />

        <p className="whitespace-pre-line">{slides[current].text}</p>

        {/* Ghilimele jos */}
        <img
          src="/quote.png"
          alt="quote"
          className="w-5 h-5 filter invert rotate-180 absolute bottom-6 right-6"
        />
      </div>

      {/* Puncte galbene */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-yellow-500 transition-all duration-300 ${
              index === current ? "bg-yellow-500" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Butoane stânga / dreapta */}
      <div className="flex justify-between w-full max-w-md mt-6">
        <button
          onClick={goToPrev}
          className="text-white/70 hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="text-white/70 hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MobileCarousel;
