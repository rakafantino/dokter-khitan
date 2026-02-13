"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Set initial state
      gsap.set(".service-card", { autoAlpha: 0, y: 60 });
      gsap.set(".services-heading", { autoAlpha: 0, y: 30 });

      // Animate section heading
      gsap.to(".services-heading", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate service cards
      gsap.to(".service-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const services = [
    {
      title: "Alisklamp",
      tagline: "Tanpa Jahit",
      desc: "Menggunakan tabung pelindung (klamp) sekali pakai. Tanpa jahitan, tanpa perban, minim risiko perdarahan.",
      image: "/Alisklamp.jpg",
      badge: "Terpopuler",
      borderColor: "border-primary",
      bgBadge: "bg-primary",
    },
    {
      title: "Stapler",
      tagline: "Estetik",
      desc: "Teknologi terbaru yang memotong dan menjahit sekaligus. Proses super cepat, hasil sangat rapi.",
      image: "/Stapler.png",
      badge: null,
      borderColor: "border-secondary",
      bgBadge: "bg-secondary",
    },
    {
      title: "Metode Lem",
      tagline: "Modern",
      desc: "Inovasi perekat medis cair sebagai pengganti jahitan benang. Hasil sangat mulus tanpa bekas.",
      image: "/Lem.png",
      badge: null,
      borderColor: "border-accent",
      bgBadge: "bg-accent",
    },
    {
      title: "E-Cauter",
      tagline: "Laser",
      desc: "Metode konvensional menggunakan electric cauter untuk memotong kulit dengan panas.",
      image: "/E-Cauter.png",
      badge: null,
      borderColor: "border-amber-500",
      bgBadge: "bg-amber-500",
    },
  ];

  return (
    <section className="py-24 px-6" id="layanan" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="services-heading text-4xl lg:text-5xl font-extrabold mb-4">
            Metode Khitan Modern
          </h2>
          <p className="services-heading text-lg text-gray-600">
            Pilih metode terbaik yang paling nyaman untuk buah hati Anda.
          </p>
        </div>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white p-8 rounded-3xl shadow-lg ${service.borderColor} border-4 text-center hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-extrabold mb-2">{service.title}</h3>
              <p className="text-sm font-bold opacity-70 mb-3">{service.tagline}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              {service.badge && (
                <span className={`inline-block ${service.bgBadge} text-white px-4 py-1 rounded-full text-xs font-bold uppercase`}>
                  {service.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
