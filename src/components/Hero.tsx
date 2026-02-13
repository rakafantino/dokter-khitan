"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-image",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-doodle",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );

      // Refresh ScrollTrigger after animations
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section id="beranda" ref={containerRef} className="relative pt-20 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="hero-badge inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-bold text-sm mb-6 border-2 border-primary/20">#1 Khitan Ramah Anak di Pekanbaru</span>
          <h1 className="hero-title text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
            Khitan Tanpa <span className="text-primary underline decoration-wavy">Ketakutan</span>, Dengan Senyum!
          </h1>
          <p className="hero-desc text-xl text-[#6d5b5b] mb-10 leading-relaxed max-w-xl">Metode modern yang nyaman, minim nyeri, dan dilakukan oleh tenaga medis profesional dalam suasana yang ceria dan menyenangkan.</p>
        </div>
        <div className="hero-image relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
          <div className="bg-white rounded-[3rem] p-4 shadow-2xl rotate-2 relative">
            <div className="relative w-full h-[500px]">
              <Image alt="Dr. Sugeng" className="rounded-[2.5rem] object-cover" src="/dr-sugeng.png" fill priority />
            </div>
            {/* Doodle Elements */}
            <div className="hero-doodle absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl -rotate-6 border-4 border-primary/20 z-10">
              <span className="material-icons text-5xl text-secondary">star</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
