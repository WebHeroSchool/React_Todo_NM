import React from "react";
import styles from './Footer.module.css';

const Footer = ({itemsTodo, itemsDone}) => (
    <div className={styles.wrap}>
        <div className={styles.text}>
            <span> Task to do  : {itemsTodo} </span>
            <span> Done : {itemsDone} </span>
        </div>
    </div>
);

export default Footer;