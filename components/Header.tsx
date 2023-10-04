import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="w-full fixed top-0 left-0">    
            <div className="flex justify-center h-16 bg-sky-300 mx-auto drop-shadow-xl">
                {/* Links */}

                {/* Logo */}
                <div className='flex-none my-auto'>
                    <Link href='/recipes'>
                        <Image 
                            src='/logo.svg'
                            alt='Our Website Logo'
                            height={108}
                            width={216}
                        />
                    </Link>
                </div>

                {/* Search */}
            </div>
        </div>
    )
}

export default Header;