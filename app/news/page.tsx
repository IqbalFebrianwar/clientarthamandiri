import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const newsItems = [
    {
        id: 1,
        title: "Artha Mandiri Gelar Global Synergy Summit 2024",
        date: "24 Desember 2025",
        excerpt: "Pertemuan strategis para pemimpin industri keamanan global untuk membahas inovasi perlindungan aset di masa depan.",
        image: "/images/news1.png",
        category: "Events"
    },
    {
        id: 2,
        title: "Peningkatan Keamanan Digital: Menghadapi Ancaman Siber 2025",
        date: "20 Desember 2025",
        excerpt: "Artha Mandiri meluncurkan protokol baru untuk melindungi data klien dari serangan siber yang semakin canggih.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        category: "Security"
    },
    {
        id: 3,
        title: "Ekspansi Layanan: Keamanan Perumahan di Seluruh Indonesia",
        date: "15 Desember 2025",
        excerpt: "Kami kini hadir di 38 provinsi untuk memberikan perlindungan maksimal bagi keluarga dan hunian Anda.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        category: "Corporate"
    },
    {
        id: 4,
        title: "Kemitraan Strategis: Memperkuat Infrastruktur Nasional",
        date: "10 Desember 2025",
        excerpt: "Kolaborasi baru dengan pemerintah dalam menjaga objek vital nasional melalui sistem monitoring terintegrasi.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        category: "Partnership"
    }
];

export default function News() {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 min-h-screen pb-24">
                {/* News Hero */}
                <section className="bg-midnight py-24 px-4 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Berita Terbaru</h1>
                        <p className="text-white/60 text-xl max-w-2xl">
                            Ikuti perkembangan terbaru mengenai inovasi, acara, dan pengumuman resmi dari Artha Mandiri Group.
                        </p>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {newsItems.map((item) => (
                            <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 bg-midnight text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 space-y-4">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                        {item.date}
                                    </div>
                                    <h2 className="text-2xl font-black text-gray-900 group-hover:text-midnight transition-colors leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="pt-4">
                                        <button className="flex items-center gap-2 text-midnight font-bold group/btn">
                                            Baca Selengkapnya
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
