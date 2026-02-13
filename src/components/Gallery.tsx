"use client";

import { useRef } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(containerRef.current, { autoAlpha: 0, y: 40 });

    gsap.to(containerRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white" id="galeri">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Galeri Ceria</h2>
          <p className="text-lg text-gray-600">Momen-momen keberanian para jagoan cilik kami.</p>
        </div>
        <div className="min-h-[400px]">
          <div className="elfsight-app-857cfd12-a1a9-4d67-8507-7fb3c9154878" data-elfsight-app-lazy></div>
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
        </div>
      </div>
    </section>
  );
}
