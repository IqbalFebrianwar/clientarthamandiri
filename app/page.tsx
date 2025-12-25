import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-[70vh] md:h-[85vh] flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dys9rpgr3/image/upload/v1766644545/pexels-rdne-8293764_larnem.jpg"
            alt="Background"
            fill
            className="object-cover object-top animate-subtle-zoom"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-midnight/90 via-midnight/60 to-midnight/40 z-1" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent to-midnight/50 z-1" />

        <div className="relative z-10 max-w-4xl w-full text-center space-y-8 text-white animate-fade-up">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full" />
            <Image
              src="https://res.cloudinary.com/dys9rpgr3/image/upload/v1766645661/Screenshot_2025-12-25_134931-removebg-preview_prguxt.png"
              alt="Logo"
              width={550}
              height={450}
              className="mx-auto drop-shadow-2xl relative"
            />
          </div>
          <p className="text-xl md:text-2xl font-medium tracking-[0.2em] opacity-90 uppercase">
            MENGAMANKAN HARI INI, MENGUATKAN MASA DEPAN.
          </p>
          <div className="flex gap-6 justify-center pt-4">
            <button className="group relative overflow-hidden btn bg-white text-midnight btn-lg px-12 border-0 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl">
              <Link href="/contactus" className="relative z-10 font-black uppercase tracking-widest">Klik disini</Link>
              <div className="absolute inset-0 bg-linear-to-r from-white via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block opacity-50">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Scroll</span>
            <div className="w-1px h-12 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.png"
                  alt="Tentang Artha Mandiri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-5 md:right-8 bg-midnight text-white p-6 rounded-2xl shadow-2xl z-20 min-w-[200px] border border-white/10">
                <p className="text-4xl font-extrabold mb-1">300k+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Member kita</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-midnight/5 text-midnight rounded-full text-xs font-bold uppercase tracking-widest">
                Tentang Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
                Welcome To Our  <br />
                <span className="text-midnight">Insurance Company</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Artha Mandiri Insurance adalah perusahaan asuransi yang berkomitmen menyediakan solusi perlindungan finansial yang terpercaya dan berorientasi pada kebutuhan pelanggan. Kami menghadirkan rangkaian produk asuransi yang fleksibel, kompetitif, dan dirancang untuk memberikan keamanan jangka panjang bagi individu maupun perusahaan.

              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-midnight">15+</p>
                  <p className="text-gray-500 text-sm">Tahun Pengalaman</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-midnight">99%</p>
                  <p className="text-gray-500 text-sm">Tingkat Kepuasan</p>
                </div>
              </div>
              <div className="pt-4">
                <button className="btn bg-midnight text-white hover:bg-midnight/90 border-0 rounded-full px-10 h-14 text-lg">
                  Pelajari Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Layanan Unggulan Kami</h2>
            <p className="text-gray-500">Kami menyediakan berbagai layanan perlindungan yang dirancang khusus untuk memenuhi kebutuhan spesifik Anda, mulai dari aset hingga kesejahteraan diri.</p>
            <div className="w-24 h-1.5 bg-midnight mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-midnight/10 text-midnight rounded-full flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Artha EduPlan</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Perencanaan pendidikan jangka panjang dengan kepastian dana.</p>
            </div>

            <div className="bg-white p-10 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-midnight/10 text-midnight rounded-full flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Artha Prima</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Perlindungan kesehatan lengkap dengan jaringan rumah sakit luas.</p>
            </div>

            <div className="bg-white p-10 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-midnight/10 text-midnight rounded-full flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Artha AutoSecure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Proteksi komprehensif untuk kendaraan pribadi dan operasional.</p>
            </div>

            <div className="bg-white p-10 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-midnight/10 text-midnight rounded-full flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Artha PropertyGuard</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Perlindungan untuk rumah, gedung usaha, dan aset fisik dari risiko kebakaran, bencana alam, pencurian, serta kerusakan lainnya.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
