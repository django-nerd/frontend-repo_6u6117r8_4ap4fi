import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7rKc6kG2JZs7jWvM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-28">
        <div className="max-w-2xl">
          <p className="text-emerald-300/80 uppercase tracking-[0.3em] text-xs mb-4">Portofolio Konselor</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Guru Bimbingan Konseling SMK
          </h1>
          <p className="mt-6 text-emerald-100/80 text-lg">
            Menghadirkan layanan konseling yang empatik, solutif, dan berbasis perkembangan peserta didik untuk masa depan karier yang cerah.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#services" className="px-5 py-2.5 rounded-md bg-emerald-400 text-emerald-950 font-semibold hover:bg-emerald-300 transition-colors">Jelajahi Layanan</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-emerald-400/60 text-emerald-200 hover:bg-emerald-900/20 transition-colors">Hubungi Saya</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
    </section>
  );
}
