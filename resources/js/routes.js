import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Profile from  './pages/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';
// import Home from './pages/Home/Home';

export default class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/gallery' component={Gallery} />
                        {/*<Route path='/home' component={Home} />*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};
