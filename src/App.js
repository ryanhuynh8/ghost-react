import React, {Component} from 'react';
import logo from './logo.svg';
import {ConnectedRouter} from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'

class App extends Component {
    render() {
        return (
            <div>
                {/*<header>*/}
                    {/*<Link to="/">Home</Link>*/}
                    {/*<Link to="/about-us">About</Link>*/}
                {/*</header>*/}

                <main>
                    <Route exact path="/" component={Home} />
                </main>
            </div>
        );
    }
}

export default App;
