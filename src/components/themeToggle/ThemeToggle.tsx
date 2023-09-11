"use client";
import React from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import useThemeContext from '@/context/ThemeContext'

type Props = {}

const ThemeToggle = (props: Props) => {
    const { toggle, theme } = useThemeContext();
    return (

        <div className={styles.container} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }} onClick={toggle}>
            <Image src="/moon.png" width={14} height={14} alt="moon" />
            <div className={styles.ball} style={theme === "dark" ? { left: 1, backgroundColor: "#0f172a" } : { left: '23px', backgroundColor: 'white' }}></div>
            <Image src="/sun.png" width={14} height={14} alt="moon" />
        </div>
    )
}

export default ThemeToggle