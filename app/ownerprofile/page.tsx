import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function OwnerProfile() {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen">
                <section className="bg-midnight py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Profil Pemilik</h1>
                        <div className="w-20 h-1bg-white/30 mx-auto rounded-full"></div>
                    </div>
                </section>
                \
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="w-full lg:w-5/12 sticky top-32">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-midnight/5 rounded-[3rem] blur-2xl group-hover:bg-midnight/10 transition-all duration-500"></div>
                                <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <Image
                                        src="/images/owner.png"
                                        alt="Owner Profile"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 p-8 bg-linear-to-t from-midnight/90 to-transparent text-white">
                                        <h2 className="text-3xl font-black">Rais Iqbal Sukamto</h2>
                                        <p className="opacity-80 font-medium">Founder & CEO Artha Mandiri</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12 space-y-12">
                            <div>
                                <h3 className="text-3xl font-black text-gray-900 mb-6">Dedikasi untuk Keamanan Bangsa</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Terinspirasi oleh visi untuk menciptakan Indonesia yang lebih aman dan terlindungi secara finansial, Bapak Aditya Pratama mendirikan Artha Mandiri pada tahun 2010. Dengan latar belakang pendidikan bisnis dari universitas ternama dan pengalaman lebih dari 20 tahun di industri asuransi dan keamanan, beliau telah membawa perusahaan ini dari sebuah startup lokal menjadi raksasa nasional yang disegani.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    "Bagi saya, Artha Mandiri bukanlah sekadar bisnis. Ini adalah amanah untuk menjaga impian dan masa depan jutaan orang. Kami tidak hanya menjual polis atau sistem keamanan; kami memberikan harapan dan kepastian."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-gray-50 rounded-4xl border border-gray-100">
                                    <div className="text-midnight font-bold text-lg mb-2">Pendidikan</div>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>• MBA, Stanford University</li>
                                        <li>• S1 Ekonomi, Universitas Indonesia</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-4xl border border-gray-100">
                                    <div className="text-midnight font-bold text-lg mb-2">Penghargaan</div>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>• Top CEO of the Year 2023</li>
                                        <li>• Insurance Pioneer Award</li>
                                    </ul>
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-midnight pl-8 py-4 italic text-2xl text-gray-800 font-medium leading-relaxed">
                                "Keamanan sejati lahir dari perencanaan yang matang dan eksekusi yang tak kenal lelah terhadap standar kualitas."
                            </blockquote>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
