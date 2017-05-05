import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    text: '',
    dueDate: ''
  }

  addReminder() {
    if (this.state.text.trim() && this.state.dueDate.trim()) {
      this.props.addReminder(this.state.text.trim(), this.state.dueDate);
    }
    this.setState({
      text: '',
      dueDate: ''
    });
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
            <div className="list-item">
              <div>{reminder.text}</div>
              <div><em>{reminder.dueDate}</em></div>
            </div>
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
            <input
              className="form-control"
              type="date"
              value={this.state.dueDate}
              onChange={evt => this.setState({ dueDate: evt.target.value })}
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
