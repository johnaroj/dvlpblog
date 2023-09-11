import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

type Props = {}

const Featured = (props: Props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hey, dvlp dev here!</b> Discover my stories and creative ideas.</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum dicta, corrupti excepturi quis sunt aut officia minus nobis eos! Illo perspiciatis velit ullam blanditiis impedit sint reiciendis quasi obcaecati!</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured