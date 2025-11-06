import { Compass, Shield, MessageSquare, Target } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Konseling Pribadi",
    desc: "Menangani isu emosi, motivasi, kepercayaan diri, dan manajemen stres remaja SMK. Pendekatan empatik dan berfokus solusi.",
  },
  {
    icon: Shield,
    title: "Konseling Akademik",
    desc: "Strategi belajar, perencanaan studi, dan dukungan adaptasi di lingkungan vokasi.",
  },
  {
    icon: Target,
    title: "Karier & Dunia Kerja",
    desc: "Asesmen minat-bakat, eksplorasi jurusan, magang, CV, etika kerja, dan persiapan interview.",
  },
  {
    icon: MessageSquare,
    title: "Mediasi & Kolaborasi",
    desc: "Kolaborasi dengan wali kelas, orang tua, dan DU/DI untuk intervensi yang menyeluruh.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-black to-emerald-950/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Utama</h2>
        <p className="text-emerald-200/80 mt-2 max-w-2xl">Fokus pada perkembangan pribadi, akademik, dan karier peserta didik SMK dengan pendekatan integratif dan kontekstual.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-5 hover:border-emerald-500/50 transition-colors">
              <div className="h-10 w-10 rounded-md bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-4">
                <it.icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-emerald-200/80 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
