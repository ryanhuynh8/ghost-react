/**
 * Created by hideki on 9/8/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon, Row, Input, Button} from 'react-materialize'
import {RouteTransition} from 'react-router-transition';
import {SELECT_DATE, FETCH_TIME_LIST, UPDATE_TIME_FORMAT, SELECT_TIME} from '../store/actionTypes'

const BookingSummary = props => (
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
                        <Col className="back-button" onClick={() => props.navigateBackTimeList()}>
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
            <div className="nav-container full-nav">
                <nav className="full-nav">
                    <div className="nav-wrapper">
                        <Col s={12} className="brand-logo session-detail">
                            <Row className="session-detail large-text">{ props.selectedTime.time }</Row>
                            <Row className="small-text session-detail yellow-text text-lighten-1">Timezone: GMT+1 (London)</Row>
                            <p />
                            <Row>
                                <Button className="booking-btn white black-text" onClick={() => props.navigateBackHome()}>CANCEL</Button>
                                <Button className="booking-btn blue white-text" onClick={() => props.navigateBackHome()}>BOOK</Button>
                            </Row>
                        </Col>
                    </div>
                </nav>
            </div>
        </div>
    </RouteTransition>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateBackHome: () => push('/'),
    navigateBackTimeList: () => push('/timeSelect'),
}, dispatch);

const mapStateToProps = state => ({
    selectedDate: state.dateReducer.selectedDate,
    selectedSession: state.sessionReducer.selectedSession,
    selectedTime: state.timeReducer.selectedTime
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingSummary);