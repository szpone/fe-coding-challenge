import React from 'react';
import Button from '../layout/button';
import styles from '@/components/blog/blog.module.css'
import { Post } from '@/app/data/mockPost';
import { DateTime } from 'luxon';
import Image from 'next/image';

interface DetailsProps {
    post: Post
}

const PostDetails: React.FC<DetailsProps> = ({ post }) => {
    const { image, date, title, postPreview, postBody, subTitle } = post;
    return (
            <article>
                <section className={styles.previewSection}>
                <div className={styles.sectionContent}>
                    <h1>{title}</h1>
                    <p className={styles.text}>{postPreview}</p>
                    <span className={styles.date}>{DateTime.fromISO(date).toFormat('d LLL yyyy')}</span>
                </div>
                </section>
                <Image src={image} alt="No image" width={1020} height={700} style={{maxWidth: "100%", borderRadius: "10px", height: "auto", objectFit: "contain", position: "relative", margin: "0 auto", display: "block", marginBottom: "21px" }}/>
                <section className={styles.description}>
                    <div className={styles.item}>
                        <span className={styles.place}> Corn Exchange, Wintey, Oxfordshire</span>
                        <div className={styles.eventDetails}>
                        <span>Free</span>
                        <span>{DateTime.fromISO(date).toLocaleString(DateTime.TIME_24_SIMPLE)} | {DateTime.fromISO(date).toFormat('d LLL yyyy')}</span>
                        </div>
                    </div>
                <Button text="Sign up to this event" />
                </section>
                <section className={styles.sectionBody}>
                    <h2 className={styles.postTitle}>{subTitle}</h2>
                    <p className={styles.body}>{postBody}</p>
                </section>
            </article>
    )
};

export default PostDetails;