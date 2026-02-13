"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(".testimonial-card", { autoAlpha: 0, y: 60 });

    // Animate testimonial cards with stagger
    gsap.to(".testimonial-card", {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  const testimonials = [
    {
      name: "Bunda Shinta",
      location: "Pekanbaru Kota",
      text: "Anak saya awalnya nangis ketakutan, tapi pas di dalam malah asik main game. Pulang-pulang langsung bisa jalan dan pakai celana. Rekomen banget!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      borderColor: "border-primary",
      bgBadge: "bg-primary",
    },
    {
      name: "Ayah Heru",
      location: "Panam",
      text: "Metode Stapler-nya rapi banget hasilnya. Dokternya sabar banget ngejelasin prosesnya ke anak. Gak nyesel jauh-jauh kesini.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      borderColor: "border-secondary",
      bgBadge: "bg-secondary",
    },
    {
      name: "Mama Dina",
      location: "Rumbai",
      text: "Tempatnya bersih dan wangi, gak kayak klinik biasanya. Anak saya seneng dapet hadiah setelah khitan. Terima kasih Dokter Khitan!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      borderColor: "border-accent",
      bgBadge: "bg-accent",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">Apa Kata Para Orang Tua?</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card pt-8">
              <div className={`speech-bubble p-8 shadow-xl ${testimonial.borderColor} border-4 mb-8`}>
                <div className="flex text-yellow-400 mb-4">
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4 px-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.borderColor} border-4 overflow-hidden relative`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-extrabold">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
