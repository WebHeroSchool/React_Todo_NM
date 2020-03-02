import React from 'react';
import Items from '../Item/Items';

const ItemList = ({todoItem}) =>(
    <ul>
        <li><Items todoItem={todoItem}/></li>
        <li><Items todoItem={'Insert props'}/></li>
        <li><Items todoItem={'Do everything'}/></li>
    </ul>
);

export default ItemList;