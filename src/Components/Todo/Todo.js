import React, { useState } from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import styles from './Todo.module.css';
import { Container } from '@material-ui/core';

const Todo = () => {
  const InitialState = {
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

  const [itemsState, setItemsState] = useState(InitialState.items);
  // const [itemId, setItemId] = useState(InitialState.items.length);

  const onClickDone = (id) => {
    const newItemList = itemsState.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItemsState({ newItemList });
    console.log(itemsState);

  };

  // const onClickDelete = (id) => {
  //   const newItemList = itemsState.filter(item => item.id !== id);
  //   setItemsState(newItemList);
  // };

  // const onClickAdd = (value) => {
  //   setItemsState((state) => ({
  //     [
  //       ...InitialState.items,
  //       {
  //         value,
  //         isDone: false,
  //         setIdemId(itemId += 1);
  //       }
  //     ]
  //   }));
  // };
  //
  // const itemsDone = setItemId(itemsState.filter((el) => el.isDone).length);
  // const itemsTodo = itemId - itemsDone;


  return (
            <Container className={styles.wrap}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO-DO LIST:</h1>
                    <InputItem
                        items={itemsState}
                        // onClickAdd={onClickAdd}
                    />
                    <div>
                        <ItemList
                            items={itemsState}
                            onClickDone={onClickDone}
                            // onClickDelete={onClickDelete}
                        />
                    </div>
                    <Footer
                        // itemsTodo={itemsTodo}
                        // itemsDone={itemsDone}
                    />
                </div>
            </Container>
  );
};


export default Todo;
