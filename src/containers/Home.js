/**
 * Created by huyhuynh on 8/1/17.
 */
import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Row, Button, Input, Preloader} from 'react-materialize'
import { FETCH_SESSION_LIST, FETCH_SESSION_LIST_SUCCESS, AUTH_LOGIN } from '../store/actionTypes'
import { RouteTransition } from 'react-router-transition'
import Config from '../config'
import i18n from '../i18n'
import Features from '../featuresList'

if (process.env.REACT_APP_COUNTRY === 'Indonesia') {
    var navigatePayment = () => {
        if (Features.payment) {
            alert('Welcome to Payment');
        } else {
            alert('This feature is not enabled for this country.')
        }

        return null;
    };

    var navigateFundTransfer = () => {
        if (Features.fundTransfer) {
            alert('Welcome to Fund Transfer')
        } else {
            alert('This feature is not enabled for this country.')
        }

        return null;
    };
}

class Home extends Component {
    processLogin() {
        this.props.login(this.id, this.pin);
    }

    idChangeHandler(e) {
        this.id = e.target.value;
    }

    pinChangeHandler(e) {
        this.pin = e.target.value;
    }

    render() {
        const idLabel = `${Config.country} ID`;
        return (<RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{opacity: 0}}
            atLeave={{opacity: 0}}
            atActive={{opacity: 1}}
        >
            <div className="center-content">
                Internet Banking System for {Config.country}
                <br/>
                The currency is {Config.currency}
                <br/>
                Please log in
                <Row>
                    <Input s={6} label={idLabel} onChange={(e) => this.idChangeHandler(e)}/>
                    <Input s={6} label="PIN" onChange={(e) => this.pinChangeHandler(e)}/>
                </Row>
                <Row>
                    { this.props.isProcessingLogin ?
                        <Preloader size='small'/> :
                        <Button onClick={() => this.processLogin()}style={{textTransform: 'none'}}>
                            Log in
                        </Button>
                    }
                </Row>
                <Row>
                    Logged in. Session token is { this.props.token }
                </Row>
                { this.props.showMenuBar &&
                    <Row>
                        <Button onClick={() => this.props.navigateAndFetchSession()} style={{textTransform: 'none'}}>
                            {i18n.buttons.internetBanking}
                        </Button>
                        &nbsp;
                        <Button onClick={() => navigatePayment()} style={{textTransform: 'none'}}>
                            {i18n.buttons.payment}
                        </Button>
                        &nbsp;
                        <Button onClick={() => navigateFundTransfer()} style={{textTransform: 'none'}}>
                            {i18n.buttons.fundTransfer}
                        </Button>
                        &nbsp;
                        <Button onClick={() => this.props.navigateAndFetchSession()} style={{textTransform: 'none'}}>
                            {i18n.buttons.transactionHistory}
                        </Button>
                    </Row>
                }
            </div>
        </RouteTransition>)
    }
}

const mapStateToProps = state => {
    return {
        isProcessingLogin: state.authReducer.isProcessingLogin,
        token: state.authReducer.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        navigateAndFetchSession: () => {
            dispatch({type: FETCH_SESSION_LIST});
            return push('/sessionSelect');
        },
        login: (id, pin) => {
            dispatch({type: AUTH_LOGIN, payload: { ID: id, PIN: pin }});
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);