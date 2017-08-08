import React, {Component} from 'react';
import logo from './logo.svg';
import {ConnectedRouter} from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import Main from './containers/Main'
import SessionSelection from './containers/SessionSelection'
import PageTransition from 'react-router-page-transition';

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <Route path="/" component={Home}>
                        <Route path="/detail/:itemId" component={SessionSelection} />
                    </Route>
                </main>
            </div>
        );
    }
}

export default App;
