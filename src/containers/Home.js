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
import { FETCH_SESSION_LIST_SUCCESS } from '../store/actionTypes'
import MockApiService from '../services/ApiService'

const Home = props => (
    <div className="center-content">
        <Button onClick={() => props.navigateAndFetchSession()}>
            BOOK SESSION
        </Button>
    </div>
);

const thisPush = push;

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateAndFetchSession: () => {
        MockApiService.getSessionList().then(data => {
            dispatch({type: FETCH_SESSION_LIST_SUCCESS, payload: data});
        });
        return push('/sessionSelect');
    }
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);