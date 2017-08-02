/**
 * Created by huyhuynh on 8/2/17.
 */
import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar'

const NewPostPage = props => (
    <div className="gh-viewport">
        <NavigationBar/>
        <main role="main" className="ember-view gh-main">
            <section className="gh-view">
                <header className="view-header">
                    {/*<h2 id="ember2306" className="ember-view view-title gh-editor-title">*/}
                        {/*<button className="gh-mobilemenu-button" role="presentation" data-ember-action="2307"><i*/}
                            {/*className="icon-gh"><span className="sr-only">Menu</span></i></button>*/}
                        {/*<input id="entry-title" type="text" placeholder="Your Post Title" tabindex="1"*/}
                               {/*shouldfocus="false" focus-out="updateTitle" className="ember-view gh-input">*/}
                    {/*</h2>*/}
                    <!---->
                    {/*<section className="view-actions">*/}
                        {/*<button type="button" className="post-settings" title="Post Settings" data-ember-action="2308">*/}
                            {/*<i className="icon-settings"></i>*/}
                        {/*</button>*/}
                        {/*<section id="ember2309" className="ember-view splitbtn js-publish-splitbutton">*/}
                            {/*<button id="ember2310" type="button"*/}
                                    {/*className="btn btn-sm js-publish-button btn-blue  ember-view"> Save Draft*/}

                            {/*</button>*/}
                            {/*<button id="ember2311" role="button"*/}
                                    {/*className="btn btn-sm btn-blue  dropdown-toggle up  ember-view closed"><i*/}
                                {/*className="options icon-arrow2"></i>*/}
                                {/*<span className="sr-only">Toggle Settings Menu</span>*/}
                            {/*</button>*/}
                            {/*<div id="ember2312" className="ember-view dropdown editor-options closed fade-out closed">*/}
                                {/*<ul className="dropdown-menu dropdown-triangle-bottom-right">*/}
                                    {/*<li className="post-save-publish ">*/}
                                        {/*<a href="#" data-ember-action="2313">Publish Now</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="post-save-draft active">*/}
                                        {/*<a href="#" data-ember-action="2314">Save Draft</a>*/}
                                    {/*</li>*/}

                                    {/*<li className="divider delete"></li>*/}
                                    {/*<li className="delete">*/}
                                        {/*<a href="#" data-ember-action="2315">Delete Post</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                    {/*</section>*/}
                </header>
            </section>
        </main>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
null,
mapDispatchToProps
)(NewPostPage);