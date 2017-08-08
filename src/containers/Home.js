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
import MockApiService from '../services/apiService'
import { RouteTransition } from 'react-router-transition';

const Home = props => (
    <RouteTransition
        pathname={props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
    >
    <div className="center-content">
        { console.log(props) }
        <Button onClick={() => props.navigateAndFetchSession()}>
            BOOK SESSION
        </Button>
    </div>
    </RouteTransition>
);

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