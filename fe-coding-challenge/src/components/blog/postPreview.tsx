import React from 'react';
import styles from './blog.module.css'
import Pill from '../pill/pill';
import Link from 'next/link';
import { Post } from '@/app/data/mockPost';
import Image from 'next/image';
import { DateTime } from 'luxon';

interface Props {
    post: Post
}

const PostPreview = ({ post }: Props) => {
    const { image, title, category, author, date, postPreview, id } = post;
    return (
        <Link className={styles.link} href={`post/${id}`}>
        <article className={styles.preview}>
            <Image className={styles.blogImg} src={image} alt="No image" width={334} height={229}/>
            <h2 className={styles.title}>{title}</h2>
            <section className={styles.pillContainer}> 
                <Pill text={category} />
                <Pill text={author}/>
                <Pill text={DateTime.fromISO(date).toFormat('d LLL yyyy')} />
            </section>
            <p className={styles.text}>
                {postPreview}
            </p>
        </article>
        </Link>
    )
};

export default PostPreview;