import React from 'react';
import styles from './layout.module.css';
import Head from 'next/head';

const Main = ({ children }: any) => {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>

        <main className={styles.main}>
            {children}
        </main>
        </>

    )
}

export default Main;