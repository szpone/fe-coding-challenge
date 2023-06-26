import React from "react";
import styles from './pill.module.css'

const Pill = ({ text }: any) => {
    return (
        <div className={styles.pill}>{text}</div>
    )
}

export default Pill;