import React, { Component } from 'react';

class PlayerMatches extends Component {

  matchResult = (res) => {
    if(res === false){
        return "Lose";
    }else{
        return "Win";
    }
  }

  playerPos = (pos) => {
    if(pos === 1){
        return "Safe Lane";
    }else if(pos === 2){
        return "Mid Lane";
    }else if(pos === 3){
        return "Offlane";
    }else if(pos === 4){
        return "Support";
    }else{
        return "Hard Support";
    }
}

  render() { 
    const { recentMatchesObj } = this.props
    let duration = recentMatchesObj.duration /60;
    return (  
      <tr>
        <td>{recentMatchesObj.match_id}</td>
        <td>{this.playerPos(recentMatchesObj.player_slot)}</td>
        <td>{this.matchResult(recentMatchesObj.radiant_win)}</td>
        <td>{duration.toFixed(2)} mins</td>
        <td>{recentMatchesObj.kills}</td>
        <td>{recentMatchesObj.deaths}</td>
        <td>{recentMatchesObj.assists}</td>
        <td>{recentMatchesObj.xp_per_min}</td>
        <td>{recentMatchesObj.gold_per_min}</td>
        <td>{recentMatchesObj.last_hits}</td>
      </tr>
    );
  }
}
 
export default PlayerMatches;