import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';


class InputItem extends React.Component{
    state ={
        inputValue: ''
    };

    render(){
        const{onClickAdd} = this.props;

        return (
            <div className={styles.input}>
                <TextField
                    type="text"
                    id="filled-basic"
                    label="ADD NEW TASK HERE"
                    variant="filled"
                    className={styles.input}
                    value={this.state.inputValue}
                    onChange={event => this.setState({ inputValue: event.target.value })}
                />
                <Button
                    href='#'
                    variant="outlined"
                    size="large"
                    onClick={() => onClickAdd(this.state.inputValue)}
                >
                    Add
                </Button>
            </div>
        )
    }
}


export default InputItem;