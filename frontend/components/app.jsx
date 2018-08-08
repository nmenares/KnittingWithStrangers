import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <header className="navbar">
      <div>
        <img src="./images/knitting.png" />
        Knitting With Strangers
      </div>
      <div>
        <GreetingContainer />
      </div>
    </header>

    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
