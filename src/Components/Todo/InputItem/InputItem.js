import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './InputItem.module.css';
import propTypes from 'prop-types';

const InputItem = (
  { items, onClickAdd }
) => {
  const InitialState = {
    label: 'Add new task here....',
    inputValue: '',
    error: false
  };
  const [inputItem, setInputItem] = useState(InitialState);

  const onInputHandler = () => {
    if (!(/[a-zA-Zа-яА-Я1-9]+/.test(inputItem.inputValue))) {
      setInputItem({
        inputValue: '',
        error: true,
        label: 'Insert valid text'
      });
      return;
    }

    for (let i = 0; i < items.length; i += 1) {
      if (inputItem.inputValue === items[i].value) {
        setInputItem({
          inputValue: '',
          error: true,
          label: 'This task already exists'
        });
        return;
      }
    }

    onClickAdd(inputItem.inputValue);
    setInputItem({ inputValue: '', label: 'Add new task here....' });
  };

  return (
            <form className={styles.input}
                  onSubmit={() => onInputHandler(items, onClickAdd)}>
                <TextField
                    type="form"
                    id="filled-basic"
                    label={InputItem.label}
                    variant="filled"
                    className={styles.text}
                    error={inputItem.error}
                    value={inputItem.inputValue}
                    onChange={event => setInputItem(
                      {
                        inputValue: event.target.value.toUpperCase(),
                        error: false
                      }
                    )}

                />

                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => onInputHandler({ items, onClickAdd })}
                >
                    Add
                </Button>
            </form>
  );
};

InputItem.propTypes = {
  items: propTypes.array.isRequired,
  onClickAdd: propTypes.func.isRequired
};

export default InputItem;
