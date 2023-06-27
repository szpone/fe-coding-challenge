import PostList from '@/components/blog/postList';
import React from 'react';
import { Post } from '@/app/data/mockPost';

interface HomeProps {
    postList: Post[];
}

const Home: React.FC<HomeProps> = ({ postList }) => {
    return (
            <>
                <h1>Check our latest posts</h1>
                <PostList posts={postList}/>
            </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/postList');
    const postList = await response.json();
    return {
        props: {
            postList
        }
    }
}

export default Home;