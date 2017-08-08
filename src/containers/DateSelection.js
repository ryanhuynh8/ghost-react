/**
 * Created by huyhuynh on 8/8/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon, Row} from 'react-materialize'
import { RouteTransition } from 'react-router-transition';


const DateSelection = props => (
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
                        <Col className="back-button" onClick={() => props.navigateBackSessionList()}>
                            <Icon>arrow_back</Icon>
                        </Col>
                        <Col s={12} className="brand-logo session-detail">
                            <Row className="session-detail">{props.selectedSession.name}</Row>
                            <Row className="session-detail grey-text text-lighten-1">{props.selectedSession.description}</Row>
                        </Col>
                        <Col offset="s10" className="close-button" onClick={() => props.navigateBackHome()}>
                            <Icon>close</Icon>
                        </Col>
                    </div>
                </nav>
            </div>
            <div className="nav-container">
                <nav>
                    <div className="nav-wrapper">
                        <Col className="back-button" onClick={() => props.navigateBackSessionList()}>
                            <Icon>arrow_back</Icon>
                        </Col>
                        <Col s={12} className="brand-logo session-detail">
                            <Row className="session-detail">{props.selectedSession.name}</Row>
                            <Row className="session-detail grey-text text-lighten-1">{props.selectedSession.description}</Row>
                        </Col>
                        <Col offset="s10" className="close-button" onClick={() => props.navigateBackHome()}>
                            <Icon>close</Icon>
                        </Col>
                    </div>
                </nav>
            </div>
            <div className="session-list">
                {/*{ props.sessionList.map((item, i) => {*/}
                    {/*return <Col m={6} s={12} key={i}>*/}
                        {/*<Card className="darken-1" title={item.name} textClassName='grey-text' >*/}
                            {/*{item.description}*/}
                            {/*<span className="session-price">{item.price ? '$' + item.price : ''}</span>*/}
                        {/*</Card>*/}
                    {/*</Col>*/}
                {/*})}*/}
            </div>
        </div>
    </RouteTransition>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateBackHome: () => push('/'),
    navigateBackSessionList: () => push('/sessionSelect')
}, dispatch);

const mapStateToProps = state => ({
    dateList: state.dateReducer.dateList,
    selectedSession: state.sessionReducer.selectedSession
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateSelection);