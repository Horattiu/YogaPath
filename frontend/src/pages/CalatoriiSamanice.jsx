import React from "react";

const CalatoriiSamanice = () => {
  return (
    <div className="bg-black text-white py-12 px-6 montserrat">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center text-yellow-500 mrs-saint-delafield-regular">
          Calatoriile Shamanice
        </h1>

        {/* Prima secțiune: text + poza 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16 text-lg">
          <div>
            <p className="mb-6">
              Constituie un instrument valoros de accesare a lumii tale
              interioare pentru a căuta de unde vin provocările vieții tale, de
              a aduce schimbări reale, de a aduce vindecare la toate nivelele.
            </p>

            <p className="mb-6">
              Într-o călătorie shamanică putem lucra împreună pentru:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>recuperarea bucăților de suflet pierdute</li>
              <li>
                vindecarea fizică și emoțională a corpului și sufletului tău
              </li>
              <li>reintegrarea și reîntregirea sufletului tău</li>
              <li>găsirea animalului de putere și ghidajul său</li>
              <li>
                încâlciturile sufletești pentru a renunța la anumite persoane
                sau energii care nu îți mai sunt benefice
              </li>
              <li>
                împreună putem conduce în Lumea de Sus sufletele celor dragi
                (decedați) pentru a-și găsi liniștea
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/calatorii2.png"
              alt="Calatorie Samanica 1"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* A doua secțiune: poza 2 + text */}
        <div className="grid md:grid-cols-2 gap-10 items-start text-lg">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <img
              src="/calatorii1.png"
              alt="Calatorie Samanica 2"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-6 text-2xl text-yellow-500">
              Ce vei obține după această călătorie shamanică:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                răspunsuri reale și exacte despre ce te ține blocat și te
                împiedică să îți îndeplinești potențialul
              </li>
              <li>
                căi și instrumente de a continua cunoașterea de sine și procesul
                de vindecare
              </li>
              <li>
                un sentiment de împlinire, reîntregire și încredere în tine
              </li>
              <li>vindecare la nivel de corp și suflet</li>
              <li>
                un sentiment de stabilitate și energie nouă pentru a continua cu
                proiectele din viața ta
              </li>
            </ul>

            <p className="mb-4">
              Sesiunea dureză 60 min și se poate face atât în persoană în
              Cluj-Napoca, cât și online pe Zoom.
            </p>
            <p className="mb-0">
              Schimbul energetic pentru o sesiune este de 440 RON.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalatoriiSamanice;
