// import React from "react";

// const Workshops = () => {
//   return (
//     <>
//       {/* <section className="bg-gradient-to-r from-black to-gray-900 py-16 px-4"> */}
//       <section className="bg-black py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Titlu Principal */}
//           <h2 className="mrs-saint-delafield-regular text-gray-200 text-4xl md:text-6xl text-center mb-8">
//             Workshops
//           </h2>

//           {/* Introducere */}
//           <p className=" text-gray-300 text-lg md:text-xl mb-12 max-w-5xl ">
//             Workshopurile noastre sunt focusate pe învățare, experimentare și
//             integrare. Diversitate in workshop-uri. Fie că este vorba despre
//             workshopuri de tantra, kundalini sau șamanism, terapie yoga,
//             sexualitate sacră sau Citirile Akashice, fiecare în parte vine cu:
//           </p>

//           {/* Secțiune Workshopuri */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Workshop 1 */}

//             {/* Workshop 2 */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Aspect Teoretic
//                 </h3>
//                 <p className="text-gray-100">
//                   Are la bază întreaga noastră cunoaștere acumulată prin zecile
//                   de cursuri și ateliere la care am participat.
//                 </p>
//               </div>
//             </div>

//             {/* Workshop 3 */}
//             <div className="relative rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60 rounded-lg"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 }}
//               ></div>
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
//                   Parte Practică
//                 </h3>
//                 <p className="text-gray-100">
//                   Pentru a simți și înțelege mai bine prin experiența proprie.
//                   Gândită special pentru a aduce valoare și a lăsa experiența
//                   trăită să se așeze natural în tine.
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
//                   Integrare si sharing
//                 </h3>
//                 <p className="text-gray-100">
//                   o parte de integrare si sharing gandita special pentru a aduce
//                   valoare si a lasa experienta traita sa se aseze natural in
//                   tine
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Paragraf Final */}
//           <div className="mt-16   rounded-lg shadow-inner">
//             <p className="text-gray-300 text-lg md:text-xl ">
//               Consider ca experienta de a fi cu altii, asemenea tie, intr-un
//               proces de invatare si experiemntare e o binecuvântare in sine. De
//               aceea te invit sa iei parte alaturi de noi la aceste workshopuri
//               care nu numai iti vor largi orizonturile cunoasterii ci iti vor da
//               si cai cai noi de vindeacare, vor aduce spre tine oameni pe care
//               poate nu-i intalnesti cu alte ocazii si vor face ca expereinta ta
//               in cercurile in care ne intalnim, sa fie una de neuitat.
//             </p>
//           </div>
//           <div className="mt-8 ">
//             <img
//               src="./pozaadela.png"
//               className="w-full rounded-lg h-auto"
//               alt=""
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Workshops;

// import React from 'react';

const Workshop = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 flex justify-center montserrat">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center mrs-saint-delafield-regular mb-8 text-yellow-500">
          Workshops
        </h1>

        <img
          src="./workshopadela.png"
          alt="Workshop"
          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10"
        />

        <p className="text-lg mb-6">
          Workshop-urile noastre sunt focusate pe învățare, experimentare și
          integrare.
        </p>
        <p className="text-lg mb-6">
          Fie că este vorba despre workshop-uri de tantra, kundalini sau
          shamanism, terapie yoga, Sexualitate Sacră sau Citirile Akashice,
          fiecare în parte vine cu un aspect teoretic, o parte practică, o parte
          de integrare și sharing.
        </p>

        <h2 className="text-2xl  mt-10 mb-4 text-yellow-500">
          Ce oferim prin fiecare workshop organizat:
        </h2>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
          <li>
            un aspect teoretic care are la bază întreaga noastră cunoaștere
            acumulată prin zecile de cursuri și ateliere la care am participat
          </li>
          <li>
            o parte practică pentru a simți și înțelege mai bine prin experiența
            proprie
          </li>
          <li>
            o parte de integrare și sharing gândită special pentru a aduce
            valoare și a lăsa experiența trăită să se așeze natural în tine
          </li>
        </ul>

        <p className="text-lg mb-6">
          Consider că experiența de a fi cu alții, asemenea ție, într-un proces
          de învățare și experimentare e o binecuvântare în sine.
        </p>
        <p className="text-lg">
          De aceea te invit să iei parte alături de noi la aceste workshop-uri
          care nu numai îți vor lărgi orizonturile cunoașterii, ci îți vor oferi
          și căi noi de vindecare, vor aduce spre tine oameni pe care poate nu-i
          întâlnești cu alte ocazii și vor face ca experiența ta în cercurile în
          care ne întâlnim, să fie una de neuitat.
        </p>
      </div>
    </div>
  );
};

export default Workshop;
