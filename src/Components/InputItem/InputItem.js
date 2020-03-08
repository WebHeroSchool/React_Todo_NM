import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import ItemList from "../ItemList/ItemList";


class InputItem extends React.Component{
    state ={
        inputArray: <ItemList />,
        inputValue: '',
        helperText: '',
        error: false
    };


    // addItem = () => {
    //     let newValue = this.state.inputValue;
    //     let newArray = this.state.inputArray;
    //
    //
    //     if (newArray.includes(newValue)) {
    //         this.setState({helperText: 'Already exist', error:true});
    //     } else {
    //         newValue === '' ?
    //             this.setState({helperText: 'This field is requiered', error: true}) :
    //             this.props.onClickAdd(this.state.inputValue);
    //     }
        // this.setState(previousState => ({
        //     inputArray: [...previousState.inputArray, newValue]
        // }, () =>  console.log(this.state.inputArray)));

    // };


    clearInputHandler = () => {
        // newValue === ''  ?
        //     this.setState({helperText: 'This field is requiered', error:true}) :
        // this.props.onClickAdd( this.state.inputValue );
        let newValue = this.state.inputValue;
        let newArray = this.state.inputArray;


        if (newArray.includes(newValue)) {
            this.setState({helperText: 'Already exist', error: true});
        } else {
            newValue === '' ?
                this.setState({helperText: 'This field is requiered', error: true}) :
                this.props.onClickAdd(this.state.inputValue);

            this.setState({inputValue: ''});
        }

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