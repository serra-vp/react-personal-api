import React, { Component } from 'react';
import axios from 'axios';
import jBox from 'jbox';

import Player from './Player';

class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      showPlayerSearch: true,
      showPlayerStat: false,
      searchValue: '',
      PlayerStats: {},
      playerHistory: [],
      accountID: null
    }
  } 

  handleKeyEnter = (e) => {
    //135077859
    if(e.key === 'Enter'){ 
      axios
        .get(`https://api.opendota.com/api/players/${this.state.searchValue}`)
        .then((response) => (
          this.setState({
            PlayerStats: response.data,
            showHeroSearch: false,
            showPlayerStat: true,
            accountID: response.data.profile.account_id
          })
        ))
        .catch((error) => {
            new jBox('Notice', {
              content: 'Awww! No matches your query. :< Can you please try again.',
              color: 'red',
              showCountdown: true,
              attributes: {
                  y: 'bottom'
              }
          });
        })
      axios
        .get(`https://api.opendota.com/api/players/${this.state.searchValue}/recentMatches`)
        .then((response2) => {
          this.setState({
            playerHistory: response2.data
          })
        })
    }
  }

  getSearchValueFn = (e) => {
    this.setState({
      searchValue: e
    });
  }

  render() { 
    const { PlayerStats,playerHistory,accountID } = this.state;
    return (
      <div className="player-div">
        <div className="searchPlayer" style={{display: this.state.showPlayerStat ? 'none' : 'flex' }}>
          <input className="searchPlayerTxt" onKeyPress={this.handleKeyEnter} onChange={e => this.getSearchValueFn(e.target.value)} type="text" title="Search Player" placeholder="Enter Account ID and Press Enter." />    
        </div>
        {(this.state.showPlayerStat) ? <Player key={accountID} playerStatObj={PlayerStats} historyDataArr={playerHistory} /> : null}
      </div>
    );
  }
}
 
export default PlayerSearch;