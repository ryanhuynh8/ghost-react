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
import { FETCH_SESSION_LIST, FETCH_SESSION_LIST_SUCCESS } from '../store/actionTypes'
import { RouteTransition } from 'react-router-transition'
import Config from '../config'
import i18n from '../i18n'
import Features from '../featuresList'

const Home = props => (
    <RouteTransition
        pathname={props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
    >
    <div className="center-content">
        Internet Banking System for { Config.country }
        <br />
        The currency is { Config.currency }
        <br />
        <Button onClick={() => props.navigateAndFetchSession()} style={{textTransform: 'none'}}>
            { i18n.buttons.internetBanking }
        </Button>
        &nbsp;
        <Button onClick={() => props.navigatePayment()} style={{textTransform: 'none'}}>
            { i18n.buttons.payment }
        </Button>
        &nbsp;
        <Button onClick={() => props.navigateFundTransfer()} style={{textTransform: 'none'}}>
            { i18n.buttons.fundTransfer }
        </Button>
        &nbsp;
        <Button onClick={() => props.navigateAndFetchSession()} style={{textTransform: 'none'}}>
            { i18n.buttons.transactionHistory }
        </Button>
    </div>
    </RouteTransition>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateAndFetchSession: () => {
        dispatch({type: FETCH_SESSION_LIST});
        return push('/sessionSelect');
    },

    navigatePayment: () => {
        if (Features.payment) {
            alert('Welcome to Payment');
        } else {
            alert('This feature is not enabled for this country.')
        }

        return null;
    },

    navigateFundTransfer: () => {
        if (Features.fundTransfer) {
            alert('Welcome to Fund Transfer')
        } else {
            alert('This feature is not enabled for this country.')
        }

        return null;
    }
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);