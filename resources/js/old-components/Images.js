import React from 'react';
import commonStyles from '../pages/styles/commonstyle';

export default class Images extends React.Component {
    shouldComponentUpdate(newProps) {
        return this.props.imgUrl !== newProps.imgUrl;
      }
    render() {
        return(
            <img src={this.props.imgUrl} style={commonStyles.galleryImage} onClick={this.props.onClick}/>
        );
    }
}