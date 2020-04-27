import React from 'react';
import styles from './Item.module.css';
import classname from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import propTypes from 'prop-types';


class Item extends React.Component {
  // componentDidMount = () => {
  //   this.myTimer = setInterval(()=> console.log('memory leak'), 1000);
  // };

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myTimer);
  // }


  render() {
    const {
      id, value, isDone, onClickDone, onClickDelete
    } = this.props;

    return (
            <div className={styles.wrap}>
                <Checkbox
                    checked={isDone}
                    color="default"
                    value="default"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onClick={() => onClickDone(id)}
                />
                <span className={
                    classname({
                      [styles.item]: true,
                      [styles.done]: isDone
                    })
                }> {value} </span>

                <DeleteIcon
                    className={styles.btn}
                    fontSize="large"
                    onClick={() => onClickDelete(id)}
                />

            </div>
    );
  }
}

// Item.propTypes = {
//   id: propTypes.number.isRequired,
//   isDone: propTypes.bool.isRequired,
//   value: propTypes.string.isRequired,
//   onClickDone: propTypes.func.isRequired,
//   onClickDelete: propTypes.func.isRequired
// };

export default Item;
