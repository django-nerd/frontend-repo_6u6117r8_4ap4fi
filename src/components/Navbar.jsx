import { User, Mail, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-emerald-900/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 ring-1 ring-emerald-300/30 flex items-center justify-center text-white font-bold">BK</div>
          <span className="text-emerald-300 font-semibold tracking-wide">Bimbingan Konseling</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1"><User size={16}/>Tentang</a>
          <a href="#services" className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-1"><BookOpen size={16}/>Layanan</a>
          <a href="#insights" className="text-emerald-200/80 hover:text-emerald-300 transition-colors">Pemahaman BK SMK</a>
          <a href="#contact" className="text-emerald-900 bg-emerald-300 hover:bg-emerald-200 transition-colors rounded-md px-3 py-1.5 font-medium flex items-center gap-2"><Mail size={16}/>Kontak</a>
        </nav>
      </div>
    </header>
  );
}
