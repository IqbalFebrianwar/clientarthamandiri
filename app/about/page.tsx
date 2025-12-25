import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/vision.png"
                        alt="About Hero"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-midnight/80" />
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-black mb-4">Tentang Kami</h1>
                        <p className="text-xl opacity-80 max-w-2xl mx-auto px-4">
                            Mengenal lebih dalam dedikasi kami dalam mengamankan masa depan Anda.
                        </p>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-midnight/5 text-midnight rounded-full text-xs font-bold uppercase tracking-widest">
                                Tentang Perusahaan
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                Artha Mandiri Insurance
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Artha Mandiri Insurance adalah perusahaan asuransi yang berkomitmen menyediakan solusi perlindungan finansial yang terpercaya dan berorientasi pada kebutuhan pelanggan. Kami menghadirkan rangkaian produk asuransi yang fleksibel, kompetitif, dan dirancang untuk memberikan keamanan jangka panjang bagi individu maupun perusahaan.

                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about.png"
                                alt="Office image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Visi & Misi</h2>
                        <div className="w-24 h-1.5 bg-midnight mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Vision Card */}
                        <div className="bg-midnight text-white p-12 rounded-[3rem] shadow-2xl flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest">Visi Kami</h3>
                            <p className="text-xl italic opacity-90 leading-relaxed">
                                "Menjadi perusahaan asuransi yang unggul dan terpercaya dalam menyediakan solusi perlindungan finansial yang inovatif, mudah diakses, serta memberikan nilai jangka panjang bagi masyarakat."
                            </p>
                        </div>

                        {/* Missions List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Misi 01", desc: "Menyediakan produk asuransi inovatif dan mudah diakses.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg> },
                                { title: "Misi 02", desc: "Memberikan pelayanan yang responsif, akurat, dan profesional.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
                                { title: "Misi 03", desc: "Meningkatkan kepercayaan melalui transparansi dan edukasi finansial.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
                                { title: "Misi 04", desc: "Mendukung mitra dalam memperluas jangkauan layanan perlindungan masyarakat.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg> }
                            ].map((m, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                    <div className="text-midnight mb-4 group-hover:scale-110 transition-transform">
                                        {m.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h4>
                                    <p className="text-gray-500 text-sm">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
