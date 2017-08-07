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
        { console.log(props) }
        <nav>
            <div className="nav-wrapper">
                <Col s={12} className="brand-logo brand-logo-header">Select a Session</Col>
                <Col offset="s10" className="close-button">
                    <Icon>close</Icon>
                </Col>
            </div>
        </nav>
        <Col m={6} s={12}>
            <Card className="darken-1" title='Chemistry Session' textClassName='grey-text'>
                15 minutes Zoom Call
            </Card>
        </Col>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(SessionSelection);