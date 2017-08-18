import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => {
                return <p>Quoth the Raven, 404</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
