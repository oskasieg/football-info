import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListItems from './containers/ListItems/ListItems';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TeamInfo from './containers/TeamInfo/TeamInfo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <SearchBar />
            <ListItems />
          </Route>
          <Route path='/team/:name' component={TeamInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
