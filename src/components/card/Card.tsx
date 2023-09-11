import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@prisma/client'

type Props = {
    post: Post
}

const Card = ({ post }: Props) => {
    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imageContainer}>
                <Image src={post.img} fill alt="" className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{`${post.createdAt.toISOString()} -`} </span>
                    <span className={styles.category}>{post.catSlug}</span>
                </div>
                <Link href={`/posts/${post.slug}`}>
                    <h1>
                        {post.title}
                    </h1>
                </Link>

                <p className={styles.desc}>{post.desc.substring(0, 60) + '...'}</p>
                <Link href={`/posts/${post.slug}`} className={styles.link}>
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default Card