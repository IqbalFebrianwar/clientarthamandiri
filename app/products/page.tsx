import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const products = [
    {
        id: 1,
        name: "Artha Prime Family",
        price: "Mulai Rp 500rb",
        description: "Solusi perlindungan ganda yang menggabungkan asuransi jiwa dengan perencanaan pendidikan anak. Pastikan masa depan buah hati Anda tetap terjamin dalam kondisi apapun.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        features: ["Dana Pendidikan Terjamin", "Proteksi Jiwa Orang Tua", "Manfaat Tahapan Pasti", "Pembebasan Premi"]
    },
    {
        id: 2,
        name: "Artha HomeSecure Plus",
        price: "Mulai Rp 1.5jt",
        description: "Perlindungan komprehensif untuk hunian dan tempat usaha UMKM Anda. Menggabungkan proteksi properti dari resiko kebakaran/bencana dengan perlindungan jiwa pemilik.",
        image: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2070&auto=format&fit=crop",
        features: ["Proteksi Aset Properti", "Asuransi Jiwa Pemilik", "Kompensasi Gangguan Usaha", "Layanan Darurat 24 Jam"]
    },
    {
        id: 3,
        name: "Artha AssetMax Duo",
        price: "Hubungi Kami",
        description: "Paket perlindungan eksklusif untuk aset berharga Anda. Meliputi perlindungan properti mewah dan kendaraan sekaligus dalam satu polis yang efisien.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        features: ["All-Risk Car Cover", "Proteksi Hunian Mewah", "Tanggung Jawab Hukum", "Akomodasi Darurat"]
    }
];

export default function Products() {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen pb-24">
                {/* Product Hero */}
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-midnight">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            alt="Products Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">Layanan Unggulan</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Solusi perlindungan profesional yang dirancang khusus untuk setiap kebutuhan Anda.
                        </p>
                    </div>
                </section>

                {/* Product List */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
                    {products.map((product, index) => (
                        <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            {/* Product Image Wrapper */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-midnight/5 rounded-[3rem] blur-2xl group-hover:bg-midnight/10 transition-all duration-500"></div>
                                <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                                        <span className="text-midnight font-black text-xl">{product.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                        {product.name}
                                    </h2>
                                    <div className="w-20 h-2 bg-midnight rounded-full"></div>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                            <div className="w-8 h-8 rounded-full bg-midnight/10 flex items-center justify-center text-midnight">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                            </div>
                                            <span className="font-bold text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-8 flex gap-4">
                                    <button className="btn bg-midnight text-white hover:bg-midnight/90 border-0 rounded-2xl h-16 px-10 text-lg font-bold shadow-xl shadow-midnight/20 transition-all flex-1 md:flex-none">
                                        Pesan Sekarang
                                    </button>
                                    <Link href={`/products/${product.id}`} className="btn btn-outline border-2 border-midnight text-midnight hover:bg-midnight hover:text-white rounded-2xl h-16 px-10 text-lg font-bold transition-all flex-1 md:flex-none flex items-center justify-center">
                                        Detail Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
