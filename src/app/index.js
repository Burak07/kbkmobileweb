import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor(props) {
      super();
      this.state = {
          age: 5,
      };

  }

  onMakeOlder() {
          this.setState({
              age: this.state.age + 3
          });
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} age={this.state.age}>
                         <p>aaaaaaaaaaa</p>
                        </Home>
                           <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
