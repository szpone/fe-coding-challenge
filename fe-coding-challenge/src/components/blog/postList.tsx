import React from 'react';
import PostPreview from './postPreview';
import styles from '../layout/layout.module.css';
import { Post } from '@/app/data/mockPost';

interface ListProps {
    posts: Post[]
}
const PostList: React.FC<ListProps> = ({ posts }) => {
    return (
        <div className={styles.postList}>
            {posts.map((post: Post) => <PostPreview post={post} key={post.id} />)}
        </div>

    )
}

export default PostList;
