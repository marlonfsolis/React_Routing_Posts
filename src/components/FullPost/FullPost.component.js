import React, { Component } from "react";
import axios from "axios";

import "./FullPost.component.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  loadPost(id) {
    if (id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== id)) {
        axios.get("/posts/" + id).then((response) => {
          // console.log(response);
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  componentDidMount() {
    const id = +this.props.match.params.id;
    if (id) {
      this.loadPost(id);
    }

    // if (id) {
    //     if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== id)) {
    //         axios.get('/posts/' + id)
    //             .then(response => {
    //                 // console.log(response);
    //                 this.setState({ loadedPost: response.data });
    //             });
    //     }
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    const id = +this.props.match.params.id;
    if (!prevState.loadedPost || (prevState.loadedPost && prevState.loadedPost.id != id)) {
      this.loadPost(id);
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.state.loadedPost.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    const id = +this.props.match.params.id;

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
