import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from '../article';
import GlobalFeed from '../globalFeed';
import Navbar from './Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />

      <Switch>
        <Route exact path='/' component={GlobalFeed} />
        <Route path='/articles/:slug' component={Article} />
      </Switch>
    </Fragment>
  );
}

export default App;
