import React from 'react';
import commonStyles from '../styles/commonstyles';


export default class CircularProfilePic extends React.Component {
    render() {
        return(
            <div style={commonStyles.circularProfilePic}>
            <img src={circledefpic} style={commonStyles.circularProfilePic}/>
            </div>
        );
    }
}
const circularprofliepic = document.querySelectorAll('.circularprofilepic');
if(circularprofliepic.length > 0) {
    circularprofliepic.forEach((example) => {
        ReactDOM.render(<CircularProfilePic />, example)
    });
}
