import React from 'react';
import Header from '@/components/header';
import styles from '../../components/blog/blog.module.css';
import BlogImage from '@/components/blog/image';
import Button from '@/components/button/button';
import { GetServerSidePropsContext } from 'next';
import PostDetails from '@/components/blog/postDetails';


const Post = ({ postDetails }: any) => {

    return (
        <PostDetails post={postDetails} />
    )


    
};

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