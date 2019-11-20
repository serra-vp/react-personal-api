import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import HeroRow from './HeroRow';

class Heroes extends Component {
  constructor(){
    super();
    this.state = {
      heroes: []
    };
  }

  componentDidMount(){
    axios
      .get('https://api.opendota.com/api/heroStats')
      .then((response) => (
        this.setState({
          heroes: response.data
        })
      ))
  }

  render() { 
    const { heroes } = this.state;
    return (  
      <div className="heroes-div"> 
        <table className="hero-list" >
          <caption>
            <h1>Dota 2 Heroes</h1>
            <Link className="h1-reset" to="/">Reset</Link>
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Hero Name</th>
              <th>Attribute</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => (
              <HeroRow key={hero.id} id={hero.id} heroName={hero.localized_name} heroIcon={hero.icon} heroAttr={hero.primary_attr} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Heroes;
 