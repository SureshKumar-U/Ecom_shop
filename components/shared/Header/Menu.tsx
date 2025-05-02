import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ModeToggle from "./mode_toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserIcon, ShoppingCart } from "lucide-react"
import { EllipsisVertical } from 'lucide-react';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex gap-1">
      <Button asChild variant="ghost" >
        <ModeToggle />
      </Button>
      <Button asChild variant="ghost" >
        <Link href="/signin">  <UserIcon /> User
        </Link>
      </Button>
      <Button asChild  >
        <Link href="/cart">  <ShoppingCart /> Cart
        </Link>
      </Button>
      </nav>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle"><EllipsisVertical/></SheetTrigger>
          <SheetContent className="flex flex-col items-start">
          <SheetTitle className="m-2">Menu</SheetTitle>
           <ModeToggle/>
          <Button asChild  variant={'ghost'}><Link href="/signin"><UserIcon/>Sign in</Link></Button>
          <Button asChild variant={'ghost'}><Link href="/cart"><ShoppingCart/>Cart</Link></Button>
          </SheetContent>
        </Sheet>
         
      </nav>
   

    </div>
  )
}

export default Menu