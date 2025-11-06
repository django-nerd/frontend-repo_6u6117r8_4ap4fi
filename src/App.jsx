import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100 font-['Inter',_'IBM_Plex_Sans',sans-serif]">
      <Navbar />
      <Hero />
      <Services />
      <Insights />
      <Contact />
      <footer className="border-t border-emerald-900/40 bg-black/80">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-emerald-300/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Portofolio BK. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-emerald-300">Beranda</a>
            <a href="#services" className="hover:text-emerald-300">Layanan</a>
            <a href="#insights" className="hover:text-emerald-300">Insight</a>
            <a href="#contact" className="hover:text-emerald-300">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
