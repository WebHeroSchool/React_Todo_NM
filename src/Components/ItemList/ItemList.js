import React from 'react';
import Items from '../Item/Items';
import styles from './ItemList.module.css'

const ItemList = ({items, onClickDone, onClickDelete}) =>(
<div className={styles.wrap}>
        {items.map(item =>
            <Items
                key={item.id}
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
        )}
</div>
);


export default ItemList;