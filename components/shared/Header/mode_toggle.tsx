"use client"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {

    const { theme, setTheme } = useTheme()
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])

    if (!mount) {
        return
    }
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="outline-none">
                    <Button  variant={"ghost"}> {theme == "light" ? (<SunIcon />): theme == "dark" ? (<MoonIcon />) : (<SunMoon />)}</Button>
                   
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        appearance
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                        onClick={() => setTheme("system")}>
                        system
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        onClick={() => setTheme("light")}
                    >
                        Light
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        onClick={() => setTheme("dark")}
                    >
                        Dark
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ModeToggle