import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function IntroAnimation({ onFinish }) {
  const greetings = [
    "Hello",
    "I'm Sayanjit Jana",
    "Welcome to My Portfolio",
  ];

  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    let greetingTimer;

    // Animate each greeting
    gsap.fromTo(
      greetingRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );

    // Move to next greeting
    if (index < greetings.length - 1) {
      greetingTimer = setTimeout(() => {
        setIndex((i) => i + 1);
      }, 700);
    } else {
      // Hold the final greeting before exit
      greetingTimer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => onFinish && onFinish(),
        });

        tl.to(greetingRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -30,
          ease: "power2.in",
        })
          .to(
            overlayRef.current,
            {
              duration: 1.2,
              y: "-100vh",
              ease: "power4.inOut",
            },
            "-=0.1"
          )
          .to(
            overlayRef.current.querySelector("path"),
            {
              duration: 1.2,
              morphSVG: "M0,0 L0,300 Q720,900 1440,300 L1440,0 Z",
              ease: "power4.inOut",
            },
            "<"
          );
      }, 900);
    }

    return () => {
      clearTimeout(greetingTimer);
      gsap.killTweensOf(greetingRef.current);
    };
  }, [index, onFinish]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-center justify-center text-white overflow-hidden pointer-events-none"
    >
      <h1
        ref={greetingRef}
        className="text-5xl md:text-7xl lg:text-8xl font-bold absolute z-20 text-center px-6"
      >
        {greetings[index]}
      </h1>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          fill="black"
          d="M0,0 L0,900 L1440,900 L1440,0 Z"
        />
      </svg>
    </div>
  );
}