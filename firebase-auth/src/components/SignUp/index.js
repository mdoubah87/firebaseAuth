import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { username, passwordOne, email } = this.state;
        
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
        })
        .catch(error => {
            this.setState({error})
        });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    };


    render() {
        const { 
                username, 
                email, 
                passwordOne, 
                passwordTwo, 
                error,
            } = this.state; 

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    placeholder="Full Name"
                />
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                />
                <input 
                    type="password"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    placeholder="Password"
                />
                <input 
                    type="password"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    placeholder="Confirm password"
                />
                <button disabled={isInvalid} type='submit'>Sign Up</button>
                
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default SignUpPage
export { SignUpLink, SignUpForm }