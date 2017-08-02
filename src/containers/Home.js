/**
 * Created by huyhuynh on 8/1/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar'

const Home = props => (
    <div className="gh-viewport">
        {/*<h1>Home</h1>*/}
        {/*<p>Welcome home!</p>*/}
        {/*<button onClick={() => props.changePage()}>Go to about page via redux</button>*/}
        <NavigationBar/>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);