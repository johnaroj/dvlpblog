import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt='facebook' width={24} height={24} />
                <Image src="/instagram.png" alt='instagram' width={24} height={24} />
                <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
                <Image src="/youtube.png" alt='youtube' width={24} height={24} />
            </div>
            <div className={styles.logo}>dvlpblog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link className={styles.link} href="/">Contact</Link>
                <Link className={styles.link} href="/">About</Link>
                <Link className={styles.link} href="/">About</Link>
                <AuthLinks />
            </div>

        </div>
    )
}

export default Navbar