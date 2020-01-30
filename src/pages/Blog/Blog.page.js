import React, { Component } from 'react'
import './Blog.page.css'
import axios from '../../axios';
import Post from '../../components/Post/Post.component';
import FullPost from '../../components/FullPost/FullPost.component';
import NewPost from '../../components/NewPost/NewPost.component';

export default class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>New Post</li>
                        </ul>
                    </nav>
                </header>
                <section>
                    {posts}
                </section>
            </div>
        );
    }
}
