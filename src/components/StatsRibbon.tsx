export default function StatsRibbon() {
  return (
    <section className="bg-white border-y-4 border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="border-r-0 lg:border-r-4 border-primary/10 border-dashed">
          <div className="text-4xl font-extrabold text-primary mb-1">
            10,000+
          </div>
          <div className="font-bold text-gray-500 uppercase text-xs tracking-widest">
            Pasien Khitan
          </div>
        </div>
        <div className="border-r-0 lg:border-r-4 border-primary/10 border-dashed">
          <div className="text-4xl font-extrabold text-primary mb-1">15+</div>
          <div className="font-bold text-gray-500 uppercase text-xs tracking-widest">
            Tahun Pengalaman
          </div>
        </div>
        <div className="border-r-0 lg:border-r-4 border-primary/10 border-dashed">
          <div className="text-4xl font-extrabold text-primary mb-1">5.0</div>
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-icons text-yellow-400 text-sm">
                star
              </span>
            ))}
          </div>
          <div className="font-bold text-gray-500 uppercase text-xs tracking-widest">
            Google Rating
          </div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-primary mb-1">24/7</div>
          <div className="font-bold text-gray-500 uppercase text-xs tracking-widest">
            Konsultasi WA
          </div>
        </div>
      </div>
    </section>
  );
}
