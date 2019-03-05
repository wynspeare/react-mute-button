import React, { Component } from 'react';
import './App.css';
import MuteButton from './components/MuteButton/MuteButton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'


library.add(faVolumeMute, faVolumeUp)

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isMuted : false
    }
  }

  _toggleMuteButton() {
    this.setState ({
      isMuted: !this.state.isMuted
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>MUTE ME</h3>

        <MuteButton isMuted={this.state.isMuted} _toggleMuteButton={this._toggleMuteButton.bind(this)} />

        </header>
      </div>
    );
  }
}

export default App;
