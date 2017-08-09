/**
 * Created by huyhuynh on 8/7/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon} from 'react-materialize'
import { RouteTransition } from 'react-router-transition';
import { SELECT_SESSION, FETCH_SESSION_DAY_LIST, FETCH_SESSION_DAY_LIST_SUCCESS }from '../store/actionTypes'

const SessionSelection = props => (
    <RouteTransition
        pathname={props.location.pathname}
        atEnter={{ translateX: 100 }}
        atLeave={{ translateX: -100 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
    >
    <div className="">
        <div className="nav-container">
            <nav>
                <div className="nav-wrapper">
                    <Col s={12} className="brand-logo brand-logo-header">Select a Session</Col>

                    <Col offset="s10" className="close-button" onClick={() => props.navigateBackHome()}>
                        <Icon>close</Icon>
                    </Col>
                </div>
            </nav>
        </div>
        <div className="session-list">
        { props.sessionList.map((item, i) => {
            return <Col m={6} s={12} key={i}>
                <Card className="darken-1" title={item.name} textClassName='grey-text' onClick={() => props.selectSession(item)}>
                    {item.description}
                    <span className="session-price">{item.price ? '$' + item.price : ''}</span>
                </Card>
            </Col>
        })}
        </div>
    </div>
    </RouteTransition>
);

const selectSession = (session) => {
    console.log(session);
    return dispatch => {
        dispatch({type: SELECT_SESSION, payload: session});
        dispatch({type: FETCH_SESSION_DAY_LIST});
        dispatch(push('/dateSelect'));
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    selectSession,
    navigateBackHome: () => push('/'),
}, dispatch);

const mapStateToProps = state => ({
    sessionList: state.sessionReducer.sessionList
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionSelection);