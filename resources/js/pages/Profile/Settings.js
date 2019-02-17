import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from '../styles/commonstyle';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';
import CircularProfilePic from '../../components/CircularProfilePic';


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

 class UserSetting extends React.Component
 {
    constructor()
    {
        super()
        this.state={
            name:"",
            bio :"",
            mobile: "",
            isLoggedIn:false,
            userName: "",
            uiLogin: true,
            uiSignUp: false,
            isFlipped: false,
        }
        this.handleToggle=this.handleToggle.bind(this)
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

    renderSettings() {
      return (
        <div style={styles.centerContext}>
        <br/>
        <CircularProfilePic/>
        <br/>
        <br/>

        <div style={styles.blankDivSettings}></div>
        <br/>
        <Button
        style={{alignSelf: 'center'}}
        variant="contained"
        color="primary"
        onClick={this.handleToggle}>EDIT PROFILE</Button>

        <br/>

        <Button 
        variant="contained"
        color="primary">LOG OUT</Button>
        <br/>
        </div>
      );
    }

    renderEdit() {
      return (
        <div style={styles.centerContext}>
         <CircularProfilePic/>
        <TextField
        style={styles.cardTextInput}
        variant="outlined"
        type="text"
        label="Name"
        name="name"
        value={this.state.name}
        />
    
        <TextField
        style={styles.cardTextInput}
        variant="outlined"
        type="text"
        label="Bio"
        name="bio"
        value={this.state.bio}
        />
    

        <TextField
        style={styles.cardTextInput}
        variant="outlined"
        type="text"
        label="Mobile"
        name="mobile"
        value={this.state.mobile}
        />
    
        <Button
        variant="contained"
        color="primary">UPDATE</Button>
        <br/>
        <p>or</p>
    
        <Button
        variant="contained"
        color="primary"
        onClick={this.handleToggle}>SETTINGS</Button>
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
                {this.renderSettings()}
            </Card>

            <Card key="back"
            raised={true}
            elevation={16}
            style={styles.cardStyle}>
                {this.renderEdit()}
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

export default UserSetting
