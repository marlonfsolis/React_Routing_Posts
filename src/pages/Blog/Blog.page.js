import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

import './Blog.page.css'
import FullPost from '../../components/FullPost/FullPost.component';
import NewPost from '../../components/NewPost/NewPost.component';
import Posts from '../../components/Posts/Posts.component';

export default class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Posts/NewPost">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Switch>
                        <Route path="/Posts/NewPost" component={NewPost} />
                        <Route path="/Posts/Details/:id" component={FullPost} />
                        <Route path="/" component={Posts} />
                    </Switch>
                </section>
            </div>
        );
    }
}
