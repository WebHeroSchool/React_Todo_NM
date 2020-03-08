import React from 'react';
import styles from './Items.module.css';
import classname from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const Items = ({id, value, isDone,  onClickDone, onClickDelete}) => (
    <div className={styles.wrap}>
        <Checkbox
            checked={isDone}
            color="default"
            value="default"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onClick={() => onClickDone(id)}
        />
    <span className={
        classname({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }> {value} </span>

        <DeleteIcon
            className={styles.btn}
            fontSize="large"
            onClick={() => onClickDelete(id)}
        />

    </div>

);

export default Items;