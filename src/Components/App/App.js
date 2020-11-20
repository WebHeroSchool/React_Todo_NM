import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import About from './About/About';
import Contacts from './CV/Contacts';
import styles from './App.module.css';
import classnames from 'classnames';




const App = () => {
  const [isClicked, setClicked] = useState(false);

  return(
      <Router>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.nav}>
              <Link
                  to='/'
                  className= {classnames({
                    [styles.link]: true,
                    [styles.linkActive]: isClicked,
                  })}
                  onClick={() => { isClicked ? setClicked(false): setClicked(true) }}
              >ABOUT</Link>
              <Link to='/todo' className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: isClicked,
              })}
              >TODO_LIST</Link>
              <Link to='/contacts' className= {classnames({
                [styles.link]: true,
                [styles.linkActive]: isClicked,
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
