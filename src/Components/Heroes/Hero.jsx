import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroID: parseInt(this.props.match.params.heroID),
      heroStats: {}
    }
  }

  componentDidMount(){
    let temp;
    const { heroID } = this.state;
    axios
      .get('https://api.opendota.com/api/heroStats')
      .then((response) => {
        temp = response.data;
        temp.forEach((hero) => {
          if(hero.id === heroID){
            this.setState({
              heroStats: hero
            })
          }
        })
      })
  }

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
    const { heroStats } = this.state;
    return (  
      <div className="heroStat">
        <h1 className="hero-name">{heroStats.localized_name}</h1>
          <div className="hero-header">
            <div className="hero-image">
                <img src={"https://api.opendota.com"+heroStats.img} alt={heroStats.localized_name}/>
            </div>
            <div className="hero-basic-stats">
                <div className="inline">
                    <h1><span>{heroStats.attack_type}</span>{heroStats.roles}</h1>
                    <h1><span>Primary Attribute: </span>{this.heroPrimaryAttr(heroStats.primary_attr)}</h1>
                </div>
                <div className="inline">
                    <h1>
                        <span className="strength">str &bull; {heroStats.base_str}</span>
                        <span className="agility">agi &bull; {heroStats.base_agi}</span>
                        <span className="intelligence">int &bull; {heroStats.base_int}</span>
                    </h1>
                </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="inline">
                <table className="hero-table-stats">
                  <tbody>
                    <tr><td>Health:</td><td>{heroStats.base_health}</td></tr>
                    <tr><td>Health Regen:</td><td>{heroStats.base_health_regen}</td></tr>
                    <tr><td>Mana:</td><td>{heroStats.base_mana}</td></tr>
                    <tr><td>Mana Regen:</td><td>{heroStats.base_mana_regen}</td></tr>
                    <tr><td>Armor:</td><td>{heroStats.base_armor}</td></tr>
                    <tr><td>Magic Resist:</td><td>{heroStats.base_mr}</td></tr>
                    <tr><td>Minimum Attack:</td><td>{heroStats.base_attack_min}</td></tr>
                    <tr><td>Maximum Attack:</td><td>{heroStats.base_attack_max}</td></tr>
                  </tbody>
                </table>
                <table className="hero-table-stats">
                    <tbody>
                      <tr><td>Strength Gain:</td><td>{heroStats.str_gain}</td></tr>
                      <tr><td>Agility Gain:</td><td>{heroStats.agi_gain}</td></tr>
                      <tr><td>Intelligence Gain:</td><td>{heroStats.int_gain}</td></tr>
                      <tr><td>Attack Range:</td><td>{heroStats.attack_range}</td></tr>
                      <tr><td>Projectile Speed:</td><td>{heroStats.projectile_speed}</td></tr>
                      <tr><td>Attack Rate:</td><td>{heroStats.attack_rate}</td></tr>
                      <tr><td>Move Speed:</td><td>{heroStats.move_speed}</td></tr>
                      <tr><td>Turn Rate:</td><td>{heroStats.turn_rate}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Link to="/">
          <button className="goBack-btn">Go Back</button>
        </Link>
      </div>
    );
  }
}
 
export default Hero;