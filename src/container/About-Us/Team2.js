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
  axios.get(`https://buskarao.thebloodraw.com/api/team`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
}
  render() {
    return (
      <div className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h2>Our Expert Team</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
          </div>
          <div className="row">
          { this.state.persons.map(person => 
            <div className="col-md-4">
            <div className="team-member">
              <div className="photo">
                <img src={person.member_image} className="img-fluid" />
              </div>
              <h3>{person.member_name}</h3>
              <hr />
              <h5>{person.member_designation}</h5>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}
              <hr />
              <div className="follow-on">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          )}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Team2;