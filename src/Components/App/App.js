import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles  from './App.module.css';
import { Container } from '@material-ui/core';

class App extends React.Component {
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

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({items: newItemList});
    };


    onClickDelete = id =>{
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState({items: newItemList});
    };

    render() {
        return (
            <Container fixed>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO DO List:</h1>
                    <InputItem/>
                    <div>
                        <ItemList
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete} />
                    </div>
                    <Footer count={3}/>
                </div>
            </Container>
        );
    }
}


export default App;

