// import React from "react";

// const AboutMe = () => {
//   return (
//     <div className="bg-[#070707] text-white min-h-screen flex items-center justify-center px-4 pt-20 lg:pt-32 montserrat">
//       <div
//         className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 items-start justify-center"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         {/* Coloană stângă: text */}
//         <div className="w-full lg:w-1/2 order-2 lg:order-1">
//           <div className="space-y-6 text-lg text-left">
//             <p>
//               Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
//               Practician Shaman, Ghid Spiritual și Terapeut Yoga.
//             </p>

//             <p>
//               M-am întâlnit prima dată cu yoga la 6 ani când m-am și îndrăgostit
//               ireversibil de această practică.
//             </p>

//             <p>
//               La 11 ani citeam <i>India Secretă</i> și <i>Egiptul Secret</i>,
//               cărți despre popoarele dispărute ale Atlantidei sau culturile
//               mayașe.
//             </p>

//             <p>
//               M-a atras întotdeauna Necunoscutul. Am vrut să înțeleg ceea ce nu
//               puteam vedea cu ochii, însă simțeam mereu că e ceva mai mult.
//             </p>

//             <p>
//               Ca și copil experimentam deseori vise premonitorii, primeam mesaje
//               (pe atunci nu știam că eram conectată în Spațiul Akashic) și îmi
//               petreceam după-amiezile alături de bunica mea care îmi ghicea în
//               cărți sau cu bunicul care știa să citească în cafea.
//             </p>

//             <div className="border-t border-yellow-500 my-10 w-full mx-auto lg:mx-0"></div>

//             <h2 className="text-2xl font-semibold text-yellow-500 text-center mb-4">
//               Călătoria Mea
//             </h2>

//             <p>
//               Din 2016 am studiat filosofia și practicile de yoga în India și
//               Europa:
//             </p>

//             <ul className="list-disc pl-5 space-y-1 text-left">
//               <li>TTC 200 h Hatha Yoga – Rishikesh, India</li>
//               <li>TTC 300 h Kundalini Yoga – Rishikesh, India</li>
//               <li>TTC 150 h Tantra – Goa, India</li>
//               <li>TTC 100 h Yoga Therapy – Malaga, Spania</li>
//               <li>TTC 100 h Yoga Kids – Timișoara</li>
//             </ul>

//             <p>
//               M-am format și am fost inițiată ca Oracol al Registrelor Akashice
//               alături de Ligia Loali și ca Practician Shaman în Shamanic Healing
//               & Soul Retrieval alături de Howard G Charing.
//             </p>

//             <p>
//               Practic Kundalini și Tantra și trăiesc după principiile care mă
//               aduc întotdeauna pe calea mea, cea de a ghida femeile în propria
//               regăsire și vindecare.
//             </p>

//             <p>
//               Cred că această putere de vindecare vine prin reîntoarcerea și
//               reactivarea energiei sexuale, energia Divină Shakti, și mă las la
//               rândul meu condusă în călătoria din această viață de Ghizii
//               Spațiului Sacru al Akashei.
//             </p>

//             <p className="italic font-medium text-center text-white mt-10">
//               Pentru asta și pentru tot, mă înclin cu recunoștință infinită.
//             </p>
//           </div>
//         </div>

//         {/* Coloană dreaptă: imagine, aliniată cu primul paragraf */}
//         <div className="w-full lg:w-1/2 order-1 lg:order-2 relative mt-0 ">
//           <div className="relative w-full h-full">
//             <img
//               src="/whoami.png"
//               alt="Adela"
//               className="w-full max-h-[800px] object-cover rounded-xl shadow-lg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

const AboutMe = () => {
  return (
    <div className="bg-[#060606] text-white min-h-screen mb-4 flex items-center justify-center px-4 pt-20 md:pt-20 montserrat">
      <div
        className="max-w-5xl w-full text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="mb-4 text-5xl text-yellow-500  mrs-saint-delafield-regular">
          About Me
        </h1>
        <div className="relative float-right w-full sm:w-1/2 lg:w-[350px] ml-6 mb-6">
          <img
            src="/whoami.png"
            alt="Adela"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute inset-0  rounded-xl" />
        </div>

        <p>
          Sunt Adela, Oracol al Registrelor Akashice, Intuitive Healer,
          Practician Shaman, Ghid Spiritual și Terapeut Yoga.
        </p>

        <p>
          M-am întâlnit prima dată cu yoga la 6 ani când m-am și îndrăgostit
          ireversibil de această practică.
        </p>

        <p>
          La 11 ani citeam <i>India Secretă</i> și <i>Egiptul Secret</i>, cărți
          despre popoarele dispărute ale Atlantidei sau culturile mayașe.
        </p>

        <p>
          M-a atras întotdeauna Necunoscutul. Am vrut să înțeleg ceea ce nu
          puteam vedea cu ochii, însă simțeam mereu că e ceva mai mult.
        </p>

        <p>
          Ca și copil experimentam deseori vise premonitorii, primeam mesaje (pe
          atunci nu știam că eram conectată în Spațiul Akashic) și îmi petreceam
          după-amiezile alături de bunica mea care îmi ghicea în cărți sau cu
          bunicul care știa să citească în cafea.
        </p>

        <div className="clear-both border-t border-yellow-500 my-10 w-full"></div>

        <h2 className="text-3xl  text-yellow-500  mb-4">Călătoria Mea</h2>

        <p className="mb-4">
          Din 2016 am studiat filosofia și practicile de yoga în India și
          Europa:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>TTC 200 h Hatha Yoga – Rishikesh, India</li>
          <li>TTC 300 h Kundalini Yoga – Rishikesh, India</li>
          <li>TTC 150 h Tantra – Goa, India</li>
          <li>TTC 100 h Yoga Therapy – Malaga, Spania</li>
          <li>TTC 100 h Yoga Kids – Timișoara</li>
        </ul>

        <p className="mt-4">
          M-am format și am fost inițiată ca Oracol al Registrelor Akashice
          alături de Ligia Loali și ca Practician Shaman în Shamanic Healing &
          Soul Retrieval alături de Howard G Charing.
        </p>

        <p>
          Practic Kundalini și Tantra și trăiesc după principiile care mă aduc
          întotdeauna pe calea mea, cea de a ghida femeile în propria regăsire
          și vindecare.
        </p>

        <p>
          Cred că această putere de vindecare vine prin reîntoarcerea și
          reactivarea energiei sexuale, energia Divină Shakti, și mă las la
          rândul meu condusă în călătoria din această viață de Ghizii Spațiului
          Sacru al Akashei.
        </p>

        <p className="italic font-medium text-center text-white mt-10">
          Pentru asta și pentru tot, mă înclin cu recunoștință infinită.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
