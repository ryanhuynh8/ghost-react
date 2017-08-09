import React, {Component} from 'react';
import logo from './logo.svg';
import {ConnectedRouter} from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import SessionSelection from './containers/SessionSelection'
import DateSelection from './containers/DateSelection'
import TimeSelection from './containers/TimeSelection'

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sessionSelect" component={SessionSelection} />
                    <Route exact path="/dateSelect" component={DateSelection} />
                    <Route exact path="/timeSelect" component={TimeSelection} />
                </main>
            </div>
        );
    }
}

export default App;
