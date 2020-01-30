import React, { Component } from "react";

export default class QueryParamsAndHash extends Component {
  state = {
    message: "Loading..."
  };

  componentDidMount() {
    console.log(this.props);
    const queryParams = new URLSearchParams(this.props.location.search);
    const hashParams = this.props.location.hash.split(/[#,\/]/);

    const fname = queryParams.get('firstName');
    const lname = queryParams.get('lastName');
    const hello = hashParams[1];
    this.setState({
      message: hello + ' ' + fname + ' ' + lname + '!.'
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
