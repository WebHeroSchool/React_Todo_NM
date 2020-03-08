import React from "react";
import styles from './Footer.module.css';

const Footer = ({count}) => (
    <div className={styles.wrap}>
        <span className={styles.text}>Total tasks : {count}</span>
    </div>
);
Footer.defaultProps = {
    count: 0
};


export default Footer;