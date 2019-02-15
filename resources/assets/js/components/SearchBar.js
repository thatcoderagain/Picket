import React from 'react';
import commonStyles from '../pages/styles/commonstyle';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
    constructor()
    {
        super()
        this.state={
            showMoreData: false,            
        }
        this.showHey = this.showHey.bind(this);
        this.hideHey = this.hideHey.bind(this);
    }
    showHey() {
            this.setState({
                showMoreData: true,
            })    
    }
    hideHey() {
        this.setState({
            showMoreData: false,
        })    
    }
    render() {
        return(
            <div style={commonStyles.searchBar}>
            <div onMouseEnter={this.showHey} onMouseLeave={this.hideHey} style={commonStyles.category}>
                ALL
                {this.state.showMoreData && 
                <div style={commonStyles.z1Index}>
                    <div>Education</div>
                    <div>Music</div>
                    <div>Medics</div>
                </div>}
            </div>
            <div style={commonStyles.searchInput}>
            <input
            style={commonStyles.searchTextInput}
            type="text"
            placeholder="Search"
            name="search"
            />
            </div>
            <div style={commonStyles.type}>
                RECENT
            </div>
            </div>
        );
    }
}

export default SearchBar;