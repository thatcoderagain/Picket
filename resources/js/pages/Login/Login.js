import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from '../styles/commonstyle';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';
import Header from '../../components/Header';


 class Login extends React.Component
 {
        constructor()
        {
                super()
                this.state={
                        email:"",
                        password:"",
                        name: "",
                        isLoggedIn:false,
                        userName: "",
                        uiLogin: true,
                        uiSignUp: false,
                        isFlipped: false,
                }
                this.handleToggle=this.handleToggle.bind(this)
                this.handleChange=this.handleChange.bind(this)
                this.handleLogin=this.handleLogin.bind(this)
                this.handleSignUp=this.handleSignUp.bind(this)
        }

        handleToggle() {
            if( this.state.isFlipped ) {
                this.setState({
                        isFlipped: false,
                });
            } else {
                this.setState({
                        isFlipped: true,
                });
            }
        }

        handleChange(event)
        {
                const{ name,value}=event.target
                this.setState({
                        [name]:value
                })

        }

        handleSignUp() { 
             if (this.state.email === "" && this.state.password === ""  && this.state.name === "") {
                     alert("Input details");
                     return;
             }
             fetch('/api/signup', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password,
                        name: this.state.name,
                })
             })
             .then(response=>response.json())
                .then(data=> {
                        console.log(data);
             })      
        }

        handleLogin() {
                if (this.state.email === "" && this.state.password === "") {
                        alert("Input details");
                        return;
                }
                fetch('/api/login', {
                   method: 'POST',
                   headers: {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json',
                   },
                   body: JSON.stringify({
                           email: this.state.email,
                           password: this.state.password,
                   })
                })
                .then(response=>response.json())
                   .then(data=> {
                           console.log(data);
                })      
        }

        renderLogin() {
            return (
                <div style={styles.centerContext}>
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
                <br/>

                <TextField
                variant="outlined"
                style={styles.cardTextInput}
                type="text"
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
                <br/>
                <Button
                style={{alignSelf: 'center'}}
                variant="contained"
                color="primary"
                onClick={this.handleLogin}>SIGN IN</Button>

                <p>or</p>

                <Button
                variant="contained"
                color="primary"
                onClick={this.handleToggle}>Sign Up</Button>
                <br/>
                </div>
            );
        }

        renderSignUp() {
            return (
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
                <Button
                variant="contained"
                color="primary"
                onClick={this.handleSignUp}>SIGN UP</Button>

                <p>or</p>

                <Button
                variant="contained"
                color="primary"
                onClick={this.handleToggle}>Login</Button>
                <br/>
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

        render()
        {
                return(
                    <div>
                        <Header/>
                    <div style={styles.backscreen}>
                        {this.renderCard()}
                    </div>
                    </div>
                )
        }
}

export default Login
