import React from 'react';
import Items from '../Item/Items';

const ItemList = ({items}) =>(
    <ul>
        {items.map(item => <li key={item.value}><Items value={item.value}/></li> )}
    </ul>
);

export default ItemList;