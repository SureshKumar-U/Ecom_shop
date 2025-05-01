import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { UserIcon } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const Header = () => {
    return <>
        <header className="w-full border-b">
            <div className="flex  justify-between  wrapper">
                <div>
                <Button asChild variant="ghost">
                    <Link href="/">
                        <Image src="images/logo.svg"
                            width={50}
                            height={50}
                            alt="logo.png"
                        />
                        <h3 className="hidden lg:block font-bold">Ecomshop</h3>
                    </Link>
                </Button>
                </div>
                <div className="space-x-2" >
                    <Button asChild variant="ghost" >
                        <Link href="/signin">  <UserIcon/> User
                        </Link>
                    </Button>
                    <Button asChild  >
                        <Link href="/cart">  <ShoppingCart/> Cart
                        </Link>
                    </Button>
                </div>
               
            </div>
        </header>
    </>
}

export default Header