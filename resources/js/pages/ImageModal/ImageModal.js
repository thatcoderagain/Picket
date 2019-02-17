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
                </div>
            </div>
            </div>
        )
    }

}

export default ImageModal