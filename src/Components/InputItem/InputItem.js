import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';



class InputItem extends React.Component{
    state =
        {
        inputValue: '',
        helperText: '',
        error: false,
        };


    clearInputHandler = () => {

        // let newItems = [...this.state.items];
        //     newItems.filter((el)=> el !== this.state.inputValue);
        // console.log(newItems);

         this.state.inputValue ===  '' ?
            this.setState({helperText: 'This field is requiered', error: true}) :
            this.props.onClickAdd(this.state.inputValue);

        this.setState({inputValue: ''});

    };

    render(){
        // const {onClickAdd} = this.props;

        return (
            <div className={styles.input}>
                <TextField
                    type="text"
                    id="filled-basic"
                    label="ADD NEW TASK HERE"
                    variant="filled"
                    className={styles.input}
                    onChange={event =>
                        this.setState(
                            { inputValue: event.target.value.toUpperCase(),
                                        error: false,
                                        helperText: '' }
                            )}
                    helperText={this.state.helperText}
                    error={this.state.error}
                    value={this.state.inputValue}
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