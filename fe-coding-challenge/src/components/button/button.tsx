import React from 'react';
import styles from './button.module.css';

interface Props {
    text: string;
}

const Button = ({ text }: Props) => <button role="button" className={styles.button}>{text}</button>

export default Button;