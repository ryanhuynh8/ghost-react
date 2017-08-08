/**
 * Created by huyhuynh on 8/7/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon} from 'react-materialize'
import { RouteTransition } from 'react-router-transition';


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
                <Card className="darken-1" title={item.name} textClassName='grey-text' >
                    {item.description}
                </Card>
            </Col>
        })}
        </div>
    </div>
    </RouteTransition>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateBackHome: () => push('/')
}, dispatch);

const mapStateToProps = state => ({
    sessionList: state.sessionReducer.sessionList
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionSelection);