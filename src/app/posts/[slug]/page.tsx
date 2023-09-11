import React from 'react'
import styles from './singlePage.module.css';
import Image from 'next/image';
import Menu from '@/components/menu/Menu';
import Comments from '@/components/comments/Comments';
import { Post, User } from '@prisma/client';
import { format } from 'date-fns'
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

type PostwithUser = Post & { user: User }
const getData = async (slug: string) => {
    const res = await fetch('http://localhost:3000/api/posts/' + slug, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed')
    }
    return res.json()
}


const SinglePage = async ({ params }) => {
    const { slug } = params

    const data: PostwithUser = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user.image && <div className={styles.userImageContainer}>
                            <Image src={data?.user.image} alt="" fill className={styles.avatar} />
                        </div>}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>{data?.createdAt ? format(new Date(data?.createdAt), 'dd.mm.yyyy') : ''}</span>
                        </div>
                    </div>
                </div>
                {data?.img && <div className={styles.imageContainer}>
                    <Image src={data.img} alt="" fill className={styles.image} />
                </div>}
            </div>

            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(data?.desc) }} />

                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage