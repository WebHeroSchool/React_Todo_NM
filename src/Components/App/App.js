import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from './Todo/Todo';
import About from './About/About';
import CV from './CV/CV';

import styles from './App.module.css';
import classnames from 'classnames';

const App = () => {
  const [buttons, setButtons] = useState([
      {name: 'ABOUT', isClicked: true, path: '/' },
      {name: 'TODO', isClicked: false, path: '/todo'},
      {name: 'CV', isClicked: false, path: '/cv'}
    ]);

  const chooseButtonClick = (idx) => {
    const newButtons =[...buttons] ;
    newButtons.map(el => el.isClicked = false);
    newButtons[idx].isClicked = true;
    setButtons(newButtons);
  };

  let linkList = buttons.map((el, i) => {
  return  <Link
              to={el.path}
              className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: (el.isClicked) ,
              })}
              onClick={() => chooseButtonClick(i)}
          >{el.name}</Link>
});

useEffect(() => {
  console.log('buttons in useEffect', buttons);
}, [buttons]);

  return(
      <Router>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.nav}>
              {linkList}
            </div>
            <div className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo' component={Todo} />
              <Route path='/cv' component={CV} />
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
