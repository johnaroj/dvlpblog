import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
import { Post } from '@prisma/client'


const getData = async (page: number, cat: string) => {
    const res = await fetch('http://localhost:3000/api/posts?page=' + page + '&cat=' + cat, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed')
    }
    return res.json()
}

type Props = {
    page: number,
    cat?: string
}

const CardList = async ({ page, cat }: Props) => {
    const { post, hasPrev, hasNext } = await getData(page, cat);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {
                    post.map((post: Post) => (<Card key={post.id} post={post} />))
                }
            </div>
            <Pagination page={page} hasNext={hasPrev} hasPrev={hasNext} />
        </div>
    )
}

export default CardList