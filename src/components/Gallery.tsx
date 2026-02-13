"use client";

import Script from "next/script";

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-white" id="galeri">
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
