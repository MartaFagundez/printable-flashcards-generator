import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useFlashcardsContext } from "../contexts/FlashcardsContext";
import CardTwin from "../components/CardTwin";
import FlashcardsUploader from "../components/FlashcardsUploader";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const navigate = useNavigate();
  const {store: {flashcardsList}} = useFlashcardsContext();

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timelineMaster = useRef(null);

  // Animation
  useGSAP(
    () => {
      function appear() {
        timeline1.current = gsap
          .timeline( { delay: 0.25, defaults: { duration: 0.8, ease: "expo.out" }} )
          .fromTo( ".hero-title", { opacity: 0 }, { opacity: 1, duration: 1.5 } )
          .fromTo( ".hero-subtitle", { opacity: 0 },{ opacity: 1, duration: 1.5 }, "-=75%" )
        return timeline1.current;
      }

      function translate() {
        timeline2.current = gsap
          .timeline( { delay: 0, defaults: { duration: 1.75, ease: "elastic.out(0.5,0.5)" }} )
          .fromTo( ".card-twin", { x: "100vw", opacity: 0 }, { x: 0, opacity: 1 } )
        return timeline2.current;
      }

      function separate() {
        timeline3.current = gsap
        .timeline( {delay: 3, defaults: { duration: 1.25, ease: "back.out(2)" }} )
        .fromTo(".card-twin:nth-of-type(1)", { rotate: 0 }, { rotate: "-=40", x: "-=40%", y: "+=15%" } )
        .fromTo(".card-twin:nth-of-type(2)", { rotate: 0 }, { rotate: "-=20", x: "-=20%", y: "+=5%" }, "-=100%" )
        .fromTo(".card-twin:nth-of-type(4)", { rotate: 0 }, { rotate: "+=20", x: "+=20%", y: "+=5%" }, "-=100%" )
        .fromTo(".card-twin:nth-of-type(5)", { rotate: 0 }, { rotate: "+=40", x: "+=40%", y: "+=15%" }, "-=100%" )
        .to(".card-twin:nth-of-type(3) .card-twin-front", { rotateY: -180, duration: 1 }, "-=100%" )
        .to(".card-twin:nth-of-type(3) .card-twin-back", { rotateY: 0, duration: 1}, "-=100%" )
        .fromTo( "label", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5, ease: "expo.out"}, "+=50%" )
        .fromTo(".button-info", {opacity:0}, {opacity:1}, "-=100%")
        return timeline3.current;
      }

      timelineMaster.current = gsap.timeline();
      timelineMaster.current
        .add(appear())
        .add(translate(), "-=95%")
        .add(separate(), "-=100%")

    }
  );
  
  // When file is upload, navigate to Editor
  useEffect(() => {
    if (flashcardsList.length > 0) {
      navigate("/editor");
    }
  }, [flashcardsList, navigate]);


  return (
    <main className="container d-flex flex-column flex-lg-row-reverse min-vh-100 align-items-center justify-content-center gap-2">
      {/* Cards */}
      <div className="twins-container w-100 w-lg-50">
        <CardTwin gradient={"gradient-nine"} />
        <CardTwin gradient={"gradient-eleven"} />
        <CardTwin gradient={"gradient-nine"} />
        <CardTwin gradient={"gradient-eleven"} />
        <CardTwin gradient={"gradient-nine"} />
      </div>

      {/* Text */}
      <div className="d-flex flex-column w-100 w-lg-50">
        <h1 className="hero-title">Generate printable flashcards easily.</h1>
        <p className="hero-subtitle">
          Upload the data of up to 120 cards using a .json file and you will have
          your flashcards ready to print!
        </p>

        <FlashcardsUploader page="home"/>

      </div>
    </main>
  );
}
