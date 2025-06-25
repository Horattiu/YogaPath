// import React from "react";
// import Navbar from "./Navbar";
// import VideoPlayer from "./VideoPlayer"; // Add this line to import VideoPlayer
// import BlackBackground from "./BlackBackground";
// import IconBar from "./IconBar";

// function Homepage() {
//   const videoJsOptions = {
//     controls: true, // Example options, you can customize these
//     autoplay: true,
//     loop: true,
//   };
//   return (
//     <>
//       <Navbar />
//       <div
//         className="relative "
//         style={{ width: "100%", height: "80vh", overflow: "hidden" }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full">
//           <VideoPlayer
//             url="./yoga.mp4"
//             options={videoJsOptions}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//           {/* Overlay pentru culoare mai închisă */}
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//         </div>
//       </div>
//       <IconBar />
//       <BlackBackground />
//     </>
//   );
// }

// export default Homepage;

import React from "react";
import VideoPlayer from "./VideoPlayer";
import BlackBackground from "./BlackBackground";
import IconBar from "./IconBar";
import TextImageComponent from "./TextImageComponent";
import Footer from "./Footer";
import Timeline from "./Timeline";
import SelfSummary from "./SelfSummary";
import Carousel2 from "./Carousel2";
import FeedbackCarousel from "./FeedbackCarousel";
import MailchimpForm from "./MailchimpForm";
import UnderConstruction from "./UnderConstruction";

function Homepage() {
  const videoJsOptions = {
    controls: true,
    autoplay: true,
    loop: true,
  };

  return (
    <>
      {/* <div
        className="relative bg-[#060606]"
        style={{ width: "100%", height: "80vh", overflow: "hidden" }}
      > */}
      {/* <div className="absolute top-0 left-0 w-full h-full ">
          <VideoPlayer
            url="./yoga.mp4"
            options={videoJsOptions}
            className="absolute top-0 left-0 w-full h-full object-cover"
          /> */}
      {/* Overlay pentru culoare mai închisă */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}

      {/* Text mic în mijloc */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-5xl max-w-6xl mrs-saint-delafield-regular">
                Esti binevenit/a în aceasta Lume Magica a Spasiului pe care îl
                cream împreuna din prima clipa când intensia Ta te-a adus aici.
              </p> */}
      {/* <p className="text-white text-5xl mrs-saint-delafield-regular">
                Ce ai vrea sa exploram împreuna?
              </p> */}
      {/* </div>
          </div>
        </div>
      </div> */}
      {/* <Carousel2 />
      <IconBar /> */}
      {/* <Timeline /> */}
      {/* <SelfSummary /> */}

      {/* <TextImageComponent /> */}
      {/* <FeedbackCarousel /> */}
      <UnderConstruction />

      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
