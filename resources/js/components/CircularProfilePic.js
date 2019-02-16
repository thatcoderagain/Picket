import React from 'react';
import commonStyles from '../pages/styles/commonstyle';

class CircularProfilePic extends React.Component { 
    render() {
        return(
            <div style={commonStyles.circularProfilePic}>
            <img src={'/images/circledefpic.png'} style={commonStyles.circularProfilePic}/>
            </div>
        );
    }
}

export default CircularProfilePic;