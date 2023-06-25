import React from "react";
import styles from './header.module.css'
import '../../../src/app/globals.css';

const Header = ({ children }: any) => {
    return (
    <header className={styles.header}>
        <div className={styles.container}>
            {children}
        </div>
    </header>
    )
}

export default Header;