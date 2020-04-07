import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import { Container } from '@material-ui/core';

class App extends React.Component {
    state = {
      items: [
        {
          value: 'CREATE NEW APP',
          isDone: false,
          id: 1
        },
        {
          value: 'INSERT PROPS',
          isDone: false,
          id: 2
        },
        {
          value: 'DO ALL TASKS',
          isDone: false,
          id: 3
        }
      ]
    };

    itemId = this.state.items.length;

    onClickDone = (id) => {
      const newItemList = this.state.items.map(item => {
        const newItem = { ...item };
        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }
        return newItem;
      });
      this.setState({ items: newItemList });
    };

    onClickDelete = (id) => {
      const newItemList = this.state.items.filter(item => item.id !== id);
      this.setState(state => ({
        items: newItemList
      }));
    };

    onClickAdd = (value) => {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: this.itemId += 1
          }
        ]
      }));
    };

    render() {
      const { items } = this.state;
      const itemsDone = items.filter((el) => el.isDone).length;
      const itemsTodo = items.length - itemsDone;

      return (
            <Container fixed>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO-DO LIST:</h1>
                    <InputItem
                        items={this.state.items}
                        onClickAdd={this.onClickAdd}
                    />
                    <div>
                        <ItemList
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete}
                        />
                    </div>
                    <Footer
                        itemsTodo={itemsTodo}
                        itemsDone={itemsDone}
                    />
                </div>
            </Container>
      );
    }
}


export default App;
