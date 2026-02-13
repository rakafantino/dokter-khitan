export default function Footer() {
  return (
    <footer className="bg-white border-t-8 border-primary/10 pt-24 pb-12 px-6" id="kontak">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="font-extrabold text-2xl tracking-tight text-primary">Dokter Khitan Pekanbaru</span>
          </div>
          <p className="text-gray-500 mb-8 max-w-md">Klinik khusus khitan modern terbaik di Pekanbaru dengan pelayanan ramah anak dan tenaga medis profesional berpengalaman.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="material-icons text-primary">location_on</span>
              <div>
                <p className="font-bold">Alamat:</p>
                <p className="text-gray-500">Jl. Thamrin No. 103 Gobah Pekanbaru, Riau – Indonesia 28115</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-icons text-primary">phone</span>
              <div>
                <p className="font-bold">Telepon / WA:</p>
                <p className="text-gray-500">0813-7188-7885</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-icons text-primary">schedule</span>
              <div>
                <p className="font-bold">Jam Operasional:</p>
                <p className="text-gray-500">Senin - Minggu: 08.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-96 bg-gray-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl relative">
          <iframe src="https://maps.google.com/maps?q=0.515828,101.464338&hl=id&z=14&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t-2 border-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400 font-medium text-center md:text-left">
          © {new Date().getFullYear()} Dokter Khitan Pekanbaru. Crafted with ❤️ by{" "}
          <span className="text-primary font-bold">
            <a href="https://www.linkedin.com/in/rakafantino/" target="_blank" rel="noopener noreferrer">
              Raka Fantino
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
