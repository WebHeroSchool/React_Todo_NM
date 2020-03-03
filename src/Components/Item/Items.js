import React from 'react';
import styles from './Items.module.css';
import classnames from 'classnames';

const Items = ({value, isDone}) => (
    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }> {value}! </span>
);

export default Items;