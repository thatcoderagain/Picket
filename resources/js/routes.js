import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AuthLogin from './components/auth/AuthLogin';
import AuthRegister from './components/auth/AuthRegister';

import Profile from  './pages/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';


export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appname: 'Picket',
            user: null,
            loggedIn: false
        };
        this.login = this.login.bind(this);
    }
    login(authuser) {
        // Updating the state
        this.setState({user: authuser});
        // To synchronize the task by adding a delay of 1/10th second
        setTimeout(()=>{
            console.log(this.state.user);
        }, 100);
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route  exact path='/login' component={() =>  <AuthLogin appname={this.state.appname} loggedIn={this.login}/>} />
                        <Route path='/register' component={() => <AuthRegister />} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/gallery' component={Gallery} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
};
