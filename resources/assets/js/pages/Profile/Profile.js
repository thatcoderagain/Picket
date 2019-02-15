import React from 'react';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import CircularProfilePic from '../../components/CircularProfilePic';
import commonStyles from '../styles/commonstyle'
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Footer from '../../components/Footer';

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

    renderGallery() {
      return(
        <div style={commonStyles.gallerDiv}>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        <img src={'/images/img1.jpg'} style={commonStyles.galleryImage}/>
        </div>
      );
    }

    render()
    {
        return(
          <div>
            <Header/>
            <div>
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
            {this.renderGallery()}
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