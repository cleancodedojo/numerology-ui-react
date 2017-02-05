import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/numerology.css';
import CalculationsPage from './CalculationsPage';
import Numerology from 'numerology-core';

class NumerologyPage extends Component {
  constructor(props) {
    super(props);

    this.numerology = new Numerology();

    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      isVisible: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ isVisible: true });
    event.preventDefault();
  }

  getName() {
    return this.state.firstName + ' ' + this.state.lastName;
  }

  getDateOfBirth() {
    return this.state.dateOfBirth;
  }

  getIsVisible() {
    return this.state.isVisible;
  }

  getDestinyNumber() {
    return this.numerology.getDestinyNumber(this.getName());
  }

  getBirthForceNumber() {
    return this.numerology.getBirthForceNumber(this.getDateOfBirth());
  }

  getHeartsDesireNumber() {
    return this.numerology.getHeartsDesireNumber(this.getName());
  }

  getPersonalityNumber() {
    return this.numerology.getPersonalityNumber(this.getName());
  }

  getRealityNumber() {
    return this.numerology.getRealityNumber(this.getName(), this.getDateOfBirth());
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleDateOfBirthChange(event) {
    this.setState({ dateOfBirth: event.target.value });
  }

  render() {
    return (
      <div className="numerology-page container-fluid">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Numerology</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group col-lg-8">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control" id="first-name"
                  placeholder="first name given during birth"
                  value={this.state.firstName} onChange={this.handleFirstNameChange} />
              </div>
              <div className="input-group col-lg-8">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" id="last-name" placeholder="last name given during birth"
                  value={this.state.lastName} onChange={this.handleLastNameChange} />
              </div>
              <div className="input-group col-lg-8">
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="text" className="form-control" id="date-of-name" placeholder="mm-dd-yyyy"
                  value={this.state.dateOfBirth} onChange={this.handleDateOfBirthChange} />
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-default">
                  calculate
                </button>
              </div>
            </form>
          </div>
        </div>

        <CalculationsPage isVisible={this.getIsVisible()} name={this.getName()} 
          destinyNumber={this.getDestinyNumber()}
          birthForceNumber={this.getBirthForceNumber()} 
          heartsDesireNumber={this.getHeartsDesireNumber()}
          personalityNumber={this.getPersonalityNumber()}
          realityNumber={this.getRealityNumber()} />
      </div>
    );
  }
}

export default NumerologyPage;