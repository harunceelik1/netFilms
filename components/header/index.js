import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { BsPlaystation } from 'react-icons/bs'
import Link from "next/link"
import styles from "./styles.module.css"

function Header(){
    return <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
            <Link href='/' className={styles.logo}>
                <BsPlaystation/> NETFILMS
            </Link>
            <nav>
                <Link href=''> Movies</Link>
                <Link href=''> Series</Link>
                <Link href=''> Kids</Link>
            </nav>
        </div>
    </header>
}
export default Header