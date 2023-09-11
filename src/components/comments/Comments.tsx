"use client";
import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Comment, User } from '@prisma/client';
import { format } from 'date-fns';
import { useState } from 'react';


const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }
    return data;

};

type Props = {
    postSlug: string
}

type CommentWithUser = Comment & { user: User }

const Comments = ({ postSlug }: Props) => {
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR('http://localhost:3000/api/comments?postpostSlug=' + postSlug, fetcher);

    const [desc, setDescr] = useState('')

    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            body: JSON.stringify({ desc, postSlug }),
        })
        mutate();
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input} onChange={e => setDescr(e.target.value)} />
                    <button className={styles.button} onSubmit={handleSubmit}>Send</button>
                </div>
            ) : (<Link href="/login">Login to write a comment</Link>)}
            <div className={styles.comments}>
                {isLoading ? (<div>Loading...</div>) : (
                    data?.map((comment: CommentWithUser) => (
                        <div className={styles.comment}>
                            <div className={styles.user}>
                                {comment.user.image && <Image className={styles.image} src={comment.user.image} alt="" width={50} height={50} />}
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{comment.user.name}</span>
                                    <span className={styles.date}>{format(comment.createdAt, 'dd.mm.yyyy')}</span>
                                </div>

                            </div>
                            <p className={styles.desc}>{comment.desc}</p>
                        </div>
                    )))}
            </div>
        </div>
    )
}

export default Comments