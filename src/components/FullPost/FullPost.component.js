import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.component.css';

class FullPost extends Component {
    state = {
        postId: 0,
        loadedPost: null
    }


    componentDidMount() {
        // console.log(this.props);
        
        const id = +this.props.match.params.id;
        this.setState({postId: id});

        if (id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== id)) {
                axios.get('/posts/' + id)
                    .then(response => {
                        // console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.state.loadedPost.id)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.state.postId) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;