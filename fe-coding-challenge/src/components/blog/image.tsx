import React from "react";
import Image from "next/image";
import PostImage from "../../../public/assets/images/blog-post-two.jpg"

import styles from './blog.module.css'

const BlogImage = () => {
    return (
        <div className={styles.imgContainer}>
        <Image className={styles.blogImg} src={PostImage} alt="Blog image one" />
        </div>
    )
}

export default BlogImage;