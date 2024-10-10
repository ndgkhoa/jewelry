import Image from 'next/image'
import Link from 'next/link'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
    return (
        <div className="h-[8vh] sticky top-0 z-[1] bg-white shadow-md">
            <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
                <Link href="/" className="relative w-40 h-full">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                </Link>
                <div className="flex items-center space-x-6">
                    <SearchBox />
                    <HeartIcon size={26} cursor={'pointer'} />
                    <ShoppingCartButton />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <UserIcon size={26} cursor={'pointer'} />
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    )
}

export default Nav
