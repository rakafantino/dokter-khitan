"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BookingForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    whatsappNumber: "",
    childName: "",
    childAge: "",
    method: "Pilih Metode...",
  });

  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(containerRef.current, { autoAlpha: 0, scale: 0.95 });

    // Pop-in animation for form container
    gsap.to(containerRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { parentName, whatsappNumber, childName, childAge, method } =
      formData;

    const message = `Halo Dokter Khitan, saya ingin mendaftar untuk khitan.

Nama Orang Tua: ${parentName}
No. WhatsApp: ${whatsappNumber}
Nama Anak: ${childName}
Usia Anak: ${childAge}
Metode: ${method}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281371887885?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6" id="booking">
      <div className="max-w-4xl mx-auto">
        <div ref={containerRef} className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border-4 border-primary relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-bold text-sm mb-4 border-2 border-primary/20">
                Daftar Online
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Booking Jadwal Khitan
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Form simpel, CS kita langsung kontak balik!
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block font-bold text-sm mb-2 px-2">
                    Nama Lengkap Orang Tua
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-cream/30 border-2 border-primary/10 rounded-full px-5 py-3 md:px-6 md:py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 px-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-cream/30 border-2 border-primary/10 rounded-full px-5 py-3 md:px-6 md:py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block font-bold text-sm mb-2 px-2">
                    Nama Anak
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Contoh: Kevin"
                    className="w-full bg-cream/30 border-2 border-primary/10 rounded-full px-5 py-3 md:px-6 md:py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 px-2">
                    Usia Anak
                  </label>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="Contoh: 7"
                    className="w-full bg-cream/30 border-2 border-primary/10 rounded-full px-5 py-3 md:px-6 md:py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm md:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-sm mb-2 px-2">
                  Pilih Metode Khitan
                </label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full bg-cream/30 border-2 border-primary/10 rounded-full px-5 py-3 md:px-6 md:py-4 focus:border-primary focus:ring-0 outline-none transition-all appearance-none text-sm md:text-base"
                >
                  <option>Pilih Metode...</option>
                  <option>Alisklamp (Tanpa Jahit)</option>
                  <option>Stapler (Estetik)</option>
                  <option>Lem (Modern)</option>
                  <option>E-Cauter (Laser)</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-primary text-white py-4 md:py-5 rounded-full font-extrabold text-lg md:text-xl shadow-sticker hover:translate-y-1 hover:shadow-none transition-all mt-4 md:mt-6"
              >
                Kirim Pendaftaran
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
