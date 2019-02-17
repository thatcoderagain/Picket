import React from 'react';
import commonStyles from '../styles/commonstyle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import Navbar from '../../components/Navbar';

class Gallery extends React.Component {

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

    render() {
        return(
            <div>
                <Navbar/>
                <Header/>
                <div style={commonStyles.galleryscreen}>
                    <SearchBar/>
                    {this.renderGallery()}
                </div>
                <div style={commonStyles.blankDiv}></div>
                <div style={commonStyles.blankDiv}></div>
                <div style={commonStyles.blankDiv}></div>
                <div style={commonStyles.blankDiv}></div>
                <Footer/>
            </div>
        );
    }
}

export default Gallery;
