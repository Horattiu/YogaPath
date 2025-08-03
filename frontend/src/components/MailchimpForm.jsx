// // src/components/MailchimpForm.jsx

// import React, { useEffect, useRef } from "react";
// import "../index.css"; // Fișier pentru stiluri personalizate
// import "../App.css"; // Fișier pentru stiluri personalizate

// const MailchimpForm = () => {
//   // Creează o referință la elementul DOM în care vom injecta formularul Mailchimp.
//   const formContainerRef = useRef(null);

//   useEffect(() => {
//     // Acest string conține codul HTML și JavaScript exact așa cum ți l-a dat Mailchimp.
//     // Am scos tag-urile <link> și <style> de la început,
//     // deoarece acestea ar trebui gestionate în fișierul tău CSS global (App.css/index.css).
//     const mailchimpHtmlContent = `
//          <div id="mc_embed_signup" class=p-8 rounded-lg shadow-xl text-center text-white max-w-md mx-auto">
//           <h2 class="text-3xl font-bold text-yellow-400 mb-6">Abonnează-te la Newsletter!</h2>
//           <form action="https://gmail.us4.list-manage.com/subscribe/post?u=7f78f4dea9d60157a39953e72&amp;id=03bb1d0488&amp;f_id=0094a4eff0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
//               <div id="mc_embed_signup_scroll" class="flex flex-col items-center">
//                   <div class="mc-field-group mb-4 w-full">
//                       <label for="mce-EMAIL" class="block text-left text-gray-200 text-sm font-medium mb-2">Adresa Email <span class="asterisk text-red-500">*</span></label>
//                       <input type="email" name="EMAIL" class="required email text-black bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500" id="mce-EMAIL" required="" value="" placeholder="nume@exemplu.com">
//                   </div>
//                   <div id="mce-responses" class="clear mt-4 w-full">
//                       <div class="response hidden p-3 rounded-md text-sm" id="mce-error-response" style="display: none;"></div>
//                       <div class="response hidden p-3 rounded-md text-sm" id="mce-success-response" style="display: none;"></div>
//                   </div>
//                   <div style="position: absolute; left: -5000px;" aria-hidden="true">
//                       <input type="text" name="b_7f78f4dea9d60157a39953e72_03bb1d0488" tabindex="-1" value="">
//                   </div>
//                   <div class="clear mt-6">
//                       <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out cursor-pointer w-48 text-lg" value="Abonare">
//                   </div>
//               </div>
//           </form>
//       </div>
//       <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
//       <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
//     `;
//     // Verifică dacă referința DOM este disponibilă
//     if (formContainerRef.current) {
//       // Injectează conținutul HTML în elementul DOM.
//       // Această metodă nu execută scripturile automat.
//       formContainerRef.current.innerHTML = mailchimpHtmlContent;

//       // Selectează toate tag-urile <script> injectate.
//       const scripts = formContainerRef.current.querySelectorAll("script");

//       // Iterăm prin scripturi și le re-executăm.
//       // Aceasta este esențial pentru ca logica Mailchimp (validare, trimitere) să funcționeze.
//       scripts.forEach((oldScript) => {
//         const newScript = document.createElement("script");

//         // Copiază textul scriptului, dacă există (pentru scripturi inline)
//         if (oldScript.text) {
//           newScript.text = oldScript.text;
//         }
//         // Copiază atributul `src`, dacă scriptul este un fișier extern
//         if (oldScript.src) {
//           newScript.src = oldScript.src;
//           newScript.async = false; // Asigură că scripturile se încarcă în ordine
//         }

//         // Adaugă noul script în <body> pentru a fi executat.
//         // Adăugăm în <body> pentru a evita probleme cu DOM-ul care nu este încă complet.
//         document.body.appendChild(newScript);

//         // Dacă scripturile au fost deja executate, poți șterge scriptul vechi
//         // pentru a evita duplicați, dar lasă-l să se execute mai întâi.
//         // (Atenție: dacă ștergi prea repede, scriptul ar putea să nu termine execuția)
//         // oldScript.remove(); // Poate fi comentat dacă ai probleme de execuție
//       });
//     }

