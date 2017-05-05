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

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
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
      </div>
    );
  }
}

export default connect(null, actions)(App);
