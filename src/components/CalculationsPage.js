import React, {Component} from 'react';

class CalculationsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let calculationsPageTemplate = (
      <div className="calculations-page" />
    );

    if (this.props.isVisible) {
      calculationsPageTemplate = (
        <div className="calculations-page panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.name}</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">{this.props.destinyNumber}</span>
                Destiny Number
              </li>
              <li className="list-group-item">
                <span className="badge">{this.props.birthForceNumber}</span>
                Birth Force Number
              </li>
              <li className="list-group-item">
                <span className="badge">{this.props.heartsDesireNumber}</span>
                Heart's Desire Number
              </li>
              <li className="list-group-item">
                <span className="badge">{this.props.personalityNumber}</span>
                Personality Number
              </li>
              <li className="list-group-item">
                <span className="badge">{this.props.realityNumber}</span>
                Reality Number
              </li>
            </ul>
          </div>
        </div>
      );
    }

    return calculationsPageTemplate;
  }
}

CalculationsPage.propTypes = {
  isVisible: React.PropTypes.bool,
  name: React.PropTypes.string,
  destinyNumber: React.PropTypes.number,
  birthForceNumber: React.PropTypes.number,
  heartsDesireNumber: React.PropTypes.number,
  personalityNumber: React.PropTypes.number,
  realityNumber: React.PropTypes.number
};

export default CalculationsPage;