import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import styles from './Todo.module.css';
import { Container } from '@material-ui/core';

//todo Функционал со звездочкой, для получения высшего балла:
// todo Добавить функционал редактирования дела (по двойному клику на текст дела)
// todo Добавить возможность сортировать, перетаскивать, менять местами элементы списка
// todo Сохранять состояние приложения с делами в Local Storage
// todo При перезагрузке страницы состояние приложения не должно сбрасываться. О чем речь.


const Todo = () => {
  const InitialState = {
          items: JSON.parse(localStorage.getItem("items")) || [
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

  const [itemsArr, setItemsArr] = useState(InitialState.items);
  const itemId = InitialState.items.length;

    useEffect(() => {
     localStorage.setItem("items", JSON.stringify(itemsArr));
    }, [itemsArr]);


  const onClickDone = (id) => {
    const newItemList = itemsArr.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItemsArr(newItemList);
  };

  const onClickDelete = (id) => {
    const newItemList = itemsArr.filter(item => item.id !== id);
    setItemsArr(newItemList);
  };

  const onClickAdd = (value) => {
    setItemsArr(
      [...itemsArr,
        {
          value,
          isDone: false,
          id: itemId + 1
        }
      ]
    );
  };

  const itemsDone = itemsArr.filter((el) => el.isDone).length;
  const itemsTodo = itemsArr.length - itemsDone;

  return (

            <Container className={styles.wrap}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO-DO LIST:</h1>
                    <InputItem
                        items={itemsArr}
                        onClickAdd={onClickAdd}
                    />
                    <div>
                        <ItemList
                            items={itemsArr}
                            onClickDone={onClickDone}
                            onClickDelete={onClickDelete}
                        />
                    </div>
                     <Footer
                         itemsTodo={itemsTodo}
                         itemsDone={itemsDone}
                     />
                </div>
            </Container>
  );
};

export default Todo;
