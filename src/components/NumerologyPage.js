import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/numerology.css';
import CalculationsPage from './CalculationsPage';
import Numerology from '../core/numerology';

class NumerologyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      isVisible: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ isVisible: true });
    event.preventDefault();
  }

  getName() {
    return this.state.firstName + ' ' + this.state.lastName;
  }

  getIsVisible() {
    return this.state.isVisible;
  }

  getDestinyNumber() {
    let n = new Numerology();
    return n.getDestinyNumber(this.getName());
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
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
              <div className="btn-group">
                <button type="submit" className="btn btn-default">
                  calculate
                </button>
              </div>
            </form>
          </div>
        </div>

        <CalculationsPage isVisible={this.getIsVisible()} name={this.getName()} destinyNumber={this.getDestinyNumber()} />
      </div>
    );
  }
}

export default NumerologyPage;