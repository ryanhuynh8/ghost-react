/**
 * Created by huyhuynh on 8/2/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const NavigationBar = props => (
    <nav id="foo931" className="ember-view gh-nav">
            <header id="foo942" role="button" className="gh-nav-menu ember-view closed">
                <div className="gh-nav-menu-icon" style={{backgroundImage: 'url(/ghost/img/ghosticon.jpg)'}}></div>
                <div className="gh-nav-menu-details">
                    <div className="gh-nav-menu-details-blog">{ props.blogName }</div>
                    <div className="gh-nav-menu-details-user">{ props.fullName }</div>
                </div>
                <i className="icon-arrow"></i>
            </header>
            <section className="gh-nav-body">
                <section className="gh-nav-search">
                    <div id="foo1031" className="gh-nav-search-input ember-view">
                        <div id="foo1051"
                             className="ember-power-select ember-view ember-basic-dropdown ember-basic-dropdown--in-place">
                            <div aria-haspopup="true"
                                 className="ember-basic-dropdown-trigger ember-power-select-trigger"
                                 aria-controls="ember-basic-dropdown-content-ember1051" aria-disabled="false"
                                 aria-expanded="false" aria-pressed="false" id="foo-power-select-trigger-ember1042"
                                 role="button" tabIndex="0">
                                <div id="foo1060" className="ember-view">
                                    <div className="ember-power-select-search">
                                        <input type="search" autoComplete="off" autoCorrect="off" autoCapitalize="off"
                                               spellCheck="false" role="combobox" placeholder="Search"/>
                                        <button className="gh-nav-search-button" data-ember-action="1061"><i
                                            className="icon-search"></i><span className="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ul className="gh-nav-list gh-nav-main">
                    <li><a id="foo1062" href="/ghost/editor/" className="ember-view gh-nav-main-editor"><i
                        className="icon-pen"></i>New Post</a></li>
                    <li><a id="foo1090" href="/ghost/" className="ember-view gh-nav-main-content"><i
                        className="icon-content"></i>Content</a></li>
                    <li><a id="foo1091" href="/ghost/team/" className="ember-view gh-nav-main-users"><i
                        className="icon-team"></i>Team</a></li>
                </ul>
                <ul className="gh-nav-list gh-nav-settings">
                    <li className="gh-nav-list-h">Settings</li>
                    <li><a id="foo1108" href="/ghost/settings/general/"
                           className="ember-view gh-nav-settings-general"><i className="icon-settings"></i>General</a>
                    </li>
                    <li><a id="foo1134" href="/ghost/settings/navigation/"
                           className="ember-view gh-nav-settings-navigation"><i className="icon-compass"></i>Navigation</a>
                    </li>
                    <li><a id="foo1151" href="/ghost/settings/tags/" className="ember-view gh-nav-settings-tags"><i
                        className="icon-tag"></i>Tags</a></li>
                    <li><a id="foo1176" href="/ghost/settings/code-injection/"
                           className="ember-view gh-nav-settings-code-injection"><i className="icon-code"></i>Code
                        Injection</a></li>
                    <li><a id="foo1193" href="/ghost/settings/apps/" className="ember-view gh-nav-settings-apps"><i
                        className="icon-box"></i>Apps</a></li>
                    <li><a id="foo1217" href="/ghost/settings/labs/" className="ember-view gh-nav-settings-labs"><i
                        className="icon-labs"></i>Labs</a></li>
                </ul>
                <div id="pro-cta" className="gh-nav-trial-cta">
                    <script src="https://my.ghost.org/pro-cta.js?lts=true&amp;id=596818"></script>
                    <ul className="gh-nav-list gh-nav-pro">
                        <li className="gh-nav-list-h">Ghost(Pro)</li>
                        <li><a href="https://my.ghost.org/billing" target="_blank"><i className="icon-hotspot"></i>Billing</a>
                        </li>
                        <li><a href="https://my.ghost.org/account" target="_blank"><i className="icon-lock"></i>Account</a>
                        </li>
                        <li><a href="https://my.ghost.org/p/596818" target="_blank"><i className="icon-compass"></i>Domain</a>
                        </li>
                    </ul>
                    <p className="gh-nav-list-h gh-nav-trial-cta-text">trial:1 days remaining</p><a
                    href="https://my.ghost.org/billing" className="btn btn-green gh-nav-trial-cta-btn" target="_blank">Upgrade
                    now</a></div>
            </section>
        </nav>
);

const mapStateToProps = state => ({
    blogName: state.blogInfo.name,
    fullName: state.blogInfo.fullName
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar);