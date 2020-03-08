import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';


class InputItem extends React.Component{
    state ={
        inputValue: '',
        helperText: '',
        error: false
    };

    clearInputHandler = () => {
        this.state.inputValue === '' ?
            this.setState({helperText: 'This field is requiered', error:true}) :
            this.setState({inputValue : ''});
        this.props.onClickAdd( this.state.inputValue );
    };

    render(){

        return (
            <div className={styles.input}>
                <TextField
                    type="text"
                    id="filled-basic"
                    label="ADD NEW TASK HERE"
                    variant="filled"
                    className={styles.input}
                    value={this.state.inputValue}
                    onChange={event =>
                        this.setState(
                            { inputValue: event.target.value.toUpperCase(),
                                        error: false,
                                        helperText: '' }
                            )}
                    helperText={this.state.helperText}
                    error={this.state.error}
                />
                <Button
                    href='#'
                    variant="outlined"
                    size="large"
                    onClick={this.clearInputHandler}
                >
                    Add
                </Button>
            </div>
        )
    }
}


export default InputItem;