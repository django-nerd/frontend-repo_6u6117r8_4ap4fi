import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-950/20 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Mari Terhubung</h2>
            <p className="text-emerald-200/80 mt-3">Tersedia untuk kolaborasi sekolah, pendampingan kelas, seminar, dan sesi konseling privat sesuai kebutuhan.</p>
            <div className="mt-6 space-y-3 text-emerald-200/90 text-sm">
              <p className="flex items-center gap-2"><Mail size={18}/> email@saya.com</p>
              <p className="flex items-center gap-2"><Phone size={18}/> 08xx-xxxx-xxxx</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Kota Anda, Indonesia</p>
            </div>
          </div>
          <form className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-6 space-y-4">
            <div>
              <label className="block text-emerald-200 text-sm mb-1">Nama</label>
              <input className="w-full rounded-md bg-black/60 border border-emerald-900/40 text-emerald-100 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Nama lengkap"/>
            </div>
            <div>
              <label className="block text-emerald-200 text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-black/60 border border-emerald-900/40 text-emerald-100 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="email@domain.com"/>
            </div>
            <div>
              <label className="block text-emerald-200 text-sm mb-1">Pesan</label>
              <textarea rows={4} className="w-full rounded-md bg-black/60 border border-emerald-900/40 text-emerald-100 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ceritakan kebutuhan Anda"></textarea>
            </div>
            <button type="button" className="w-full rounded-md bg-emerald-400 text-emerald-950 font-semibold py-2 hover:bg-emerald-300">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}
