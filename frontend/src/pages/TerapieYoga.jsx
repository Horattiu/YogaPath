// import React from "react";

// const TerapieYoga = () => {
//   return (
//     <>
//       <section className="bg-black py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Titlu Principal */}
//           <h2 className="mrs-saint-delafield-regular text-gray-200 text-4xl md:text-6xl text-center mb-8">
//             Terapie Yoga 1 on 1
//           </h2>

//           {/* Introducere */}
//           <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-5xl">
//             Din dorința de a ajuta oamenii în procesul de vindecare și
//             autocunoaștere, acum mulți ani m-am îndreptat spre partea
//             terapeutică a Yoga, dobândind abilități de comunicare și de
//             ascultare, analiza cazului și evaluarea clientului, precum și
//             abordarea organismului ca sistem unitar. În prezent lucrez în
//             terapie yoga 1 on 1 cu persoanele care au nevoie de îndrumare în
//             procesul lor de vindecare atât pe partea fizică, cât și cea mentală
//             și emoțională.
//           </p>

//           {/* Descriere detaliată */}
//           <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-5xl">
//             Gândesc pentru fiecare persoană în parte un plan holistic prin care
//             să ajutăm corpul, mintea și sufletul să găsească calea spre
//             autovindecare, refacere și revenire. Vreau să creez spațiul de care
//             fiecare client în parte are nevoie pentru a evolua, pentru a se
//             regăsi pe sine și pentru a se îndrepta spre vindecare. Cu toții avem
//             atât de multe de împărtășit - de aceea îmi place să lucrez cu
//             oamenii, să învăț constant de la alții și să transmit mai departe
//             tot ce am învățat în această viață.
//           </p>

//           {/* Beneficii sesiuni */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Aspecte sesiuni */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Tehnici de pranayama
//                 </h3>
//                 <p className="text-gray-100">
//                   Respirația conștientă pentru a îmbunătăți conștientizarea,
//                   relaxarea și echilibrul energetic.
//                 </p>
//               </div>
//             </div>

//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Mobilitatea corpului și înlăturarea durerii
//                 </h3>
//                 <p className="text-gray-100">
//                   Exerciții și tehnici specifice pentru ameliorarea durerilor și
//                   îmbunătățirea flexibilității.
//                 </p>
//               </div>
//             </div>

//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Meditație și relaxare
//                 </h3>
//                 <p className="text-gray-100">
//                   Tehnici de relaxare profundă și yoga nidra (yoga somnului
//                   conștient) pentru reducerea stresului.
//                 </p>
//               </div>
//             </div>

//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Discuții terapeutice
//                 </h3>
//                 <p className="text-gray-100">
//                   Împărtășirea gândurilor și experiențelor într-un mediu sigur
//                   și suportiv.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Paragraf Final */}
//           <div className="mt-16 bg-indigo-50 p-8 rounded-lg shadow-inner">
//             <p className="text-gray-700 text-lg md:text-xl">
//               Sesiunea de terapie yoga 1 on 1 durează 90 de minute și este
//               recomandată de 1 sau 2 ori pe săptămână timp de câteva luni pentru
//               a vedea rezultate. Fiecare sesiune se face în baza unei programări
//               stabilite telefonic sau prin email. Prețul unei sesiuni este de
//               180 RON.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TerapieYoga;

import React from "react";

const TerapieYoga = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 flex justify-center montserrat">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-yellow-500 text-center mb-8 mrs-saint-delafield-regular">
          Terapiile Yoga private 1 on 1
        </h1>
        <img
          src="./pozaadela.png"
          alt="Terapie Yoga"
          className="w-full h-96 object-cover object-[center_bottom_25%] rounded-2xl shadow-lg mb-10"
        />

        <p className="text-lg mb-6">
          Din dorința de a ajuta oamenii în procesul de vindecare și
          autocunoaștere, acum mulți ani m-am îndreptat spre partea terapeutică
          a Yoga, dobândind abilități de comunicare și de ascultare, analiza
          cazului și evaluarea clientului, precum și abordarea organismului ca
          sistem unitar.
        </p>

        <p className="text-lg mb-6">
          În prezent lucrez în terapie yoga 1 on 1 cu persoanele care au nevoie
          de îndrumare în procesul lor de vindecare, atât pe partea fizică cât
          și cea mentală și emoțională.
        </p>

        <p className="text-lg mb-6">
          Gândesc pentru fiecare persoană în parte un plan holistic prin care să
          ajutăm corpul, mintea și sufletul să găsească calea spre
          autovindecare, refacere și revenire.
        </p>

        <p className="text-lg mb-6">
          Vreau să creez spațiul de care fiecare client în parte are nevoie
          pentru a evolua, pentru a se regăsi pe sine și pentru a se îndrepta
          spre vindecare.
        </p>

        <p className="text-lg mb-6">
          Cu toții avem atât de multe de împărtășit – de aceea îmi place să
          lucrez cu oamenii, să învăț constant de la alții și să transmit mai
          departe tot ce am învățat în această viață.
        </p>

        <p className="text-lg mb-6">
          Sesiunea de terapie yoga 1 on 1 durează 90 min și este recomandată de
          1 sau 2 ori pe săptămână timp de câteva luni pentru a vedea rezultate.
        </p>

        <h2 className="text-2xl  mt-10 mb-4 text-yellow-500">
          Într-o astfel de sesiune ne focusăm pe:
        </h2>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
          <li>tehnici de pranayama (respirația conștientă)</li>
          <li>mobilitatea corpului</li>
          <li>înlăturarea durerii</li>
          <li>meditație și relaxare</li>
          <li>discuții terapeutice</li>
          <li>yoga nidra - yoga somnului conștient</li>
        </ul>

        <p className="text-lg mb-6">
          Schimbul energetic pentru o sesiune este de{" "}
          <strong>220 RON – 90 min</strong>.
        </p>

        <p className="text-lg">
          Fiecare sesiune se face în baza unei programări în prealabil,
          stabilită telefonic sau prin email.
        </p>
      </div>
    </div>
  );
};

export default TerapieYoga;
