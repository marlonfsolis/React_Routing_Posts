import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './Blog.page.css'
import FullPost from '../../components/FullPost/FullPost.component';
import NewPost from '../../components/NewPost/NewPost.component';
import Posts from '../../components/Posts/Posts.component';
import QueryParamsAndHash from '../QueryParamsAndHash/QueryParamsAndHash.page';

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/Posts" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/Posts/NewPost" activeClassName="active">New Post</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/QueryParamsAndHash',
                                search: '?firstName=Marlon&lastName=Fernandez',
                                hash: 'Hello'
                            }} activeClassName="active" >Using Query Params and #</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Switch>
                        <Route path="/Posts/NewPost" component={NewPost} />
                        {/*<Route path="/Posts/Details/:id" component={FullPost} />*/}
                        <Route path="/QueryParamsAndHash" component={QueryParamsAndHash} />
                        <Route path="/Posts" component={Posts} />
                        <Redirect from="/" to="/Posts" />
                    </Switch>
                </section>
            </div>
        );
    }
}
