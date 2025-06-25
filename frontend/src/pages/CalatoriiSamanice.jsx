import React from "react";

const CalatoriiSamanice = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center text-yellow-500 mrs-saint-delafield-regular">
          Calatorii Samanice
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16 text-lg">
          <div>
            <p className="mb-4">
              Călătoria șamanică este o practică străveche de conectare cu lumea
              spirituală, cu ghizii, cu animalele de putere și cu Sinele
              Superior. În cadrul unei călătorii, vei fi ghidat într-o stare de
              conștiință extinsă, în care primești mesaje clare, vindecare și
              răspunsuri.
            </p>
            <p className="mb-4">
              Fiecare călătorie este unică, profund transformatoare și îți oferă
              acces la înțelepciune interioară. Acest proces poate aduce
              claritate, eliberare emoțională și reconectare cu misiunea ta
              spirituală.
            </p>
            <p>
              Prin sunetul tobei sau ghidare verbală, vei explora tărâmurile
              nevăzute pentru a descoperi exact ceea ce sufletul tău are nevoie
              în acest moment.
            </p>
          </div>
          <div>
            <img
              src="/calatorii2.png"
              alt="Calatorie Samanica 1"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center text-lg">
          <div className="order-2 md:order-1">
            <img
              src="/calatorii1.png"
              alt="Calatorie Samanica 2"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-4">
              Aceste sesiuni sunt pentru cei care simt o chemare interioară,
              care doresc să se reconecteze cu rădăcinile lor spirituale și să
              acceseze informații dincolo de planul fizic. Ele pot sprijini
              procesul de vindecare, de transformare și de trezire spirituală.
            </p>
            <p>
              Dacă simți că este momentul să explorezi această dimensiune
              profundă a ființei tale, călătoria șamanică îți poate deschide o
              lume nouă.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalatoriiSamanice;
