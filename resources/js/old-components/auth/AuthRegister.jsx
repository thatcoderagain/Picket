import React from 'react';
import ReactDOM from 'react-dom';

export default class AuthLogin extends React.Component {
    constructor (props) {
        super(props);
        // Data (State)
        this.state={
            username: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            user: {},
            loggedIn: false,
            errors: ""
        };
        // Methods
        this.updateState=this.updateState.bind(this)
        this.handleRegister = this.handleRegister.bind(this);
    }

    updateState(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleRegister() {
        this.state.errors = "";
        this.state.user = "";
        if (this.state.username === "" || this.state.name === "" ||this.state.email === "" || this.state.password === ""
            || this.state.password_confirmation === "")
            return;

        let url = '/register';
        axios({
            method: 'post',
            url: url,
            responseType: 'json',
            data: {
                'username': this.state.username,
                'name': this.state.name,
                'email': this.state.email,
                'password': this.state.password,
                'password_confirmation': this.state.password_confirmation
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
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>

                                    <div className="col-md-6">
                                        <input id="username" type="text" className={`form-control + ${this.state.errors != "" ? ' is-invalid' : ''}` } name="username" value={this.state.username} onChange={this.updateState} required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                    <div className="col-md-6">
                                        <input id="name" type="text" className={`form-control + ${this.state.errors != "" ? ' is-invalid' : ''}` } name="name" value={this.state.name} onChange={this.updateState} required autoFocus/>
                                    </div>
                                </div>

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
                                    <label htmlFor="password_confirmation" className="col-md-4 col-form-label text-md-right">Password Confirmation</label>

                                    <div className="col-md-6">
                                        <input id="password_confirmation" type="password_confirmation" className={`form-control + ${this.state.errors != "" ? ' is-invalid' : ''}`} name="password" value={this.state.password_confirmation} onChange={this.updateState} required/>

                                        <span className="invalid-feedback" role="alert">
                                            {<strong>{this.state.errors}</strong>}
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button className="btn btn-primary" type="submit" onClick={this.handleRegister}>Register</button>
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
