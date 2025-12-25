import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 min-h-screen">
                <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 bg-midnight/5 text-midnight rounded-full text-xs font-bold uppercase tracking-widest">
                                Hubungi Kami
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                                Kami Siap <br />
                                <span className="text-midnight">Mendengarkan Anda</span>
                            </h1>
                            <p className="text-gray-500 text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Punya pertanyaan tentang layanan kami? Tim kami tersedia 24/7 untuk memastikan setiap keraguan Anda terjawab dengan tuntas.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center lg:justify-start">
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                                    <div className="w-14 h-14 bg-midnight/10 rounded-2xl flex items-center justify-center text-midnight shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Telepon</div>
                                        <div className="text-gray-900 font-black text-sm">+123-456-789-000</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                                    <div className="w-14 h-14 bg-midnight/10 rounded-2xl flex items-center justify-center text-midnight shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Email</div>
                                        <div className="text-gray-900 font-black text-sm">arthamandiri@gmail.com</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                                    <div className="w-14 h-14 bg-midnight/10 rounded-2xl flex items-center justify-center text-midnight shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Website</div>
                                        <div className="text-gray-900 font-black text-sm">www.arthamandiri.com</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                                    <div className="w-14 h-14 bg-midnight/10 rounded-2xl flex items-center justify-center text-midnight shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Lokasi</div>
                                        <div className="text-gray-900 font-black text-sm leading-tight">Mangga Dua Blok 12 Jakarta Pusat, Indonesia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/contact.png"
                                alt="Contact Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3.5rem] shadow-xl">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Kirim Pesan</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Nama Lengkap</label>
                                    <input type="text" placeholder="Masukkan nama" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-midnight transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-2">Alamat Email</label>
                                    <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-midnight transition-all outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-2">Subjek</label>
                                <select className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-midnight transition-all outline-none appearance-none">
                                    <option>Layanan Keamanan</option>
                                    <option>Proteksi Aset</option>
                                    <option>Kemitraan</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-2">Pesan Anda</label>
                                <textarea rows={5} placeholder="Bagaimana kami bisa membantu Anda?" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-midnight transition-all outline-none resize-none"></textarea>
                            </div>
                            <button className="w-full btn bg-midnight text-white hover:bg-midnight/90 border-0 rounded-2xl h-16 text-lg font-bold shadow-lg shadow-midnight/20 transition-all">
                                Kirim Pesan Sekarang
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}