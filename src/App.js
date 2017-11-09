import React, {Component} from 'react';
import logo from './logo.svg';
import {ConnectedRouter} from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import BookingSummary from './containers/BookingSummary'

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bookingSummary" component={BookingSummary} />
                </main>
            </div>
        );
    }
}

export default App;
