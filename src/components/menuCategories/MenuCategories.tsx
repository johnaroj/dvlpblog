import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'
type Props = {}

const MenuCategories = (props: Props) => {
    return (
        <div className={styles.categoryList}>
            <Link href="/bog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
            <Link href="/bog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
            <Link href="/bog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
            <Link href="/bog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
            <Link href="/bog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
            <Link href="/bog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
        </div>
    )
}

export default MenuCategories