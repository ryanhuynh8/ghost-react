/**
 * Created by huyhuynh on 8/1/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button} from 'react-materialize'
import store from '../store'
import { FETCH_SESSION_LIST } from '../store/actionTypes'

const navigateAndFetchSession = () => {
    store.dispatch(push('/sessionSelect'))
    store.dispatch({type: FETCH_SESSION_LIST});
};

const Home = props => (
    <div className="center-content">
        <Button onClick={() => navigateAndFetchSession()}>
            BOOK SESSION
        </Button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);