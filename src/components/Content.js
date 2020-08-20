import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }
  async componentDidMount() {
    let result = await axios.get("http://localhost:3000/data");
    this.setState({ todo: result.data.name });
  }
  editUser = (id) => {
    console.log(id);
  };

  render() {
    return this.state.todo.map((user, index) => {
      return (
        <Card style={{ width: "18rem" }} key={user.id}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>Tuoi: {user.age}</Card.Text>
            <Button
              variant="primary"
              onClick={this.editUser.bind(null, user.id)}
            >
              Click
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default Content;
