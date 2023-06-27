import React from 'react';
import styles from './layout.module.css';
import Head from 'next/head';

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
};

export default Main;