import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-midnight text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="https://res.cloudinary.com/dys9rpgr3/image/upload/v1766642063/WhatsApp_Image_2025-12-24_at_22.34.30_edvzat.jpg"
                                alt="Artha Mandiri Logo"
                                width={80}
                                height={20}
                                className="brightness-125"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            MENGAMANKAN HARI INI, MENGUATKAN MASA DEPAN. Solusi perlindungan terpercaya untuk aset, jiwa, dan masa depan Anda.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Navigasi</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">Tentang Kami</Link></li>
                            <li><Link href="/ownerprofile" className="text-white/60 hover:text-white transition-colors text-sm">Profil Pemilik</Link></li>
                            <li><Link href="/companyprofile" className="text-white/60 hover:text-white transition-colors text-sm">Profil Perusahaan</Link></li>
                            <li><Link href="/news" className="text-white/60 hover:text-white transition-colors text-sm">Berita Utama</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Layanan Kami</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Artha EduPlan</Link></li>
                            <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Artha Prima</Link></li>
                            <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Artha AutoSecure</Link></li>
                            <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Artha PropertyGuard</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-bold">Kontak Kami</h3>
                        <div className="flex gap-4 items-start">
                            <div className="text-white/40"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                            <p className="text-sm text-white/60">+123-456-789-000</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="text-white/40"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></div>
                            <p className="text-sm text-white/60">arthamandiri@gmail.com</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="text-white/40"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                            <p className="text-sm text-white/60">Mangga Dua Blok 12 Jakarta Pusat, Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-white/40">© 2025 Artha Mandiri Group. All rights reserved.</p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
