import React, { Component } from 'react';
import PlayerMatches from './PlayerMatches';

class Player extends Component {
  render() { 
    const { playerStatObj,historyDataArr } = this.props;
    return (
      <React.Fragment>
        <div className="player-info-header">
          <div className="player-avatar">
            <img src={playerStatObj.profile.avatarfull} alt="avatar" />
          </div>
          <div className="row-header">
            <div className="inline-header">
              <div className="player-name">
                <h1>{playerStatObj.profile.personaname}</h1>
              </div>
              <div className="player-id">
                <div className="id">
                  <h1><span>Account ID:</span>{playerStatObj.profile.account_id}</h1>
                </div>
                <div className="id">
                  <h1><span>Steam ID:</span><a href=".profile.profileurl" target="_blank">{playerStatObj.profile.steamid}</a></h1>
                </div>
              </div>
              <div className="last-login">
                <h1><span>Last Login: &emsp;</span>{playerStatObj.profile.last_login}</h1>
              </div> 
              <div className="ccode-emmr">
                <div className="ccode">
                  <h1><span>Country: &emsp;</span>{playerStatObj.profile.loccountrycode}</h1>
                </div>
                <div className="emmr">
                  <h1><span>Estimated MMR: &emsp;</span>{playerStatObj.mmr_estimate.estimate}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player-info">
          <table id="match-history">
            <caption><h1>Recent Matches</h1></caption>
            <thead>
                <tr>
                  <th>Match ID</th>
                  <th>Position</th>
                  <th>Result</th>
                  <th>Duration</th>
                  <th><h1>K</h1></th>
                  <th><h1>D</h1></th>
                  <th><h1>A</h1></th>
                  <th>XPM</th>
                  <th>GPM</th>
                  <th>Last Hits</th>
                </tr>
            </thead>
            <tbody id="match-history-tbody"> 
              {historyDataArr.map((historyData) => (
                <PlayerMatches key={historyData.match_id} recentMatchesObj={historyData} />
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>  
    );
  }
}
 
export default Player;