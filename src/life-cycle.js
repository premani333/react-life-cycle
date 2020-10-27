import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      value: "Welcome",
    };
  }
  //before render
  componentWillMount() {
    alert("componentwillmount run successfully");
  }
  //after Render
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: "componentdidmount run seccessfullly" });
    }, 5000);
  }
  //value cange function
  changevalue = () => {
    this.setState({ value: "value changed" });
  };
  componentWillUpdate() {
    alert("Do you want update new value");
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "New value updated successfully";
  }

  componentWillUnmount() {
    alert("Do you want to Delete value");
  }
  deletevalue = () => {
    this.setState({ value: false });
  };
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <br />
        <button type="button" onClick={this.changevalue}>
          Change value
        </button>
        <br />
        <button type="button" onClick={this.deletevalue}>
          Delete
        </button>
      </div>
    );
  }
}
export default LifeCycle;
