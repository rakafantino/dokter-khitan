"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(".whychoose-card", { autoAlpha: 0, y: 50 });
    gsap.set(".whychoose-content > *", { autoAlpha: 0, x: 30 });

    // Animate grid items
    gsap.to(".whychoose-card", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".whychoose-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate content on the right
    gsap.to(".whychoose-content > *", {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".whychoose-content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  const features = [
    { icon: "medical_services", color: "text-secondary", border: "border-secondary", bg: "bg-secondary/10", label: "Dokter Berpengalaman" },
    { icon: "home", color: "text-primary", border: "border-primary", bg: "bg-primary/10", label: "Fasilitas Nyaman" },
    { icon: "toys", color: "text-accent", border: "border-accent", bg: "bg-accent/10", label: "Ramah Anak" },
    { icon: "verified", color: "text-secondary", border: "border-secondary", bg: "bg-secondary/10", label: "Sertifikat Resmi" },
    { icon: "savings", color: "text-primary", border: "border-primary", bg: "bg-primary/10", label: "Harga Terjangkau" },
    { icon: "support_agent", color: "text-accent", border: "border-accent", bg: "bg-accent/10", label: "Konsultasi Gratis" },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="whychoose-grid grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`whychoose-card bg-white p-6 rounded-2xl ${feature.border} border-4 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300`}
              >
                <span className={feature.color}>
                  <span className="material-icons text-4xl mb-2">{feature.icon}</span>
                </span>
                <span className="font-bold">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="whychoose-content order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Mengapa Harus Di Dokter Khitan Pekanbaru?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Kami mengerti bahwa khitan adalah momen penting sekali seumur hidup. Kami memberikan pelayanan terbaik dengan hati untuk memastikan si kecil tetap merasa aman dan bahagia.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-bold text-gray-700">
              <span className="material-icons text-primary">check_circle</span> Peralatan Steril &amp; Sekali Pakai
            </li>
            <li className="flex items-center gap-3 font-bold text-gray-700">
              <span className="material-icons text-primary">check_circle</span> Tanpa Jarum Suntik (Optional)
            </li>
            <li className="flex items-center gap-3 font-bold text-gray-700">
              <span className="material-icons text-primary">check_circle</span> Bonus Bingkisan Mainan
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
