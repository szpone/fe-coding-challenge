import React from 'react';
import styles from './layout.module.css';

interface PillProps {
    text: string;
}

const Pill: React.FC<PillProps> = ({ text }) => <div className={styles.pill}>{text}</div>

export default Pill;