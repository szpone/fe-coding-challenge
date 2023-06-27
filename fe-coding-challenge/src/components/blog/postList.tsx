import React from 'react';
import PostPreview from './postPreview';
import styles from '../layout/layout.module.css';
import { Post } from '@/app/data/mockPost';

interface ListProps {
    posts: Post[]
}
const PostList: React.FC<ListProps> = ({ posts }) => {
    const sortedList = [...posts].sort((a: Post, b: Post) => a.date.toMillis() - b.date.toMillis())
    return (
        <div className={styles.postList}>
            {sortedList.map((post: Post) => <PostPreview post={post} key={post.id} />)}
        </div>

    )
};

export default PostList;
