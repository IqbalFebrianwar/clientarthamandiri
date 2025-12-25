import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { notFound } from "next/navigation";

const productsData: Record<string, any> = {
    "1": {
        name: "Artha Prime Family",
        price: "Mulai Rp 500rb",
        description: "Solusi perlindungan ganda yang menggabungkan asuransi jiwa dengan perencanaan pendidikan anak. Pastikan masa depan buah hati Anda tetap terjamin dalam kondisi apapun.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        specs: [
            { label: "Manfaat Meninggal", value: "Min. 100% UP" },
            { label: "Dana Pendidikan", value: "Tahapan Pasti Sekolah" },
            { label: "Fasilitas Premi", value: "Waiver (Pembebasan)" },
            { label: "Bonus Loyalitas", value: "Tahun ke-5 & ke-10" },
            { label: "Usia Anak", value: "0 - 18 Tahun" },
            { label: "Masa Asuransi", value: "Hingga Usia Mandiri" }
        ],
        benefits: [
            "Kepastian dana pendidikan untuk setiap jenjang sekolah.",
            "Proteksi finansial bagi keluarga jika terjadi resiko pada pencari nafkah.",
            "Premi tetap yang tidak berubah sepanjang masa kontrak.",
            "Hasil investasi yang optimal untuk dana masa depan."
        ]
    },
    "2": {
        name: "Artha HomeSecure Plus",
        price: "Mulai Rp 1.5jt",
        description: "Perlindungan komprehensif untuk hunian dan tempat usaha UMKM Anda. Menggabungkan proteksi properti dari resiko kebakaran/bencana dengan perlindungan jiwa pemilik.",
        image: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2070&auto=format&fit=crop",
        specs: [
            { label: "Cakupan Properti", value: "Kebakaran, Petir, Ledakan" },
            { label: "Santunan Jiwa", value: "Pemilik Aset" },
            { label: "Bencana Alam", value: "Gempa & Banjir (Opsional)" },
            { label: "Perlindungan UMKM", value: "Stok Barang & Peralatan" },
            { label: "Layanan 24/7", value: "Home Emergency Assist" },
            { label: "Proses Klaim", value: "Fast Track via Apps" }
        ],
        benefits: [
            "Mengamankan tempat tinggal sekaligus bisnis dalam satu biaya.",
            "Perlindungan jiwa yang memastikan hutang KPR teratasi jika resiko terjadi.",
            "Bantuan darurat untuk kerusakan pipa, kunci, atau listrik rumah.",
            "Penggantian biaya tempat tinggal sementara saat renovasi klaim."
        ]
    },
    "3": {
        name: "Artha AssetMax Duo",
        price: "Hubungi Kami",
        description: "Paket perlindungan eksklusif untuk aset berharga Anda. Meliputi perlindungan properti mewah dan kendaraan sekaligus dalam satu polis yang efisien.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        specs: [
            { label: "Kendaraan", value: "All Risk & Third Party" },
            { label: "Luxury Home", value: "Full Asset Integration" },
            { label: "Tj. Hukum", value: "Pihak Ketiga Komprehensif" },
            { label: "Akses Bengkel", value: "Authorized & Premium" },
            { label: "Assistance", value: "RSA (Road Side Assistance)" },
            { label: "Asuransi Seni", value: "Barang Berharga (Opsional)" }
        ],
        benefits: [
            "Efisiensi administrasi dengan satu polis untuk dua jenis aset besar.",
            "Potongan premi paket (bundling) yang lebih menguntungkan.",
            "Layanan jemput antar kendaraan untuk servis di bengkel rekanan.",
            "Proteksi terhadap tuntutan hukum dari pihak ketiga."
        ]
    }
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = productsData[id];

    if (!product) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen pb-24">
                {/* Breadcrumbs */}
                <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-midnight">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-midnight">Products</Link>
                        <span>/</span>
                        <span className="text-midnight font-bold">{product.name}</span>
                    </div>
                </div>

                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left: Product Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Product Info */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div className="space-y-4">
                                <div className="inline-block px-4 py-1 bg-midnight/5 text-midnight rounded-full text-xs font-bold uppercase tracking-widest">
                                    Detail Produk
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    {product.name}
                                </h1>
                                <p className="text-2xl font-bold text-midnight">{product.price}</p>
                            </div>

                            <p className="text-gray-500 text-lg leading-relaxed">
                                {product.description}
                            </p>

                            {/* Specifications */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-gray-900">Spesifikasi Detail</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.specs.map((spec: any, idx: number) => (
                                        <div key={idx} className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{spec.label}</span>
                                            <span className="text-gray-900 font-bold">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-gray-900">Mengapa Memilih Produk Ini?</h3>
                                <ul className="space-y-4">
                                    {product.benefits.map((benefit: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-1.5 w-5 h-5 rounded-full bg-midnight/10 flex items-center justify-center text-midnight shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                            </div>
                                            <span className="text-gray-600">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                <Link href="/contactus" className="btn bg-midnight text-white hover:bg-midnight/90 border-0 rounded-2xl h-16 px-12 text-lg font-bold shadow-xl shadow-midnight/20 transition-all text-center flex items-center justify-center">
                                    Hubungi Sales
                                </Link>
                                <button className="btn btn-outline border-2 border-midnight text-midnight hover:bg-midnight hover:text-white rounded-2xl h-16 px-12 text-lg font-bold transition-all">
                                    Unduh Brosur (PDF)
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
