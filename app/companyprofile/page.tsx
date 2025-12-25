import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CompanyProfile() {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen">
                <section className="relative h-[50vh] flex items-end pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <Image
                        src="/images/company.png"
                        alt="Company Building"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/60 to-transparent" />
                    <div className="relative z-10 max-w-7xl mx-auto w-full">
                        <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Profil Perusahaan
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            Artha Mandiri <br />
                            <span className="text-white/70">Group</span>
                        </h1>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-4xl font-black text-gray-900 mb-6">Filosofi <br />Perusahaan</h2>
                            <div className="w-20 h-2 bg-midnight rounded-full mb-8"></div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Di Artha Mandiri, kami percaya bahwa fondasi dari setiap hubungan yang sukses adalah kepercayaan yang tak tergoyahkan.
                            </p>
                        </div>

                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Kualitas Premium", desc: "Hanya memberikan solusi terbaik dengan standar internasional.", icon: "💎" },
                                { title: "Amanah", desc: "Menjaga integritas dalam setiap transaksi dan janji layanan.", icon: "🤝" },
                                { title: "Responsif", desc: "Layanan 24/7 yang siap sigap membantu nasabah kapan saja.", icon: "⚡" },
                                { title: "Berkelanjutan", desc: "Berfokus pada keamanan jangka panjang lintas generasi.", icon: "🌳" }
                            ].map((value, idx) => (
                                <div key={idx} className="p-8 rounded-4xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-500">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-midnight py-24 px-4 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <h2 className="text-4xl font-black text-white mb-16">Ekosistem Keamanan Terintegrasi</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                            <div>
                                <div className="text-5xl font-black text-white mb-2">240+</div>
                                <div className="text-white/60 font-medium tracking-widest uppercase text-xs">Kantor Cabang</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-white mb-2">15k+</div>
                                <div className="text-white/60 font-medium tracking-widest uppercase text-xs">Tenaga Ahli</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-white mb-2">1M+</div>
                                <div className="text-white/60 font-medium tracking-widest uppercase text-xs">Klaim Sukses</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black text-white mb-2">34</div>
                                <div className="text-white/60 font-medium tracking-widest uppercase text-xs">Provinsi Terjangkau</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
