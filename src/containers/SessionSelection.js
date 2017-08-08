/**
 * Created by huyhuynh on 8/7/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Col, Icon} from 'react-materialize'


const SessionSelection = props => (
    <div className="transition-item">
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