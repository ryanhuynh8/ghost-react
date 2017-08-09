/**
 * Created by huyhuynh on 8/9/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon, Row, Input} from 'react-materialize'
import {RouteTransition} from 'react-router-transition';
import {SELECT_DATE, FETCH_TIME_LIST, UPDATE_TIME_FORMAT} from '../store/actionTypes'

const TimeSelection = props => (
    <RouteTransition
        pathname={props.location.pathname}
        atEnter={{translateX: 100}}
        atLeave={{translateX: -100}}
        atActive={{translateX: 0}}
        mapStyles={styles => ({transform: `translateX(${styles.translateX}%)`})}
    >
        <div className="">
            <div className="nav-container">
                <nav className="big-nav">
                    <div className="nav-wrapper">
                        <Col className="back-button" onClick={() => props.navigateBackDateList()}>
                            <Icon>arrow_back</Icon>
                        </Col>
                        <Col s={12} className="brand-logo session-detail">
                            <Row className="session-detail">{props.selectedSession.name}</Row>
                            <Row className="session-detail grey-text text-lighten-5 small-text">{props.selectedSession.description}</Row>
                            <Row className="session-detail grey-text text-lighten-5">{props.selectedDate.dayOfWeek + ' ' + props.selectedDate.date}</Row>
                        </Col>
                        <Col offset="s10" className="close-button" onClick={() => props.navigateBackHome()}>
                            <Icon>close</Icon>
                        </Col>
                    </div>
                </nav>
            </div>
            <div className="nav-container">
                <nav className="big-nav">
                    <div className="nav-wrapper">
                        <Col s={12} className="brand-logo session-detail">
                            <Row className="session-detail">Select a Day</Row>
                            <Row className="small-text session-detail yellow-text text-lighten-1">Timezone: GMT+1 (London)</Row>
                            <Row className="session-detail">
                                <Input name='abc' onLabel="24 hour" offLabel="am / pm" type='switch' value='1' onClick={() => props.updateTimeFormat()} />
                            </Row>
                        </Col>
                    </div>
                </nav>
            </div>
            <div className="session-list">
                { props.timeList.map((item, i) => {
                    return <Col m={6} s={12} key={i}>
                        <Card className="darken-1 time-card" title={item.time} textClassName='grey-text' />
                    </Col>
                })}
            </div>
        </div>
    </RouteTransition>
);

const selectDate = (date) => {
    console.log(date);
    return dispatch => {
        dispatch({type: SELECT_DATE, payload: date});
        dispatch({type: FETCH_TIME_LIST});
        dispatch(push('/timeSelect'));
    }
};

let is24Hour = false;
const updateTimeFormat = () => {
    is24Hour = !is24Hour;
    return dispatch => {
        dispatch({type: FETCH_TIME_LIST, payload: is24Hour});
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateBackHome: () => push('/'),
    navigateBackDateList: () => push('/dateSelect'),
    selectDate,
    updateTimeFormat
}, dispatch);

const mapStateToProps = state => ({
    timeList: state.timeReducer.timeList,
    selectedDate: state.dateReducer.selectedDate,
    selectedSession: state.sessionReducer.selectedSession
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSelection);