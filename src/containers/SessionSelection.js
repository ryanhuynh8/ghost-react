/**
 * Created by huyhuynh on 8/7/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon} from 'react-materialize'


const SessionSelection = props => (
    <div>
        <nav>
            <div className="nav-wrapper">
                <Col s={12} className="brand-logo brand-logo-header">Select a Session</Col>
                <Col offset="s10" className="close-button">
                    <Icon>close</Icon>
                </Col>
            </div>
        </nav>
        { props.sessionList.length }
        { props.sessionList.map(function(item, i) {
            console.log(item);
            <Col m={6} s={12}>
                <Card className="darken-1" title='Chemistry Session' textClassName='grey-text'>
                    15 minutes Zoom Call
                </Card>
            </Col>
        })}
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const mapStateToProps = state => ({
    sessionList: state.sessionReducer.sessionList
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionSelection);