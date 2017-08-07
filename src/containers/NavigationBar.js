/**
 * Created by huyhuynh on 8/2/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

const NavigationBar = props => (
    <nav id="ember831" className="ember-view gh-nav">
        <header id="ember842" role="button" className="gh-nav-menu ember-view closed">
            <div className="gh-nav-menu-icon" style={{backgroundImage: 'url(/ghost/img/ghosticon.jpg)'}}></div>
            <div className="gh-nav-menu-details">
                <div className="gh-nav-menu-details-blog">Con mều blog</div>
                <div className="gh-nav-menu-details-user">Kyo Saka</div>
            </div>
            <i className="icon-arrow"></i>
        </header>
        <div id="ember851" className="ember-view dropdown closed fade-out closed">
            <ul className="dropdown-menu dropdown-triangle-top js-user-menu-dropdown-menu" role="menu"
                style={{right:'20px', left: 'auto'}}>
                <li role="presentation"><a id="ember860" href="/ghost/about/" tabindex="-1"
                                           className="ember-view gh-nav-menu-about dropdown-item js-nav-item"><i
                    className="icon-shop"></i> About Ghost</a></li>
                <li className="divider"></li>
                <li role="presentation"><a id="ember883" href="/ghost/team/kyo/" tabindex="-1"
                                           className="ember-view dropdown-item user-menu-profile js-nav-item"><i
                    className="icon-user"></i> Your Profile</a></li>

                <li role="presentation"><a className="dropdown-item help-menu-support" role="menuitem" tabindex="-1"
                                           href="http://support.ghost.org/" target="_blank"><i
                    className="icon-ambulance"></i> Support Center</a></li>
                <li role="presentation"><a className="dropdown-item help-menu-tweet" role="menuitem" tabindex="-1"
                                           href="https://twitter.com/intent/tweet?text=%40TryGhost+Hi%21+Can+you+help+me+with+&amp;related=TryGhost"
                                           target="_blank"
                                           onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"><i
                    className="icon-twitter"></i> Tweet @TryGhost!</a></li>
                <li className="divider"></li>
                <li role="presentation"><a className="dropdown-item help-menu-how-to" role="menuitem" tabindex="-1"
                                           href="http://support.ghost.org/how-to-use-ghost/" target="_blank"><i
                    className="icon-book"></i> How to Use Ghost</a></li>
                <li role="presentation"><a className="dropdown-item help-menu-wishlist" role="menuitem" tabindex="-1"
                                           href="http://ideas.ghost.org/" target="_blank"><i className="icon-idea"></i>
                    Wishlist</a></li>
                <li className="divider"></li>

                <li role="presentation">
                    <a target="_blank" className="dropdown-item user-menu-publications js-nav-item" role="menuitem"
                       tabindex="-1" href="https://my.ghost.org/"><i className="icon-folder"></i> Manage Publications</a>
                </li>
                <li className="divider"></li>

                <li role="presentation"><a id="ember910" href="/ghost/signout/" tabindex="-1"
                                           className="ember-view dropdown-item user-menu-signout"><i
                    className="icon-signout"></i> Sign Out</a></li>
            </ul>
        </div>
        <section className="gh-nav-body">
            <section className="gh-nav-search">
                <div id="ember927" className="gh-nav-search-input ember-view">
                    <div id="ember947"
                         className="ember-power-select ember-view ember-basic-dropdown ember-basic-dropdown--in-place">
                        <div aria-haspopup="true" className="ember-basic-dropdown-trigger ember-power-select-trigger"
                             aria-controls="ember-basic-dropdown-content-ember947" aria-disabled="false"
                             aria-expanded="false" aria-pressed="false" id="ember-power-select-trigger-ember938"
                             role="button" tabindex="0">
                            <div id="ember956" className="ember-view">
                                <div className="ember-power-select-search">
                                    <input type="search" autocomplete="off" autocorrect="off" autocapitalize="off"
                                           spellcheck="false" role="combobox" placeholder="Search"/>
                                        <button className="gh-nav-search-button" data-ember-action="957"><i
                                            className="icon-search"></i><span className="sr-only">Search</span></button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
            <ul className="gh-nav-list gh-nav-main">
                <li><a id="ember958" href="/ghost/editor/" className="ember-view gh-nav-main-editor active"><i
                    className="icon-pen"></i>New Post</a></li>
                <li><a id="ember999" href="/ghost/" className="ember-view gh-nav-main-content"><i className="icon-content"></i>Content</a>
                </li>
                <li><a id="ember1030" href="/ghost/team/" className="ember-view gh-nav-main-users"><i className="icon-team"></i>Team</a>
                </li>
            </ul>
            <ul className="gh-nav-list gh-nav-settings">
                <li className="gh-nav-list-h">Settings</li>
                <li><a id="ember1047" href="/ghost/settings/general/" className="ember-view gh-nav-settings-general"><i
                    className="icon-settings"></i>General</a></li>
                <li><a id="ember1071" href="/ghost/settings/navigation/"
                       className="ember-view gh-nav-settings-navigation"><i className="icon-compass"></i>Navigation</a></li>
                <li><a id="ember1072" href="/ghost/settings/tags/" className="ember-view gh-nav-settings-tags"><i
                    className="icon-tag"></i>Tags</a></li>
                <li><a id="ember1097" href="/ghost/settings/code-injection/"
                       className="ember-view gh-nav-settings-code-injection"><i className="icon-code"></i>Code Injection</a>
                </li>
                <li><a id="ember1114" href="/ghost/settings/apps/" className="ember-view gh-nav-settings-apps"><i
                    className="icon-box"></i>Apps</a></li>
                <li><a id="ember1138" href="/ghost/settings/labs/" className="ember-view gh-nav-settings-labs"><i
                    className="icon-labs"></i>Labs</a></li>
            </ul>

            <div id="pro-cta" className="gh-nav-trial-cta">
                <script src="https://my.ghost.org/pro-cta.js?lts=true&amp;id=596818"></script>
                <ul className="gh-nav-list gh-nav-pro">
                    <li className="gh-nav-list-h">Ghost(Pro)</li>
                    <li><a href="https://my.ghost.org/billing" target="_blank"><i className="icon-hotspot"></i>Billing</a>
                    </li>
                    <li><a href="https://my.ghost.org/account" target="_blank"><i className="icon-lock"></i>Account</a></li>
                    <li><a href="https://my.ghost.org/p/596818" target="_blank"><i className="icon-compass"></i>Domain</a>
                    </li>
                </ul>
                <p className="gh-nav-list-h gh-nav-trial-cta-text">trial:1 days remaining</p><a
                href="https://my.ghost.org/billing" className="btn btn-green gh-nav-trial-cta-btn" target="_blank">Upgrade
                now</a></div>
        </section>
        <footer className="gh-nav-footer">
            <div id="ember1163" className="ember-view gh-menu-toggle"><i role="button" className="icon-minimise"></i>
            </div>
            <a className="gh-nav-footer-sitelink" target="_blank" href="http://con-meu-blog.ghost.io/">View blog</a>
            <div className="gh-help-menu">
                <div id="ember1164" role="button" className="ember-view closed">
                    <div className="gh-help-button">
                        <i className="icon-question"><span className="hidden">Help</span></i>
                    </div>
                </div>
                <div id="ember1165" className="ember-view dropdown closed fade-out closed">
                    <ul className="dropdown-menu dropdown-triangle-bottom" role="menu">
                        <li role="presentation"><a className="dropdown-item help-menu-support" role="menuitem" tabindex="-1"
                                                   href="http://help.ghost.org/" target="_blank"><i
                            className="icon-ambulance"></i> Support Center</a></li>
                        <li role="presentation"><a className="dropdown-item help-menu-tweet" role="menuitem" tabindex="-1"
                                                   href="https://twitter.com/intent/tweet?text=%40TryGhost+Hi%21+Can+you+help+me+with+&amp;related=TryGhost"
                                                   target="_blank"
                                                   onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"><i
                            className="icon-twitter"></i> Tweet @TryGhost!</a></li>
                        <li className="divider"></li>
                        <li role="presentation"><a className="dropdown-item help-menu-how-to" role="menuitem" tabindex="-1"
                                                   href="https://help.ghost.org/hc/en-us/categories/203268947-Ghost-Pro-"
                                                   target="_blank"><i className="icon-book"></i> How to Use Ghost</a></li>
                        <li role="presentation"><a className="dropdown-item help-menu-markdown" role="menuitem"
                                                   tabindex="-1" href="" data-ember-action="1166"><i
                            className="icon-markdown"></i> Markdown Help</a></li>
                        <li className="divider"></li>
                        <li role="presentation"><a className="dropdown-item help-menu-wishlist" role="menuitem"
                                                   tabindex="-1" href="http://ideas.ghost.org/" target="_blank"><i
                            className="icon-idea"></i> Wishlist</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="gh-autonav-toggle" data-ember-action="1167"></div>
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