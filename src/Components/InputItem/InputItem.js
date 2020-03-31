import React from "react";
import { TextField, Button } from '@material-ui/core';
import styles from './InputItem.module.css';

class InputItem extends React.Component{
    state =
        {
        label: 'Add new task here....',
        inputValue: '',
        // helperText: '',
        error: false
        // isExist: false,
        };

    onInputHandler = ({items}) => {

        // if ( this.state.inputValue === '' || this.state.inputValue === ' ' ){
         if(!(/^\w/.test(this.state.inputValue))){
             this.setState({inputValue: ''});
             return this.setState({
                 // helperText: 'Insert valid text',
                error: true,
                label:'Insert valid text' });
        }

         items.map((el)=>(
             el.value === this.state.inputValue ?
                 (this.setState({  error: true, label:'This task already exists'}))
        : null ))

        // for(let i = 0; i < items.length; i++) {
        //      if(this.state.inputValue === items[i].value) {
        //             this.setState({inputValue: ''});
        //             return  this.setState({
        //                 // helperText: 'This task already exists',
        //                 error: true,
        //                 label:'This task already exists'})
        //          }
        //     }


            this.props.onClickAdd(this.state.inputValue);


            this.setState({inputValue: '', label:'Add new task here....'});


    };

    render(){
         const {onClickAdd, items} = this.props;

        return (
            <div className={styles.input}>
                <TextField
                        type="text"
                        id="filled-basic"
                        label={this.state.label}
                        variant="filled"
                        className={styles.text}
                        onChange={event =>
                            this.setState(
                                { inputValue: event.target.value.toUpperCase(),
                                            error: false,
                                            helperText: '' }
                                )}
                        helperText={this.state.helperText}
                        error={this.state.error}
                        value={this.state.inputValue}
                        onSubmit={()=> {
                            return this.onInputHandler({items, onClickAdd})
                        }}

                />

                <Button
                    href='#'
                    variant="outlined"
                    size="large"
                    // className={styles.text}
                    onClick={()=>this.onInputHandler({items, onClickAdd})}
                >
                    Add
                </Button>
            </div>
        )
    }
}


export default InputItem;