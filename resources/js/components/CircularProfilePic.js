import React from 'react';
import commonStyles from '../styles/commonstyles';
import circledefpic from '../assets/images/circledefpic.png'

class CircularProfilePic extends React.Component { 
    render() {
        return(
            <div style={commonStyles.circularProfilePic}>
            <img src={circledefpic} style={commonStyles.circularProfilePic}/>
            </div>
        );
    }
}

export default CircularProfilePic;