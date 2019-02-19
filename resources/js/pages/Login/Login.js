import React from 'react';
import ReactCardFlip from 'react-card-flip';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import styles from '../styles/commonstyle';

import AuthLogin from '../auth/AuthLogin';

 class Login extends React.Component
 {
    // constructor()
    // {
    //     super()
    //     this.state={
    //         email:"",
    //         password:"",
    //         name: "",
    //         isLoggedIn:false,
    //         userName: "",
    //         uiLogin: true,
    //         uiSignUp: false,
    //         isFlipped: false,
    //     }
    //     this.handleToggle=this.handleToggle.bind(this)
    //     this.handleChange=this.handleChange.bind(this)
    //     this.handleLogin=this.handleLogin.bind(this)
    //     this.handleSignUp=this.handleSignUp.bind(this)
    // }

    // handleToggle() {
    //     this.setState({
    //         isFlipped: !this.state.isFlipped,
    //     });
    // }

    // handleChange(event)
    // {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSignUp() {

    // }

    // handleLogin() {
    //     if (this.state.email === "" || this.state.password === "")
    //         return;

    //     let url = '/login';
    //     axios({
    //         method: 'post',
    //         url: url,
    //         responseType: 'json',
    //         data: {
    //             'email': this.state.email,
    //             'password': this.state.password
    //         }
    //     })
    //     .then((response) => {
    //         let json = response.data;
    //         console.log(json);
    //         if (json.success == true) {
    //             let user = json.user;
    //             alert(user);
    //         } else {
    //             let err = json.error;
    //             alert(err);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    // renderLogin() {
    //     return (
    //         <div style={styles.centerContext}>
    //             <br/>
    //             <TextField
    //             variant="outlined"
    //             style={styles.cardTextInput}
    //             type="text"
    //             type="text"
    //             label="Email"
    //             name="email"
    //             value={this.state.email}
    //             onChange={this.handleChange}
    //             />
    //             <br/>
    //             <br/>

    //             <TextField
    //             variant="outlined"
    //             style={styles.cardTextInput}
    //             type="text"
    //             label="Password"
    //             name="password"
    //             value={this.state.password}
    //             onChange={this.handleChange}
    //             />
    //             <br/>
    //             <button className="btn btn-primary btn-block" type="submit" onClick={this.handleLogin}>Login</button>
    //             <button className="btn btn-info btn-block" type="submit" onClick={this.handleToggle}>Register</button>
    //         </div>
    //     );
    // }

    renderSignUp() {
        return (
            <div>
            <div style={styles.centerContext}>
                <TextField
                style={styles.cardTextInput}
                variant="outlined"
                type="text"
                label="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                />
                <br/>
                <TextField
                style={styles.cardTextInput}
                variant="outlined"
                type="text"
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
                <br/>

                <TextField
                style={styles.cardTextInput}
                variant="outlined"
                type="text"
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />

                <br/>
                <button className="btn btn-primary btn-block" type="submit" onClick={this.handleSignUp}>Register</button>
                <button className="btn btn-info btn-block" type="submit" onClick={this.handleToggle}>Login</button>
            </div>
            </div>
        );
    }

    renderCard() {
            return(
            <ReactCardFlip style={styles.flipper} isFlipped={this.state.isFlipped}>
                    <Card key="front"
                        raised={true}
                        elevation={16}
                        style={styles.cardStyle}>
                            {this.renderLogin()}
                    </Card>

                    <Card key="back"
                        raised={true}
                        elevation={16}
                        style={styles.cardStyle}>
                            {this.renderSignUp()}
                    </Card>
                </ReactCardFlip>
            );
    }

    render() {
        return(
            <div>
                <Header/>
                {<div style={styles.backscreen}>
                    {this.renderCard()}
                </div>}
            </div>
        )
    }
}

export default Login;
