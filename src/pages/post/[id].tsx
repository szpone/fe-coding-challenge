import React from 'react';
import { GetServerSidePropsContext } from 'next';
import PostDetails from '@/components/blog/postDetails';
import { Post } from '@/app/data/mockPost';


const Post: React.FC<Post> = ({ postDetails }: any) => <PostDetails post={postDetails} />

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    const response = await fetch(`http://localhost:3000/api/postDetails?id=${id}`);
    const postDetails = await response.json();

    return {
        props: {
            postDetails
        }
    };
}

export default Post;