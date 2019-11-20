import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroRow extends Component {

  heroPrimaryAttr = (attr) => {
    if(attr === 'agi'){
      return('Agility');
    }else if(attr === 'str'){
      return('Strength');
    }else{
      return('Intelligence');
    }
  }

  render() { 
    const { id, heroName, heroIcon, heroAttr } = this.props;
    return ( 
      <tr className="heroRow" id={id}>
        <td>{id}</td>
        <td><img src={"https://api.opendota.com" + heroIcon} alt={heroName} /></td>
        <td>
          <Link to={"/heroes/" + id}>
            {heroName}
          </Link>
        </td>
        <td>{this.heroPrimaryAttr(heroAttr)}</td>
      </tr>
    );
  }
}
 
export default HeroRow;