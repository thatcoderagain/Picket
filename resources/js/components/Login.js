import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

 class Login extends React.Component
 {
    constructor()
    {
        super()
        this.state={
            email:"",
            password:"",
            confirmpassword:"",
            name: "",
            isLoggedIn:false,
            userName: "",
            uiLogin: true,
            uiSignUp: false,

        }
        this.handleToggle=this.handleToggle.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleSignUp=this.handleSignUp.bind(this)
    }

    handleToggle() {
      if( this.state.uiLogin ) {
        this.setState({
          uiLogin: false,
          uiSignUp: true
        });
      } else {
        this.setState({
          uiLogin: true,
          uiSignUp: false
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
       
        
    }
    
    handleClick() 
    {
        
        if (this.state.email === "" || this.state.password === "") {
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

    renderLogin() 
    {
      return (
        <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
        <br/>
        <TextField
        style={{width: 400, marginTop: 16}}
        variant="outlined"
        type="text"
        label="Email"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        />
        <br/>

        <TextField
        variant="outlined"
        style={{width: 400, marginTop: 16, marginBottom: 16}}
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
        onClick={this.handleClick}>SIGN IN</Button>

        <br/>

        <div
        onClick={this.handleToggle}> New to Picket? Signup here! </div>
        <br/>
        </div>
      );
    }

    renderSignUp()
     {
      return (
        <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
        <TextField
        variant="outlined"
        type="text"
        label="Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <br/>
        <TextField
        style={{marginTop: 8}}
        variant="outlined"
        type="text"
        label="Email"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        />
        <br/>

        <TextField
        variant="outlined"
        type="text"
        label="Password"
        name="password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        <br/>

        <TextField
        variant="outlined"
        type="text"
        label="Confirm Password"
        name="confirmpassword"
        value={this.state.confirmpassword}
        onChange={this.handleChange}
        />  
        

        <br/>
        <button 
        style={{
            backgroundColor: '#4CAF50',
            color: '#F5F5DF',
            height: 50,
            paddingLeft: 14,
            paddingRight:14,
            margin: 8,
            width: '100'
        }}
        onClick={this.handleSignUp}>SIGN UP</button>
        
        <div 
        onClick={this.handleToggle}>Already a member? Login here </div>
        <br/>
        </div>
      );
    }

    renderCard()
     {
        return(
            <Card
            raised={true}
            elevation={16}
            style={{
                marginTop: 32,
                maxWidth: 400,
                borderRadius: 16,
                elevation: 16,
                padding: 8,
                flex: 1,
                display: 'flex', alignItems:'center',
            justifyContent:'center',
            }}>
                {this.state.uiLogin && this.renderLogin()}
                {this.state.uiSignUp && this.renderSignUp()}                
            </Card>
        );
    }

    render()
    {
        return(
            <div style={{
                flex: 1,
                flexDirection: 'column',
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
            }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            HEADER
          </Typography>
        </Toolbar>
      </AppBar>
            {this.renderCard()}
          </div>
        )
    }
}

export default Login