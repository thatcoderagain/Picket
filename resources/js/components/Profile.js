import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import CircularProfilePic from './CircularProfilePic';
import commonStyles from '../styles/commonstyles';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Footer from './Footer';
import img1 from '../assets/images/img1.jpg';

class Profile extends React.Component
 {
    constructor()
    {
        super()
        this.state={
          rating: 1
        }
    }

    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }

    render()
    {
        return(
          <div>
            <Header/>
            <div style={commonStyles.flexColumnLeft}>
              <div style={commonStyles.flexRow}>
                <CircularProfilePic/>
                <div style={commonStyles.flexColumn}>
                  <Typography variant="h6" color="inherit" style={commonStyles.userName}>
                    NAME
                  </Typography>
                  <Typography variant="h6" color="inherit" style={commonStyles.userBio}>
                    I am a photo freak 
                  </Typography>
                </div>
              </div>
              <StarRatingComponent 
                style={commonStyles.leftAlign}
                name="rate1" 
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div style={commonStyles.blankDiv}>
              <img src={img1} style={commonStyles.hasMargin}/>
              <img src={img1} style={commonStyles.hasMargin}/>
              <img src={img1} style={commonStyles.hasMargin}/>
            </div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <Footer/>
          </div>
        )
    }
}
export default Profile