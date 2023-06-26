import React from "react";
import styles from './navbar.module.css'
import '../../../src/app/globals.css';

const Navbar = ({ children }: any) => {
    return (
    <div className={styles.navbar}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
    )
}

export default Navbar;