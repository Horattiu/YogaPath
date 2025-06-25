import React from "react";

const Clase = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-200 flex flex-col md:flex-row items-start gap-10">
      {/* Textul */}
      <div className="md:w-2/3">
        <h1 className="text-5xl text-yellow-500 font-bold mb-6 mrs-saint-delafield-regular">
          Clase de grup
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          Clasele de Yoga de grup din cadrul studio-ului din Cluj te pot ajuta
          să îți îmbunătățești viața la nivel fizic, mental și emoțional: lucrăm
          specific pe dureri de spate, probleme digestive, îmbunătățirea
          respirației și afecțiuni legate de aceasta, insomnii, afecțiuni
          cauzate de stres și multe altele.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Aceste clase au o abordare terapeutică pentru care este nevoie de
          ghidaj fizic prin corectarea posturilor de către instructor, de aceea
          nu poate fi doar o practică personală.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Prin executarea corectă a asanelor vom debloca energia din corp pentru
          a fi ghidată acolo unde acesta are nevoie.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Aceste clase de grup sunt potrivite și pentru persoanele care nu au
          anumite afecțiuni dar care vor să dobândească echilibrul între minte,
          corp și suflet.
        </p>
      </div>

      {/* Imaginea */}
      <div className="md:w-1/3 w-full">
        <img
          src="/clase.jpg"
          alt="Clase de Yoga"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Clase;
