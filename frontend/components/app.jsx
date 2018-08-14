import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import KnittingTimesContainer from './knitting_times/knitting_times_container';
import ProfileContainer from './profile/profile_container';
import KnittingTimeShowContainer from './knitting_time/knitting_time_show_container';
import HostingContainer from './form/hosting_form_container';
import Splash from './splash/splash'
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
        <img src={window.knitting} />
        <p>Knitting With Strangers</p>
      </div>
      <div className="menuHeader">
        <Link to="/knitting_times">Knitting Times</Link>
        <GreetingContainer />
      </div>
    </header>

    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/me" component={ProfileContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/knitting_times" component={KnittingTimesContainer} />
      <Route path="/areas/:areaId/hosting" component={HostingContainer} />
      <Route path="/knitting_times/:knittingtimeId" component={KnittingTimeShowContainer} />
      <Route path="/" render={() => <Redirect to="/" />} />
    </Switch>

    <footer>
      <div className="menu">
        <p>About</p>
        <Link to="/knitting_times">Knitting Times</Link>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
      <div className="prg">
        <p>
          Knitting With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way. <br />
          We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
        </p>
      </div>
    </footer>
  </div>
);

export default App;
