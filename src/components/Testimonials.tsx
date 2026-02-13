import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">Apa Kata Para Orang Tua?</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Testi 1 */}
          <div className="pt-8">
            <div className="speech-bubble p-8 shadow-xl border-4 border-primary/5 mb-8">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
              <p className="text-gray-600 italic">&quot;Anak saya awalnya nangis ketakutan, tapi pas di dalam malah asik main game. Pulang-pulang langsung bisa jalan dan pakai celana. Rekomen banget!&quot;</p>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden relative">
                <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Bunda Shinta" fill className="object-cover" />
              </div>
              <div>
                <p className="font-extrabold">Bunda Shinta</p>
                <p className="text-xs text-gray-400">Pekanbaru Kota</p>
              </div>
            </div>
          </div>
          {/* Testi 2 */}
          <div className="pt-8">
            <div className="speech-bubble p-8 shadow-xl border-4 border-secondary/5 mb-8">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
              <p className="text-gray-600 italic">&quot;Metode Stapler-nya rapi banget hasilnya. Dokternya sabar banget ngejelasin prosesnya ke anak. Gak nyesel jauh-jauh kesini.&quot;</p>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full border-2 border-secondary overflow-hidden relative">
                <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ayah Heru" fill className="object-cover" />
              </div>
              <div>
                <p className="font-extrabold">Ayah Heru</p>
                <p className="text-xs text-gray-400">Panam</p>
              </div>
            </div>
          </div>
          {/* Testi 3 */}
          <div className="pt-8">
            <div className="speech-bubble p-8 shadow-xl border-4 border-accent/5 mb-8">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
              <p className="text-gray-600 italic">&quot;Tempatnya bersih dan wangi, gak kayak klinik biasanya. Anak saya seneng dapet hadiah setelah khitan. Terima kasih Dokter Khitan!&quot;</p>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent overflow-hidden relative">
                <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="Mama Dina" fill className="object-cover" />
              </div>
              <div>
                <p className="font-extrabold">Mama Dina</p>
                <p className="text-xs text-gray-400">Rumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
