import * as React from 'react';
import './App.css';

import { State } from './State';
import { Display } from './Display';

const logo = require('./logo.svg');

class App extends React.Component<{}, State> {

  remove(key: string) {
    
    this.setState({
      data: this.state.data.filter(x => x.key !== key)
    });

    this.forceUpdate();
  }

  render() {
    let displays: JSX.Element[] = [];

    if (this.state != null) {
      this.state.data.forEach(d => {
        let s = new State();

        displays.push(
          (
            <Display key={d.key} Data={d.data} State={s} OnClose={() => this.remove(d.key)} />
          )
        );
      });
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dumper Connected: {this.state !== null && this.state.connected ? 'true' : 'false'}</h2>
        </div>
        <div>
          {displays}
        </div>
      </div>
    );
  }
}

export default App;
