import React, { Component } from 'react'
import axios from '../../axios';
import { Route, Link } from 'react-router-dom';

import './Posts.component.css';
import Post from '../../components/Posts/Post/Post.component';

export default class Posts extends Component {
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        const url = '/Posts/Details/' + id;
        this.props.history.push(url);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'Posts/Details/' + post.id} key={post.id}>
                    //     <Post
                    //         title={post.title}
                    //         author={post.author} />
                    // </Link>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                )
            });
        };
        return (
            <div className="Posts">
                {posts}
            </div>
        );
    }
}
