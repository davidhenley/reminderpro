import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    text: ''
  }

  addReminder() {
    if (this.state.text.trim()) {
      this.props.addReminder(this.state.text.trim());
    }
    this.setState({ text: '' });
  }

  deleteReminder(reminder) {
    this.props.deleteReminder(reminder);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder, i) =>
          <li key={i} className="list-group-item">
            <div className="list-item">{reminder.text}</div>
            <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder)}>
              &#x2715;
            </div>
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              value={this.state.text}
              onChange={evt => this.setState({ text: evt.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={() => this.addReminder()}
            className="btn btn-success">
              Add Reminder
          </button>
        </div>

        {this.renderReminders()}
      </div>
    );
  }
}

const mapStateToProps = ({ reminders }) => {
  return { reminders };
};

export default connect(mapStateToProps, actions)(App);
