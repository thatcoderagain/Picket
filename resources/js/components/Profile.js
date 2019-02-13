import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import commonStyles from '../styles/commonstyles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Profile extends React.Component
 {
    constructor()
    {
        super()
        this.state={
            rating: 1
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render()
    {
        return(
            <div>
            <p>hello</p>


            <div style={commonStyles.flexColumnLeft}>
                <div style={commonStyles.flexRow}>
                    <div style={commonStyles.flexColumn}>
                      <Typography variant="h6" color="inherit" style={commonStyles.userName}>
                          ISHITA TANEJA
                      </Typography>
                      <Typography variant="h6" color="inherit" style={commonStyles.userBio}>
                          I am a photo freak
                      </Typography>
                    </div>
                </div>
                <StarRatingComponent
                    style={commonStyles.leftAlign}
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
            <div style={commonStyles.blankDiv}>
                <img src="" alt="Ishita's image" style={commonStyles.hasMargin}/ >
            </div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
            <div style={commonStyles.blankDiv}></div>
          </div>
        )
    }
}

const profiles = document.querySelectorAll('.profile');
if(profiles.length > 0) {
    profiles.forEach((profile) => {
        ReactDOM.render(<Profile />, profile)
    });
}
