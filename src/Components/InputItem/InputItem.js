import React from "react";
import {TextField, Button} from '@material-ui/core';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
    state =
        {
            label: 'Add new task here....',
            inputValue: '',
            error: false
        };

    onInputHandler = ({items}) => {

        // if ( this.state.inputValue === '' || this.state.inputValue === ' ' ){
        if (!(/^\w/.test(this.state.inputValue))) {
            this.setState({inputValue: ''});
            return this.setState({
                // helperText: 'Insert valid text',
                error: true,
                label: 'Insert valid text'
            });
        }


        for (let i = 0; i < items.length; i++) {
            if (this.state.inputValue === items[i].value) {
                this.setState({inputValue: ''});
                return this.setState({
                    error: true,
                    label: 'This task already exists'
                })
            }
        }


        this.props.onClickAdd(this.state.inputValue);


        this.setState({inputValue: '', label: 'Add new task here....'});


    };

    render() {
        const {onClickAdd, items} = this.props;

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


export default InputItem;