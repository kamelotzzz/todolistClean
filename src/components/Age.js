import React, { Component } from "react";
import { connect } from "react-redux";
import { AGE_DOWN, AGE_UP_ASYNC, DEL_ITEM } from "../actions/actionTypes";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <div className="age">
          {" "}
          Age:<span>{this.props.age}</span>
        </div>
        <button className="ageUp" onClick={this.props.onAgeUP}>
          Age UP
        </button>
        <button className="ageDown" onClick={this.props.onAgeDOWN}>
          Age DOWN
        </button>
        <div> History </div>
        <div>
          <ul>
            {this.props.history.map((el) => (
              <li
                className="historyItem"
                key={el.id}
                onClick={() => this.props.onDelItem(el.id)}
              >
                {el.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUP: () => dispatch({ type: AGE_UP_ASYNC, value: 1 }),
    onAgeDOWN: () => dispatch({ type: AGE_DOWN, value: 1 }),
    onDelItem: (id) => dispatch({ type: DEL_ITEM, key: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Age);
