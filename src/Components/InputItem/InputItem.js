import React from "react";
import {TextField, Button} from '@material-ui/core';
import styles from './InputItem.module.css';
import propTypes from 'prop-types';

class InputItem extends React.Component {
    state =
        {
            label: 'Add new task here....',
            inputValue: '',
            error: false
        };

    onInputHandler = ({items, onClickAdd}) => {

        if (!(/^\w/.test(this.state.inputValue))) {
            return this.setState({
                inputValue: '',
                error: true,
                label: 'Insert valid text'
            });
        }

        for (let i = 0; i < items.length; i++) {
            if (this.state.inputValue === items[i].value) {
                return this.setState({
                    inputValue: '',
                    error: true,
                    label: 'This task already exists',
                });
            }
        }

        onClickAdd(this.state.inputValue);

        this.setState({inputValue: '', label: 'Add new task here....'});
    };

    render() {
        const {items, onClickAdd} = this.props;

        return (
            <form className={styles.input}
                  onSubmit={() => this.onInputHandler({items, onClickAdd})}>
                <TextField
                    type="form"
                    id="filled-basic"
                    label={this.state.label}
                    variant="filled"
                    className={styles.text}
                    error={this.state.error}
                    value={this.state.inputValue}
                    onChange={event =>
                        this.setState(
                            {
                                inputValue: event.target.value.toUpperCase(),
                                error: false
                            }
                        )}

                />

                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => this.onInputHandler({items, onClickAdd})}
                >
                    Add
                </Button>
            </form>
        )
    }
}

InputItem.propTypes = {
    items: propTypes.array.isRequired,
    onClickAdd: propTypes.func.isRequired
};

export default InputItem;