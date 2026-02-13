"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-24 px-6" id="layanan" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Metode Khitan Modern
          </h2>
          <p className="text-lg text-gray-600">
            Pilih metode terbaik yang paling nyaman untuk buah hati Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Alisklamp */}
          <div className="service-card bg-white p-8 rounded-3xl shadow-sticker hover:-translate-y-2 transition-transform border-4 border-primary/5 text-center">
            <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/Alisklamp.jpg"
                alt="Alisklamp"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Alisklamp</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Menggunakan tabung pelindung (klamp) sekali pakai. Tanpa jahitan,
              tanpa perban, minim risiko perdarahan, dan anak bisa langsung
              mandi atau beraktivitas.
            </p>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase">
              Terpopuler
            </span>
          </div>
          {/* Stapler */}
          <div className="service-card bg-white p-8 rounded-3xl shadow-sticker hover:-translate-y-2 transition-transform border-4 border-primary/5 text-center">
            <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/10">
              <Image
                src="/Stapler.png"
                alt="Stapler"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Stapler</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Teknologi terbaru yang memotong dan menjahit sekaligus. Proses
              super cepat, hasil sangat rapi (estetik), dan penyembuhan luka
              lebih optimal.
            </p>
          </div>
          {/* Lem */}
          <div className="service-card bg-white p-8 rounded-3xl shadow-sticker hover:-translate-y-2 transition-transform border-4 border-primary/5 text-center">
            <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/10">
              <Image
                src="/Lem.png"
                alt="Metode Lem"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Metode Lem</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Inovasi perekat medis cair sebagai pengganti jahitan benang. Hasil
              sangat mulus tanpa bekas jahitan, minim nyeri, dan tidak ada alat
              menempel.
            </p>
          </div>
          {/* Ecauter */}
          <div className="service-card bg-white p-8 rounded-3xl shadow-sticker hover:-translate-y-2 transition-transform border-4 border-primary/5 text-center">
            <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/E-Cauter.png"
                alt="E-Cauter"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">E-Cauter</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Metode konvensional menggunakan <em>electric cauter</em> untuk
              memotong kulit dengan panas yang meminimalkan perdarahan. Efektif
              dan terjangkau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
