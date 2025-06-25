import React from "react";

const KundaliniTantra = () => {
  return (
    <div className="bg-black text-white px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-7xl mx-auto">
      {/* Textul */}
      <div className="lg:w-2/3 space-y-6 text-lg leading-relaxed">
        <h1 className="text-5xl font-bold mb-4 mrs-saint-delafield-regular text-yellow-500">
          Kundalini & Tantra
        </h1>

        <p>
          Retreat-urile noastre au început în 2020 în plină pandemie când am
          simțit nevoia să concretizăm în ceva palpabil ceea ce își doreau
          foarte mulți din jurul nostru – să se reconecteze cu ceilalți, cât și
          cu ei înșiși.
        </p>

        <p>
          De aici a apărut primul retreat și au urmat multe altele. În prezent,
          în 2025, avem în spate experiența a peste 25 de retreat-uri, atât în
          țară cât și în afara țării.
        </p>

        <p>
          Am început cu retreat-uri de yoga și am continuat cu cele de
          feminitate, kundalini, tantra, shamanism, dezvoltare personală și
          multe alte teme.
        </p>

        <p>
          Retreat-urile noastre sunt mereu diferite. Păstrăm însă organizarea
          impecabilă de fiecare dată și mâncarea vegană delicioasă, gătită de
          cele mai multe ori de draga mea Oana.
        </p>

        <p>
          Chiar dacă ai mai participat la un retreat de-al nostru, de fiecare
          dată experiența e unică. O spun cei care vin cu noi poate a cincea sau
          a șasea oară în retreat-uri.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-yellow-500">
          Ce se întâmplă mai exact într-un retreat?
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            ne așezăm în cerc și ne deschidem, ne dăm voie, ne acceptăm unii pe
            alții
          </li>
          <li>învățăm să fim vulnerabili</li>
          <li>plângem mult, însă râdem și mai mult</li>
          <li>gătim împreună câteodată</li>
          <li>
            ne trezim la 7 dimineața să avem timp, cu o cană de ceai sau cafea
            în mână, să ne spunem toate poveștile de viață “unui necunoscut” pe
            care-l simțim atât de aproape de inima noastră
          </li>
          <li>ieșim din zona de confort</li>
          <li>practicăm yoga, kundalini</li>
          <li>
            ne lăsăm ghidați în practici de tantra în care integrăm ceea ce
            sufletul și corpul au nevoie
          </li>
          <li>
            ne relaxăm în orele pe care le avem libere în fiecare zi: pentru că
            vrem să învățăm cât mai mult, să vindecăm și integrăm cât mai frumos
          </li>
          <li>
            câteodată ne bucurăm de piscină, de saună sau jacuzzi, de soare
          </li>
          <li>ne bucurăm de natură, de energia grupului</li>
        </ul>
      </div>

      {/* Imaginea */}
      <div className="lg:w-1/3 w-full flex justify-center">
        <img
          src="/jundalini.png"
          alt="kundalini tantra"
          className="rounded-2xl w-full max-w-sm shadow-lg"
        />
      </div>
    </div>
  );
};

export default KundaliniTantra;
