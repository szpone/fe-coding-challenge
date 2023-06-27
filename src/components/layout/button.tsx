import React from 'react';
import styles from './layout.module.css';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => <button role="button" className={styles.button}>{text}</button>

export default Button;