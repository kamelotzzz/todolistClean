import React, { Component } from "react";
import { connect } from "react-redux";
import { pressEnter } from "../actions/toDoListAction";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  showInput = () => {
    if (this.state.toggle) {
      return (
        <input
          type="text"
          id="name"
          onKeyUp={this.pressEnter}
          placeholder="[add new]"
        />
      );
    }
  };

  pressEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.dispactPressEnter(e.target.value);
      document.getElementById("name").value = "";
    }
  };

  render() {
    return (
      <div>
        <h1>
          To Do List
          <b className="delete" onClick={this.props.dispatchDeleteAll}>
            Delete All
          </b>
          <button className="add" onClick={this.toggle}>
            +
          </button>
        </h1>
        {this.showInput()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    dispactPressEnter: (value) => dispatch(pressEnter(value)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Title);
