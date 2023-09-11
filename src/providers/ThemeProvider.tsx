"use client"
import useThemeContext from '@/context/ThemeContext'
import React, { ReactNode, use, useEffect } from 'react'


const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme } = useThemeContext();
    const [mounted, setMounted] = React.useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        mounted &&
        <div className={theme}>{children}</div>
    )
}

export default ThemeProvider