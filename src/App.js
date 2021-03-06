import React from 'react';
import styles from './App.module.scss';
import SearchBar from './components/SearchBar';
import ListItems from './containers/ListItems/ListItems';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TeamInfo from './containers/TeamInfo/TeamInfo';
import Title from './components/Title';
import FootballerInfo from './containers/FootballerInfo/FootballerInfo';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className={styles.colorLayer}>
        <div className={styles.App}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Title />
              <SearchBar />
              <ListItems />
            </Route>
            <Route path='/team/:id' component={TeamInfo} />
            <Route path='/footballer/:id' component={FootballerInfo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
