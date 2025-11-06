export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Pemahaman Lebih tentang Konseling bagi Anak SMK</h2>
        <p className="text-emerald-200/80 mt-3 max-w-3xl">
          Konseling di SMK memiliki karakteristik unik: peserta didik berada pada fase transisi menuju dunia kerja. Pendekatan harus kontekstual, menggabungkan perkembangan psikologis remaja dengan kompetensi vokasional. Fokus utama meliputi regulasi emosi, pembentukan identitas karier, dan keterampilan sosial profesional.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-6">
            <h3 className="text-white font-semibold">1. Kerangka Perkembangan</h3>
            <ul className="list-disc list-inside text-emerald-200/80 text-sm mt-2 space-y-1">
              <li>Remaja akhir: kebutuhan otonomi, relasi sehat, dan arah masa depan.</li>
              <li>Karier: eksplorasi minat-bakat, nilai kerja, dan kecocokan jurusan.</li>
              <li>Pencegahan risiko: bullying, perilaku adiktif, dan absensi.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-6">
            <h3 className="text-white font-semibold">2. Metode & Teknik</h3>
            <ul className="list-disc list-inside text-emerald-200/80 text-sm mt-2 space-y-1">
              <li>Solution Focused Brief Counseling untuk isu spesifik dan terukur.</li>
              <li>Motivational Interviewing untuk perubahan perilaku adaptif.</li>
              <li>Career counseling berbasis asesmen dan pengalaman magang.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-6">
            <h3 className="text-white font-semibold">3. Kolaborasi Ekosistem</h3>
            <ul className="list-disc list-inside text-emerald-200/80 text-sm mt-2 space-y-1">
              <li>Sinergi dengan wali kelas, DU/DI, dan orang tua.</li>
              <li>Program sekolah: literasi karier, pelatihan soft skills, dan etika kerja.</li>
              <li>Rujukan ahli bila diperlukan (psikolog/psikiater).</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-emerald-900/40 bg-gradient-to-r from-emerald-900/40 to-emerald-700/30 p-6">
          <p className="text-emerald-100">
            Prinsip utama: konseling bersifat rahasia, berpusat pada peserta didik, dan menguatkan kemandirian. Target akhirnya adalah kesiapan karier dan kesejahteraan psikologis.
          </p>
        </div>
      </div>
    </section>
  );
}
