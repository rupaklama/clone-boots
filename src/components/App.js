import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from '../article';
import GlobalFeed from '../globalFeed';
import Navbar from './Navbar';
import SignIn from './SignIn';

function App() {
  return (
    <Fragment>
      <Navbar />

      <Switch>
        <Route exact path='/' component={GlobalFeed} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/register' component={SignIn} />
        <Route path='/articles/:slug' component={Article} />
      </Switch>
    </Fragment>
  );
}

export default App;
