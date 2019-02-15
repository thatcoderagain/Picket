import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from '../styles/commonstyle';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';


const rootStyle = createStyles({
    root: {
      width: '100%',
      position: 'absolute'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
});

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
        this.handleClick=this.handleClick.bind(this)
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
        history.push('/profile');
    }

    handleClick() {

        if (this.state.email === "" && this.state.password === "") {
            alert("Input details");
            return;
        }/*
        if (this.state.email === "myemail@test.in" && this.state.password === "123456") {
            alert("correct login");
        } else {
            alert("incorrect email or pass");
        }
        */
       fetch('https://nayitaleem.com:3000/api/check-login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Username: this.state.email,
            Password: this.state.password,
        })
       })
       .then(response=>response.json())
        .then(data=> {
            console.log(data);
            if (data.length > 0) {
                console.log(data[0]['email']);
                this.setState({userName: data[0]['email']})
            } else {
                this.setState({userName: 'failed'})
                console.log('login failed');
            }
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
        onClick={this.handleClick}>SIGN IN</Button>

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
          <div style={styles.backscreen}>
            {this.renderCard()}
          </div>
        )
    }
}

export default Login
