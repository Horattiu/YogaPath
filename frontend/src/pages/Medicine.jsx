import React from "react";

const Medicine = () => {
  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen montserrat">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mrs-saint-delafield-regular text-yellow-500 mb-4">
          Medicine for Spirit and Body
        </h1>
        <div className="mb-10">
          <img
            src="/medicine.png"
            alt="Medicine for Spirit and Body"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-2xl  text-yellow-500 mb-6">
          Shamanic healing & Akashic reading
        </h2>

        <p className="mb-4 text-lg leading-relaxed">
          Studiile din ultimul an m-au ajutat să creez un nou instrument care să
          fie de folos în propria vindecare.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Astfel am creat această terapie -{" "}
          <strong>Medicine for Spirit & Body</strong> care integrează atât
          Spațiul Akashic cât și Lumea Shamanismului.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Mai exact este vorba de o terapie în care lucrăm astfel:
        </p>

        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed space-y-2">
          <li>
            prima dată vom avea împreună o citire akashică în care identificăm
            de unde vin traumele, provocările și întrebările legate de viața ta
            prezentă
          </li>
          <li>
            a doua sesiune va fi una de vindecare directă prin metode din
            shamanism, după care poți observa o schimbare imediată în starea ta,
            în fizic și emoțional
          </li>
          <li>
            a treia sesiune va fi despre integrarea a ceea ce am lucrat, de a
            înțelege pașii în care vei merge mai departe, vom discuta despre
            instrumente și practici pe care le poți folosi pentru a continua pe
            drumul vindecării și auto-cunoașterii tale
          </li>
        </ul>

        <p className="mb-6 text-lg leading-relaxed">
          Recomandarea este ca primele 2 sesiuni să se facă cu o diferență de
          7-10 zile între ele, iar cea de integrare la 2 săptămâni după cea de-a
          doua ședință.
        </p>

        <h3 className="text-2xl  text-yellow-500 mb-2">
          Ce vei obține după aceste 3 sesiuni:
        </h3>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed space-y-2">
          <li>o înțelegere cât mai profundă a drumului tău</li>
          <li>
            o înțelegere de unde vin traumele, provocările și suferințele tale
          </li>
          <li>
            o vindecare profundă la nivel de suflet și corp (acolo unde e cazul)
          </li>
          <li>
            practici pe care le poți integra în activitatea ta zilnică ca și
            rutină
          </li>
          <li>o direcție clară în care să te reconectezi în Sine</li>
          <li>eliminarea multor frici / anxietăți care te țin blocat/ă</li>
        </ul>

        <p className="mb-2 text-lg leading-relaxed">
          Sesiunile se pot face atât în persoană în Cluj-Napoca, cât și online
          pe Zoom.
        </p>

        <p className="mb-2 text-lg leading-relaxed">
          Fiecare sesiune durează între 60-90 min.
        </p>

        <p className="text-lg leading-relaxed">
          Schimbul energetic pentru acest pachet este de{" "}
          <strong>1480 RON</strong> - dacă achiziționezi cele 3 ședințe, sau{" "}
          <strong>1700 RON (total)</strong> dacă plătești separat fiecare
          sesiune în parte.
        </p>
      </div>
    </div>
  );
};

export default Medicine;
