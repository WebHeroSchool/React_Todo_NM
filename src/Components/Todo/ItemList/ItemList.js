import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.module.css';
import propTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) =>{
  return (
        <div className={styles.wrap}>
            {items.map(item => <Item
                key={item.id}
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />)}
        </div>
  );
};


ItemList.defaultProps = {
  items: [
    {
      value: 'Add task',
      isDone: false,
      id: 0
    }
  ]
};

ItemList.propTypes = {
  items: propTypes.array,
  onClickDone: propTypes.func.isRequired,
  onClickDelete: propTypes.func.isRequired
};

export default ItemList;
