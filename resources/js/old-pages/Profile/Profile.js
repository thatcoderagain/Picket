import React from 'react';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import CircularProfilePic from '../../components/CircularProfilePic';
import commonStyles from '../styles/commonstyle'
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Footer from '../../components/Footer';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Settings from '@material-ui/icons/Settings';
import Modal from 'react-responsive-modal';
import UserSetting from './Settings';

class Profile extends React.Component
 {
    constructor()
    {
        super()
        this.state={
          rating: 1,
          isOpen: false,
          hasPhotos: true,
          itsHisProfile: true,
        }
        this.toggleState = this.toggleState.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
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

    toggleState() {
      if(this.state.hasPhotos) {
        this.setState({
          hasPhotos: false,
        });
      } else {
        this.setState({
          hasPhotos: true,
        });
      }
    }

    renderIfHisProfile() {
      return(
        <div style={commonStyles.fullFlex}>
          <Settings onClick={this.onOpenModal} style={commonStyles.userProfileIcons}/>
          <div style={commonStyles.adjustmargins}/>
          <CloudUpload onClick={this.toggleState} style={commonStyles.userProfileIcons}/>
        </div>
      );
    }

    renderLine() {
      return(
        <div style={commonStyles.showLine}></div>
      );
    }

    renderIfhasNoPhotos() {
      return(
        <div> User has uploaded no photos yet! </div>
      );
    }

    renderIfHasNoPhotosInHisProfile() {
      return(
        <div> You have no uploads yet! </div>
      );
    }

    onOpenModal() {
      this.setState({ isOpen: true });
    };

    onCloseModal() {
      this.setState({ isOpen: false });
    };

    renderEditModal() {
      return(
        <Modal open={this.state.isOpen} onClose={this.onCloseModal} focusTrapped>
        <div>
          <UserSetting/>
        </div>
        </Modal>
      );
    }

    render()
    {
        return(
          <div>
            <Header/>
            <div style={commonStyles.hasLeftPadded}>
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
                {this.state.itsHisProfile && this.renderIfHisProfile()}
              </div>
              <StarRatingComponent
                style={commonStyles.leftAlign}
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            {this.renderLine()}
            {this.state.hasPhotos && this.renderGallery()}
            {!this.state.hasPhotos && this.state.itsHisProfile && this.renderIfHasNoPhotosInHisProfile()}
            {!this.state.hasPhotos && !this.state.itsHisProfile && this.renderIfhasNoPhotos()}
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <Footer/>
            {this.renderEditModal()}
          </div>
        )
    }
}
export default Profile
