import React from 'react';
import commonStyles from '../styles/commonstyle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Navbar from '../../components/Navbar';
import Modal from 'react-responsive-modal';
import UserSetting from '../Profile/Settings';
import ImageModal from '../ImageModal/ImageModal';
import Images from '../../components/Images';

class Gallery extends React.Component {

    constructor()
    {
        super()
        this.state={
            isOpen: false,
            currentImage: '',
        }
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    dummyImages() {
        let i = 0;
        let imgArray = []
        let url = '';
        for(i = 0; i < 50; i++) {
            url = "https://picsum.photos/800/600?image=" + (i+250);
            imgArray.push(<Images imgUrl={url} key={i} 
                            onClick={this.onOpenModal.bind(this, url)} />);
        }
        return imgArray;
    }

    renderGallery() {
        return(
          <div style={commonStyles.gallerDiv}>
          {this.dummyImages()}
          </div>
        );
    }

    onOpenModal(url) {
        this.setState({ isOpen: true, currentImage: url });
    };
    
    onCloseModal() {
        this.setState({ isOpen: false });
    };  

    renderModal() {
        return(
          <Modal open={this.state.isOpen} onClose={this.onCloseModal} styles={{
              modal: commonStyles.customModal,
              overlay: commonStyles.overlay,
          }} center>
          <div>
            <ImageModal imgUrl={this.state.currentImage}/>
          </div>
          </Modal>
        );
    }

    render() {
        return(
            <div>
                <Header/>
                <div style={commonStyles.galleryscreen}>
                    <SearchBar/>
                    {this.renderGallery()}
                </div>
                <Footer/>
                {this.renderModal()}
            </div>
        );
    }
}

export default Gallery;
