import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import About from './About/About';
import Contacts from './CV/Contacts';
import styles from './App.module.css';
import classnames from 'classnames';




const App = () => {
  const [buttons, setButtons] = useState([
      {name: 'ABOUT', isClicked: false, path: '/' },
      {name: 'TODO', isClicked: false, path: '/todo'},
      {name: 'CV', isClicked: false, path: '/contacts'}
    ]);

let linkList = buttons.map((el, i) => {
  return  <Link
              to={el.path}
              className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: el.isClicked ,
              })}
              onClick={() => chooseButtonClick(i)}
          >{el.name}</Link>
});

const chooseButtonClick = (i) =>{
  let newButtons = buttons;
  newButtons.map((el, i) => {
    el.isClicked = false;
  });
  newButtons[i].isClicked = true;
  console.log('newButtons', newButtons);
  // newButtons[i].isClicked = true;
  setButtons(newButtons);
};
useEffect(() => {
  console.log('buttons', buttons);
}, [buttons]);

  return(
      <Router>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.nav}>
              {linkList}
              <Link
                  to='/'
                  className= {classnames({
                    [styles.link]: true,
                    [styles.linkActive]: buttons,
                  })}
                  onClick={() => { buttons ? setButtons(false): setButtons(true) }}
              >ABOUT</Link>
              <Link to='/todo' className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: buttons,
              })}
              >TODO_LIST</Link>
              <Link to='/contacts' className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: buttons,
              })}>CV</Link>
            </div>
            <div className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo' component={Todo} />
              <Route path='/contacts' component={Contacts} />
            </div>
          </div>
        </div>
      </Router>
  );
}


export default App;
