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
        ],
        count: 3
    };

    onClickDone = (id) => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({items: newItemList});
    };

    onClickDelete = (id) => {
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState({items: newItemList});
        this.setState( state =>  ({count: state.count - 1}));
    };

    onClickAdd = (value) => this.setState(state => ({
        items:[
            ...state.items,
            {
                value,
                isDone: false,
                id: state.count + 1
            }
            ],
        count: state.count + 1
    }));

    render() {
        return (
            <Container fixed>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO DO List:</h1>
                    <InputItem onClickAdd={this.onClickAdd} />
                    <div>
                        <ItemList
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete}

                        />
                    </div>
                    <Footer count={this.state.count}/>
                </div>
            </Container>
        );
    }
}


export default App;

