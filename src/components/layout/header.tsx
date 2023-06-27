import React from 'react';
import styles from './layout.module.css'
import '@/app/globals.css'
import Link from 'next/link';

interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <Link href="/">
            <header className={styles.header}>
                <div className={styles.container}>
                    {children}
                </div>
            </header>
        </Link>
    )
}

export default Header;