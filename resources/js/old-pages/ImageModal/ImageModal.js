import React from 'react';
import ImageModalStyle from './ImageModalStyle';
import Typography from '@material-ui/core/Typography';

class ImageModal extends React.Component {
    constructor()
    {
        super()
        this.state={

        }
    }

    render()
    {
        return(
            <div>
                <div style={ImageModalStyle.backscreen}>
                    <div style={ImageModalStyle.imageSide}>
                        <img src={this.props.imgUrl} style={{width: '500px'}}/>
                        <Typography style={{color: 'white', margin: 32,}}>Test Image Data</Typography>
                    </div>
                    <div style={ImageModalStyle.textSide}>
                        <Typography style={{color: 'black', margin: 32,}}>Uploaded by Mr. X</Typography>
                        <Typography style={{color: 'black', margin: 32,}}>Price: Rs. 2000000</Typography>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ImageModal
