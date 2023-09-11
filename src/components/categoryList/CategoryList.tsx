import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@prisma/client'

type Props = {}


const getData = async () => {
    const res = await fetch('http:localhost:3000/api/categories', {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed')
    }
    return res.json()
}
const CategoryList = async (props: Props) => {
    const data = await getData()
    return (
        <div className={styles.container}>
            <h1>Popular Categories</h1>
            <div className={styles.categories}>
                {data.map((category: Category) => (
                    <Link key={category.id} href="/blog?cat=style" className={`${styles.category} ${styles[category.slug]}`}>
                        {category.img && <Image src={category.img} alt="" width={32} height={32} className={styles.image} />}
                        {category.title}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default CategoryList