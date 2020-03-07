import React from 'react';
import Items from '../Item/Items';
import styles from './ItemList.module.css'

const ItemList = ({items, onClickDone}) =>(
<div className={styles.wrap}>
        {items.map(item =>
            <Items key={item.value}
                  value={item.value}
                  isDone={item.isDone}
                  onClickDone={onClickDone}
            />
        )}
</div>
);


export default ItemList;