"use client"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { useEffect, useState } from "react";


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
                <DropdownMenuTrigger className="outline-none">
                    {theme == "light" ? <SunIcon /> : (theme == "dark" ? <MoonIcon /> : <SunMoon />)}
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