import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from "../actions";
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };
}

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleSubmit = e => {
    this.props.addSmurf(this.state.smurf)
  }

  handleInputChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
            {this.props.smurfs.map(smurf => (
              <div className="smurf">
              <hr />
                <p>{smurf.name}</p>
                <p>{smurf.age} years old</p>
                <p>{smurf.height} tall</p>
                <hr/>
              </div>
            ))}
        </div>
        <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className="name"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="age"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="height"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="formButton" type="submit">Add to the village</button>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