//     // Funcția de curățare a lui useEffect:
//     // Se execută atunci când componenta este demontată sau înainte ca useEffect să se re-execute.
//     return () => {
//       if (formContainerRef.current) {
//         // Curăță conținutul injectat pentru a evita efecte secundare dacă componenta este remontată.
//         formContainerRef.current.innerHTML = "";
//         // Ideal ar fi să ștergi și scripturile adăugate în <body> aici,
//         // dar e mai complex și pentru un formular Mailchimp unic nu e strict necesar.
//       }
//     };
//   }, []); // Array-ul gol de dependențe asigură că useEffect rulează doar o singură dată la montare.

//   return (
//     // Aici folosești clase Tailwind CSS pentru a stiliza containerul componentei tale.
//     // Aceste clase se aplică direct elementului div al componentei React, nu formularului Mailchimp injectat.
//     <div className="max-w-md mx-auto p-8 rounded-lg shadow-xl text-center text-white">
//       <p className="text-gray-300 mb-6">
//         Primește cele mai noi noutăți direct în inbox-ul tău!
//       </p>

//       {/* Acesta este div-ul gol inițial. Conținutul formularului Mailchimp va fi injectat aici.
//           Clasele Tailwind pe acest div (dacă ar fi) s-ar aplica doar containerului,
//           nu elementelor din formularul Mailchimp (care vor fi stilizate prin @apply în CSS). */}
//       <div ref={formContainerRef} className="mailchimp-form-wrapper">
//         {/* Formularul Mailchimp complet va fi inserat aici de React */}
//       </div>
//     </div>
//   );
// };

// export default MailchimpForm;

// src/components/MailchimpForm.jsx

import React, { useEffect, useRef } from "react";
import "../index.css";
import "../App.css";

const MailchimpForm = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    const mailchimpHtmlContent = `
      <div id="mc_embed_signup" class="p-8 rounded-lg shadow-xl text-center text-white max-w-md mx-auto montserrat">
        <h2 class="text-3xl font-semibold text-yellow-400 mb-2">Abonează-te la Newsletter!</h2>
        <p class="text-gray-300 mb-6">Primește cele mai noi noutăți direct în inbox-ul tău!</p>
        <form action="https://gmail.us4.list-manage.com/subscribe/post?u=7f78f4dea9d60157a39953e72&amp;id=03bb1d0488&amp;f_id=0094a4eff0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
          <div id="mc_embed_signup_scroll" class="flex flex-col items-center">
            <div class="mc-field-group mb-4 w-full">
              <label for="mce-EMAIL" class="block text-left text-gray-200 text-sm font-medium mb-2">
                Adresa Email <span class="asterisk text-red-500">*</span>
              </label>
              <input type="email" name="EMAIL" class="required email text-black bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500" id="mce-EMAIL" required placeholder="nume@exemplu.com">
            </div>
            <div id="mce-responses" class="clear  w-full">
              <div class="response hidden p-3 rounded-md text-sm" id="mce-error-response" style="display:none;"></div>
              <div class="response hidden p-3 rounded-md text-sm" id="mce-success-response" style="display:none;"></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_7f78f4dea9d60157a39953e72_03bb1d0488" tabindex="-1" value="">
            </div>
            <div class="clear mt-6">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-md shadow hover:bg-yellow-400 transition duration-300 ease-in-out cursor-pointer text-sm" value="Abonare">
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script type="text/javascript">
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';ftypes[0]='email';
          fnames[1]='FNAME';ftypes[1]='text';
          fnames[2]='LNAME';ftypes[2]='text';
          fnames[3]='ADDRESS';ftypes[3]='address';
          fnames[4]='PHONE';ftypes[4]='phone';
          fnames[5]='BIRTHDAY';ftypes[5]='birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      </script>
    `;

    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = mailchimpHtmlContent;

      const scripts = formContainerRef.current.querySelectorAll("script");

      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.text) newScript.text = oldScript.text;
        if (oldScript.src) {
          newScript.src = oldScript.src;
          newScript.async = false;
        }
        document.body.appendChild(newScript);
      });
    }

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-xl text-center text-white">
      {/* Formularul Mailchimp va fi injectat aici */}
      <div ref={formContainerRef} className="mailchimp-form-wrapper"></div>
    </div>
  );
};

export default MailchimpForm;
