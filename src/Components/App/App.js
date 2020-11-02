import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, MenuItem, MenuList } from '@material-ui/core';
import Todo from './Todo/Todo';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import styles from './App.module.css';


const App = () => (
    <Router>
        <div className={styles.App}>
            <div className={styles.wrap}>
                <Card className={styles.sidebar}>
                    <MenuList>
                        <Link to='/' className={styles.link}><MenuItem>ABOUT</MenuItem></Link>
                        <Link to='/todo' className={styles.link}><MenuItem>TODO_LIST</MenuItem></Link>
                        <Link to='/contacts' className={styles.link}> <MenuItem>CONTACTS</MenuItem></Link>
                    </MenuList>
                </Card>
                <Card className={styles.content}>
                    <Route path='/' exact component={About} />
                    <Route path='/todo' component={Todo} />
                    <Route path='/contacts' component={Contacts} />
                </Card>
            </div>
        </div>
    </Router>
);
export default App;
