import React from "react";
import styles from './Footer.module.css';
import propTypes from 'prop-types';


const Footer = ({itemsTodo, itemsDone}) => (
    <div className={styles.wrap}>
        <div className={styles.text}>
            <span> Task to do  : {itemsTodo} </span>
            <span> Done : {itemsDone} </span>
        </div>
    </div>
);

Footer.defaultProps = {
    itemsTodo: 0,
    itemsDone: 0
};

Footer.propTypes={
    itemsTodo: propTypes.number.isRequired,
    itemsDone: propTypes.number.isRequired
};
export default Footer;