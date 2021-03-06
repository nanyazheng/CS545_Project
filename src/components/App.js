// import React, { Component } from 'react';
// import { firebase } from '../firebase';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';

// import Navigation from './Navigation';
// import LandingPage from './Landing';
// import SignUpPage from './SignUp';
// import SignInPage from './SignIn';
// import PasswordForgetPage from './PasswordForget';
// import HomePage from './Home';
// import AccountPage from './Account';

// import * as routes from '../constants/routes';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authUser: null,
//     };
//   }
//   componentDidMount() {
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//         ? this.setState({ authUser })
//         : this.setState({ authUser: null });
//     });
//   }
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navigation authUser={this.state.authUser} />

//           <hr />

//           <div>
//             <Navigation />

//             <hr />

//             <Route
//               exact path={routes.LANDING}
//               component={LandingPage}
//             />
//             <Route
//               exact path={routes.SIGN_UP}
//               component={SignUpPage}
//             />
//             <Route
//               exact path={routes.SIGN_IN}
//               component={SignInPage}
//             />
//             <Route
//               exact path={routes.PASSWORD_FORGET}
//               component={PasswordForgetPage}
//             />
//             <Route
//               exact path={routes.HOME}
//               component={HomePage}
//             />
//             <Route
//               exact path={routes.ACCOUNT}
//               component={AccountPage}
//             />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import withAuthentication from './withAuthentication';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
    </div>
  </Router>

export default withAuthentication(App);