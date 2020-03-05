import React from 'react';
import ItemList from '/Users/natalyamyunster/Desktop/WHS TODO/todo/src/Components/InputItem';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles  from './App.module.css';
import { Container } from '@material-ui/core';


const App = () => {

    const items = [
        {
            value: 'Create the new app ',
            isDone: true
        },
        {
            value: 'Insert props',
            isDone: false
        },
        {
            value: 'Do all the tasks',
            isDone: true
        },
    ];

    return (
<Container fixed >
        <div className={styles.wrap}>
                <h1 className={styles.title}> TO DO List:</h1>
                <InputItem />
            <div>
                <ItemList items={items}/>
            </div>
            <Footer  count={3}/>
            </div>
</Container>
    );
};


export default App;

