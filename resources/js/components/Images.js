import React from 'react';
import commonStyles from '../pages/styles/commonstyle';

export default class Images extends React.Component {
    render() {
        return(
            <div>
                <img src={'/images/img1.jpg'} style={commonStyles.hasMargin}/>
            </div>
        );
    }
}
