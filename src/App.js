// IMPORT REACT
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './Routes/routes';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Details from './Pages/Details';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/PrivateRoute';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Filter from './Pages/Filter';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path={Routes.HOME}>
              <Home />
            </Route>
            <Route exact path={Routes.MOVIES}>
              <Movies />
            </Route>
            <Route exact path={Routes.DETAIL}>
              <Details/>
            </Route>
            <PrivateRoute exact path={Routes.ACCOUNT} component={Account}/>
            <Route exact path={Routes.LOGIN}>
              <Login/>
            </Route>
            <Route exact path={Routes.SIGNUP}>
              <Signup/>
            </Route>
            <Route exact path={Routes.FILTER}>
              <Filter/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
