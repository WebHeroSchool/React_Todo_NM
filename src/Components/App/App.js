import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles  from './App.module.css';
import { Container } from '@material-ui/core';

class App extends React.Component{
    state = {
        items: [
            {
                value: 'Create the new app ',
                isDone: true,
                id: 1
            },
            {
                value: 'Insert props',
                isDone: false,
                id: 2
            },
            {
                value: 'Do all the tasks',
                isDone: true,
                id: 3
            }
        ]
    };

    onClickDone = isDone =>console.log(isDone);


    render() {
        return (
            <Container fixed>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO DO List:</h1>
                    <InputItem />
                    <div>
                        <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
                    </div>
                    <Footer  count={3}/>
                </div>
            </Container>
        );
    }
}


export default App;

