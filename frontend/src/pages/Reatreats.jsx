// import React from "react";

// const Retreats = () => {
//   return (
//     <>
//       <section className="bg-black py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Titlu Principal */}
//           <h2 className="mrs-saint-delafield-regular text-gray-200 text-4xl md:text-6xl text-center mb-8">
//             Retreats
//           </h2>

//           {/* Introducere */}
//           <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-5xl">
//             Retreaturile noastre au început în 2020 în plină pandemie când am
//             simțit nevoia să concretizam în ceva palpabil ceea ce își doreau
//             foarte mulți din jurul nostru - să se reconecteze cu ceilalti, cât
//             și cu ei înșiși. De aici a aparut primul retreat si au urmat multe
//             altele. Avem în spate experienta a peste 25 de retreaturi atât în
//             tara cât și în afara țării.
//           </p>

//           {/* Secțiune Retreaturi */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Retreat 1 */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Procesul de Autodescoperire
//                 </h3>
//                 <p className="text-gray-100">
//                   Ne deschidem, ne acceptăm unii pe alții, și învățăm să fim
//                   vulnerabili. Plângem și râdem împreună, gătim și povestim ca
//                   într-o familie.
//                 </p>
//               </div>
//             </div>

//             {/* Retreat 2 */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Practici și Meditație
//                 </h3>
//                 <p className="text-gray-100">
//                   Practicăm yoga, kundalini și tantra. Ne ghidăm prin exerciții
//                   ce ne ajută să integrăm în mod profund ceea ce sufletul și
//                   corpul au nevoie.
//                 </p>
//               </div>
//             </div>

//             {/* Retreat 3 */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Natura și Autenticitate
//                 </h3>
//                 <p className="text-gray-100">
//                   Locurile pe care le alegem sunt încărcate de energie pozitivă,
//                   oferind un cadru de siguranță și confort necesar pentru
//                   procesele intense de transformare.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Paragraf Final */}
//           <div className="mt-16 rounded-lg shadow-inner">
//             <p className="text-gray-300 text-lg md:text-xl">
//               Ne dorim ca fiecare retreat să fie o călătorie unică, o experiență
//               de descoperire personală și de conectare autentică, unde
//               participanții noștri se pot simți în siguranță, hrăniți și
//               sprijiniți.
//             </p>
//           </div>

//           <div className="mt-8">
//             <img
//               src="./pozaadela.png"
//               className="w-full rounded-lg h-auto"
//               alt="Adela"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Retreats;

import React from "react";
import { Link } from "react-router-dom";

const Retreats = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center mb-10 text-yellow-500 mrs-saint-delafield-regular">
          Retreat-uri
        </h1>

        <p className="text-lg mb-6">
          Retreat-urile noastre au început în 2020, în plină pandemie, când am
          simțit nevoia să concretizăm în ceva palpabil ceea ce își doreau
          foarte mulți din jurul nostru: să se reconecteze cu ceilalți, dar și
          cu ei înșiși.
        </p>

        <p className="text-lg mb-6">
          De aici a apărut primul retreat și au urmat multe altele. În prezent,
          în 2025, avem în spate experiența a peste 25 de retreat-uri,
          organizate atât în țară, cât și în afara țării.
        </p>

        <p className="text-lg mb-6">
          Am început cu retreat-uri de yoga și am continuat cu cele de
          feminitate, kundalini, tantra, shamanism, dezvoltare personală și
          multe altele. Fiecare retreat este diferit, dar păstrăm mereu
          organizarea impecabilă și mâncarea vegană delicioasă gătită de draga
          mea Oana.
        </p>

        <p className="text-lg mb-6">
          Chiar dacă ai mai participat la un retreat de-al nostru, fiecare
          experiență este unică. O spun cei care vin cu noi poate a cincea sau a
          șasea oară.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-yellow-500">
          Ce se întâmplă într-un retreat?
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-8">
          <li>ne așezăm în cerc și ne deschidem, ne acceptăm unii pe alții</li>
          <li>învățăm să fim vulnerabili</li>
          <li>plângem mult, dar râdem și mai mult</li>
          <li>gătim împreună câteodată</li>
          <li>ne trezim la 7 dimineața și împărtășim povești de viață</li>
          <li>ieșim din zona de confort</li>
          <li>practicăm yoga și kundalini</li>
          <li>integrare prin practici de tantra</li>
          <li>meditație, relaxare, yoga nidra</li>
          <li>piscină, saună, jacuzzi, soare și natură</li>
          <li>grijă pentru corp, minte și suflet</li>
          <li>îmbrățișări, susținere și eliberare emoțională</li>
          <li>reîntoarcere „Acasă” în Sine</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Locații și atmosferă
        </h2>
        <p className="text-lg mb-6">
          Locațiile pe care le alegem sunt atent selectate, cu o energie
          specială. Mergem acolo personal pentru a simți locul înainte de a lua
          decizia. Alegem spații care oferă atât siguranță emoțională, cât și
          confort fizic — esențial pentru o transformare profundă.
        </p>

        <p className="text-lg mb-6">
          Atunci când lucrăm cu sufletul, cu traumele și credințele limitative,
          avem nevoie de un spațiu cald, sigur și hrănitor. Iar asta oferim cu
          toată inima participanților noștri.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Evenimente și prețuri</h2>
        <p className="text-lg mb-6">
          Retreat-urile actuale le poți găsi în secțiunea{" "}
          <Link
            to="/events"
            className="underline text-teal-400 hover:text-teal-200"
          >
            EVENTS
          </Link>
          .
        </p>

        <p className="text-lg">
          Prețul diferă în funcție de temă, perioadă și locație. Locul se
          rezervă prin plata unui avans.
        </p>
      </div>
    </div>
  );
};

export default Retreats;
