import React from 'react'
import { 
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom'


import Navigation from '../Navigation'
import SignUpPage from '../SignUp'
import SignInpage from '../SignIn'
import LandingPage from '../Landing'
import AdminPage from '../Admin'
import AccountPage from '../Account'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'

import * as ROUTES from '../../constants/routes'

const App = () => (
    <Router>

        <Navigation />

        <hr/>

        <Route exact path = {ROUTES.LANDING} component = {LandingPage} />
        <Route path = {ROUTES.SIGN_UP} component = {SignUpPage} />
        <Route path = {ROUTES.SIGN_IN} component = {SignInpage} />
        <Route path = {ROUTES.PASSWORD_FORGET} component = {PasswordForgetPage} />
        <Route path = {ROUTES.HOME} component = {HomePage} />
        <Route path = {ROUTES.ACCOUNT} component = {AccountPage} />
        <Route path = {ROUTES.ADMIN} component = {AdminPage} />

    </Router>
);

export default App