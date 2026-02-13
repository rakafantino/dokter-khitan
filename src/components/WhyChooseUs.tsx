export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border-4 border-secondary/20 flex flex-col items-center text-center">
              <span className="material-icons text-secondary text-4xl mb-2">medical_services</span>
              <span className="font-bold">Dokter Berpengalaman</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-primary/20 flex flex-col items-center text-center">
              <span className="material-icons text-primary text-4xl mb-2">home</span>
              <span className="font-bold">Fasilitas Nyaman</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-accent/20 flex flex-col items-center text-center">
              <span className="material-icons text-accent text-4xl mb-2">toys</span>
              <span className="font-bold">Ramah Anak</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-secondary/20 flex flex-col items-center text-center">
              <span className="material-icons text-secondary text-4xl mb-2">verified</span>
              <span className="font-bold">Sertifikat Resmi</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-primary/20 flex flex-col items-center text-center">
              <span className="material-icons text-primary text-4xl mb-2">savings</span>
              <span className="font-bold">Harga Terjangkau</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-accent/20 flex flex-col items-center text-center">
              <span className="material-icons text-accent text-4xl mb-2">support_agent</span>
              <span className="font-bold">Konsultasi Gratis</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Mengapa Harus Di Dokter Khitan Pekanbaru?</h2>
          <p className="text-lg text-gray-600 mb-8">Kami mengerti bahwa khitan adalah momen penting sekali seumur hidup. Kami memberikan pelayanan terbaik dengan hati untuk memastikan si kecil tetap merasa aman dan bahagia.</p>
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
