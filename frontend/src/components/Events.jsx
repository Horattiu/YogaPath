import React from "react";

const Events = () => {
  return (
    <div className="bg-[#060606] text-white min-h-screen p-8 space-y-16">
      <section className="text-center space-y-4">
        <p className="text-lg max-w-3xl mx-auto">
          Evenimentele noastre sunt retreat-uri atât în țară cât și în afara ei,
          cursuri, workshop-uri sau întâlniri sub formă de ceremonii.
        </p>
        <p className="text-lg max-w-3xl mx-auto">
          Pentru a găsi ce te cheamă spre ceea ce facem noi, caută mai jos și
          alege exact lucrul pe care îl simți intuitiv că sufletul vibrează cu
          el.
        </p>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold ">
          BOOK YOUR SPOT AT ONE OF OUR FUTURE RETREATS
        </h2>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">
            THE EARTH DAUGHTERS – Retreat de Sânziene
          </h3>
          <p>19 – 22 iunie @ Mandala Retreat (Răchițele Cluj)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Pozele din folder RETREAT 1 */}
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`/retreat1-${i + 1}.jpg`}
              alt={`Retreat 1 - ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          ))}
        </div>

        <p className="max-w-4xl mx-auto text-lg text-left">
          Sărbătorirea începutului verii, a solstițiului și sărbătoarea de
          Sânziene ne aduc împreună într-un cerc magic pentru a co-crea alături
          de 11 femei un retreat unic de reconectare în tainele femininului
          dintr-o perspectivă mai puțin explorată, cea a Femeii Shaman, a Femeii
          Vindecătoare a Pămânului, a ielei jucăușe și Femeia Magică în toată
          splendoarea ei.
          <br /> Vom explora lumi nevăzute, daruri Divine pe care poate încă nu
          le-am accesat și vom aduce la suprafață o veche înțelepciune pe care o
          avem fiecare dintre noi, adânc înrădăcinată în spațiile sacre ale
          Inimii. Ne vom conecta la Femeia Shaman care nu doar că înțelege
          ciclurile Mamei Pământ, însă ea sădește în continuare semințele
          cunoașterii și înțelepciunii de a aduce lumină atât în sufletul ei,
          cât și în al celor ce o înconjoară.
        </p>

        <a
          href="https://www.facebook.com/events/1286330392650104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200"
        >
          MAI MULTE DETALII
        </a>
      </section>

      <section className="text-center space-y-6">
        <h3 className="text-2xl font-semibold text-yellow-500">
          METAMORPHIC IMMERSION INTO SELF – 50 hours of TTC Kundalini
          accreditation
        </h3>
        <p>4 – 14 octombrie 2025 @ Rishikesh, India</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`/retreat2-${i + 1}.jpg`}
              alt={`Retreat 2 - ${i + 1}`}
              className="w-full h-80 object-cover rounded-xl"
              onError={(e) => {
                e.target.onerror = null; // prevenim loop infinit
                e.target.src = `/retreat2-${i + 1}.jpeg`;
              }}
            />
          ))}
        </div>

        <p className="max-w-4xl mx-auto text-lg text-left">
          India e o poveste unică scrisă de fiecare dintre noi, cei care îi
          călcăm Pământurile Sfinte. Experiența Indiei e de fiecare dată alta,
          chiar dacă ai mai fost sau nu, iar ea se scrie doar de tine și se
          păstrează adânc în Suflet. India e o poveste trăită, nu povestită, așa
          că anul acesta ne scriem povestea împreună, la poalele munților
          Himalaya, pe malurile Sfântului Gange. Vom fi găzduiți în așhramul
          care nouă ne-a rămas drag și în care ne simțim acasă, vom practica
          Kundalini, Hatha yoga, pranayama și meditație cu profesori indieni
          care predau acolo. Vom celebra viața însăși în ritualuri magice pe
          malul Gangelui, vom vizita locuri sfinte prin care pașii Marilor
          Maeștii au călcat, iar la poalele Munților Himalaya ne vom reîntâlni
          cu cel mai adânc Sine al nostru, într-o călatorie unică și autentică.
        </p>

        <a
          href="https://www.facebook.com/events/584702304617785"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200"
        >
          MAI MULTE DETALII
        </a>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          BOOK YOUR SPOT AT ONE OF OUR FUTURE EVENTS
        </h2>
        <p className="text-lg">
          Momentan nu avem viitoare evenimente organizate, însă poți urmări
          pagina mea de Facebook sau Instagram pentru a afla primul tot ce se
          întâmplă:
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/adelesyogapath"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/adelesyogapath"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
