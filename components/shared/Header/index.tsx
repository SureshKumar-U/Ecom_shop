import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { UserIcon } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ModeToggle from "./mode_toggle";
import Menu from "./Menu";
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
                <Menu />
            </div>
        </header>
    </>
}

export default Header