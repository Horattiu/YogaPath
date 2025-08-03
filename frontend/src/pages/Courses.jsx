import React from "react";

const Cursuri = () => {
  return (
    <div className="bg-black text-white py-12 px-4 flex justify-center montserrat text-lg">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6 text-yellow-500 mrs-saint-delafield-regular">
            Cursuri
          </h1>
          <p className="mb-4">
            Cursurile pe care le propunem pot fi unele în format online, iar
            altele live.
          </p>
          <p className="mb-4">
            Cursurile noastre sunt potrivite pentru tine dacă ai nevoie de o
            practică sau învățare organizată care să facă parte dintr-un program
            pe care ți-l asumi pentru o anumită perioadă de timp.
          </p>
          <p className="mb-4">
            Cursurile au la bază teoria pe care am învățat-o și acumulat-o de-a
            lungul ultimilor 15 ani prin diferitele formări, cursuri,
            workshop-uri, cercuri de femei din domenii ca yoga, meditație,
            terapie yoga, psihologie, Registrele Akashice, Shamanism etc., cât
            și practica integrată direct de către noi și formarea unor noi căi
            holistice de vindecare și regăsire.
          </p>
          <p className="mb-4">
            Consider că fiecare dintre noi, în această Călătorie, suntem într-un
            continuu proces de învățare și remodelare, de experimentare și
            cunoaștere.
          </p>
          <p>
            De aceea cred că atunci când ne conectăm la adevărata sursă a
            cunoașterii, posibilitățile devin infinite.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/cursuri.jpg"
            alt="Cursuri"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cursuri;
