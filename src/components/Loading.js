import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default Loading;
