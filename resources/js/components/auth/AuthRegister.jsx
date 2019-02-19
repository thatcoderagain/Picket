import React from 'react';
import ReactDOM from 'react-dom';

export default class AuthLogin extends React.Component {
    constructor (props) {
        super(props);
        // Props

        // Data (State)
        this.state={
            email: '',
            password: '',
            user: {},
            loggedIn: false,
            errors: ""
        };
        // Methods
        this.updateState=this.updateState.bind(this)
        this.handleLogin = this.handleLogin.bind(this);
    }

    updateState(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin() {
        this.state.errors = "";
        this.state.user = "";
        if (this.state.email === "" || this.state.password === "")
            return;

        let url = '/login';
        axios({
            method: 'post',
            url: url,
            responseType: 'json',
            data: {
                'email': this.state.email,
                'password': this.state.password
            }
        })
        .then((response) => {
            let json = response.data;
            console.log(json);
            alert(json);
            if (json.success == true) {
                let user = json.user;
                this.setState({
                    user: user
                });
            } else {
                let errors = json.error;
                this.setState({
                    errors: errors
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        return (
            <div className="col-md-6 col-sm-12 offset-md-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className={`form-control + ${this.state.errors != "" ? ' is-invalid' : ''}` } name="email" value={this.state.email} onChange={this.updateState} required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className={`form-control + ${this.state.errors != "" ? ' is-invalid' : ''}`} name="password" value={this.state.password} onChange={this.updateState} required/>

                                        <span className="invalid-feedback" role="alert">
                                            {<strong>{this.state.errors}</strong>}
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6 offset-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" id="remember" /*{{ old('remember') ? 'checked' : '' }}*//>

                                            <label className="form-check-label" htmlFor="remember">
                                            Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button className="btn btn-primary" type="submit" onClick={this.handleLogin}>Login</button>

                                        {/*@if (Route::has('password.request'))
                                            <a className="btn btn-link" href="{{ route('password.request') }}">
                                                'Forgot Your Password?') }}
                                            </a>
                                        @endif*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const tags = document.querySelectorAll('.AuthLogin');
if(tags.length > 0) {
    tags.forEach((tag) => {
        ReactDOM.render(<AuthLogin />, tag)
    });
}
