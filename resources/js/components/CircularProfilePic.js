import React from 'react';
<<<<<<< HEAD
import commonStyles from '../styles/commonstyles';
=======
import commonStyles from '../pages/styles/commonstyle';
>>>>>>> 3c7b9fba6bba8d2ce9458e2a43a638b34cf75675


export default class CircularProfilePic extends React.Component {
    render() {
        return(
            <div style={commonStyles.circularProfilePic}>
            <img src={'/images/circledefpic.png'} style={commonStyles.circularProfilePic}/>
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
