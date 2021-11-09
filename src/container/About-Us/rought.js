import React, { Component } from 'react';
import './team.css';
import axios from "axios";

class Team2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: []
    };
}

  componentDidMount() {
    axios.get(`https://buskarao.thebloodraw.com/api/about`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
    render() {
      // const valuesArray = JSON.parse(this.state.persons.about['image']);
      // const valuesArray = JSON.stringify(this.state.persons.team);
      
      // var lund = this.state.persons;
      console.log(this.state.persons)
        return (
          <ul>
        { this.state.persons.map(person => <li key={person.id_team_members} >{person.member_name}</li>)}
      </ul>
      // <div></div>
        );
    }
}

export default Team2;