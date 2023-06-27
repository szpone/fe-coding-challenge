import PostList from '@/components/blog/postList';
import React from 'react';
import Header from '@/components/header';
import { Post } from '@/app/data/mockPost';

interface Props {
    postList: Post[]
}

const Home = ({ postList }: Props) => {
    return (
            <>
                <Header text="Check our latest posts" />
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

export default Home