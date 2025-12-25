import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar bg-midnight text-white shadow-sm px-4 md:px-40 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-midnight text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/ownerprofile">Owner Profile</Link></li>
                        <li><Link href="/companyprofile">Company Profile</Link></li>
                        <li><Link href="/news">News</Link></li>
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2 bg-midnight text-white w-40 z-1">
                                    <li><Link href="/products">All Product</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="https://res.cloudinary.com/dys9rpgr3/image/upload/v1766642063/WhatsApp_Image_2025-12-24_at_22.34.30_edvzat.jpg" alt="Logo" width={60} height={10} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-white">
                    <li><Link href="/about" className="hover:text-white/80">About</Link></li>
                    <li><Link href="/ownerprofile" className="hover:text-white/80">Owner Profile</Link></li>
                    <li><Link href="/companyprofile" className="hover:text-white/80">Company Profile</Link></li>
                    <li><Link href="/news" className="hover:text-white/80">News</Link></li>
                    <li>
                        <details>
                            <summary className="hover:text-white/80">Product</summary>
                            <ul className="p-2 bg-midnight text-white w-48 rounded-box shadow-xl border border-white/10 mt-2">
                                <li><Link href="/products" className="hover:bg-white/10 py-3">All Product</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/contactus" className="btn bg-white text-midnight hover:bg-white/90 border-0 rounded-full px-6 shadow-none font-bold">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default Navbar
