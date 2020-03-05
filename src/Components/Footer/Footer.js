import React from "react";
import styles from './Footer.module.css';

const Footer = ({count}) => (
    <div className={styles.wrap}>
        <span className={styles.text}>Left TO DO  : {count}</span>
    </div>
);

export default Footer;