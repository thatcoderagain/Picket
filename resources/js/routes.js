import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AuthLogin from './components/auth/AuthLogin';

import Profile from  './pages/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';

export default class Routes extends Component {
    render () {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/login' component={AuthLogin} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/gallery' component={Gallery} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
};
