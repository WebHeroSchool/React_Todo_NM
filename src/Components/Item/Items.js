import React from 'react';
import styles from './Items.module.css';
import classname from 'classnames';

const Items = ({value, isDone}) => (
    <span className={
        classname({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }> {value}! </span>
);

export default Items;