"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StatsRibbon() {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Counter animation for each stat
    const stats = [
      { el: ".stat-0", target: 10000, suffix: "+" },
      { el: ".stat-1", target: 15, suffix: "+" },
      { el: ".stat-2", target: 5, suffix: ".0" },
      { el: ".stat-3", target: 24, suffix: "/7" },
    ];

    stats.forEach((stat, index) => {
      const element = document.querySelector(stat.el);
      if (!element) return;
      
      const textEl = element.querySelector(".stat-number");
      if (!textEl) return;

      gsap.from(element, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // Play once only
        },
        onComplete: () => {
          // Animate counter
          const obj = { value: 0 };
          gsap.to(obj, {
            value: stat.target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              if (stat.suffix === ".0") {
                textEl.textContent = obj.value.toFixed(1);
              } else {
                textEl.textContent = Math.round(obj.value).toLocaleString() + stat.suffix;
              }
            },
          });
        },
      });
    });
  }, { scope: containerRef });

  const statsData = [
    { class: "stat-0", label: "Pasien Khitan" },
    { class: "stat-1", label: "Tahun Pengalaman" },
    { class: "stat-2", label: "Google Rating" },
    { class: "stat-3", label: "Konsultasi WA" },
  ];

  return (
    <section ref={containerRef} className="bg-white border-y-4 border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.class} border-r-0 lg:border-r-4 border-primary/10 border-dashed`}
          >
            <div className="stat-number text-4xl font-extrabold text-primary mb-1">0</div>
            <div className="font-bold text-gray-500 uppercase text-xs tracking-widest">
              {stat.label}
              {index === 2 && (
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-icons text-yellow-400 text-sm">star</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
