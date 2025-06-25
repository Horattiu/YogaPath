import React from "react";

const Medicine = () => {
  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <img
            src="/medicine.png"
            alt="Medicine for Spirit and Body"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-bold mrs-saint-delafield-regular text-yellow-500 mb-4">
          Medicine for Spirit and Body
        </h1>
        <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
          Shamanic healing & Akashic reading
        </h2>

        <p className="mb-4 text-lg leading-relaxed">
          Studiile din ultimul an m-au ajutat să creez un nou instrument care să
          fie de folos în propria vindecare. Astfel am creat această terapie -{" "}
          <strong>Medicine for Spirit & Body</strong> care integrează atât
          Spațiul Akashic cât și Lumea Shamanismului.
        </p>

        <h3 className="text-xl font-semibold text-yellow-500 mb-2">
          Structura terapiei:
        </h3>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed space-y-2">
          <li>
            Citire akashică pentru a identifica sursa traumelor și provocărilor
            tale actuale.
          </li>
          <li>
            Sesiune de vindecare prin shamanism – schimbări imediate în starea
            fizică și emoțională.
          </li>
          <li>
            Integrarea: pașii următori, instrumente și practici de continuare.
          </li>
        </ul>

        <p className="mb-6 text-lg leading-relaxed">
          <strong>Recomandare:</strong> primele 2 sesiuni la interval de 7–10
          zile, iar sesiunea de integrare la 2 săptămâni după a doua.
        </p>

        <h3 className="text-xl font-semibold text-yellow-500 mb-2">
          Ce vei obține după cele 3 sesiuni:
        </h3>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed space-y-2">
          <li>O înțelegere profundă a drumului tău.</li>
          <li>Clarificare privind traumele și provocările personale.</li>
          <li>Vindecare la nivel de suflet și corp (acolo unde e cazul).</li>
          <li>Practici utile de integrat în rutina zilnică.</li>
          <li>Direcție clară și reconectare cu Sinele.</li>
          <li>Eliberarea de frici și anxietăți care te țin blocat/ă.</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-500 mb-2">
          Detalii organizatorice:
        </h3>
        <p className="mb-2 text-lg leading-relaxed">
          Sesiunile se pot face în persoană în Cluj-Napoca sau online pe Zoom.
        </p>
        <p className="mb-2 text-lg leading-relaxed">
          Durata unei sesiuni: 60–90 minute.
        </p>
        <p className="text-lg leading-relaxed">
          <strong>Cost:</strong> 1480 RON (pentru pachetul complet) sau 1700 RON
          dacă plătești separat.
        </p>
      </div>
    </div>
  );
};

export default Medicine;
