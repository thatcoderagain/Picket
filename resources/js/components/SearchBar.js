import React from 'react';
import commonStyles from '../pages/styles/commonstyle';
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends React.Component {
    constructor()
    {
        super()
        this.state={
            showMoreData: false,
            showRecentData: false,
        }
        this.showHey = this.showHey.bind(this);
        this.hideHey = this.hideHey.bind(this);
        this.showRecent = this.showRecent.bind(this);
        this.hideRecent = this.hideRecent.bind(this);
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
    showRecent() {
            this.setState({
                showRecentData: true,
            })
    }
    hideRecent() {
        this.setState({
            showRecentData: false,
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
            <div onMouseEnter={this.showRecent} onMouseLeave={this.hideRecent} style={commonStyles.type}>
                RECENT
                {this.state.showRecentData &&
                <div style={commonStyles.z1Index}>
                    <div>Mostly viewed</div>
                    <div>Recently added</div>
                    <div>Most liked</div>
                </div>}
            </div>
            </div>
        );
    }
}
