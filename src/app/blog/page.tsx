import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { useSearchParams } from 'next/navigation'

type Props = {
    searchParams: {
        page: string,
        cat: string
    }
}

const BlogPage = ({ searchParams }: Props) => {
    const page = parseInt(searchParams.page) || 1
    const { cat } = searchParams
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage