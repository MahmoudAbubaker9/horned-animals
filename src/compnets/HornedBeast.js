import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  voteCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <Card
        style={{ width: "25rem", height: "40rem"}}
        onClick={this.voteCounter}
        className="text-center"
      >
          
        <Card.Header>{this.props.title}</Card.Header>
        <Card.Img variant="top" src={this.props.image_url} style={{ width: "25rem", height: "30rem" }}/>
        <Card.Body>
        <Card.Text>{this.props.description}</Card.Text>
        <p>{this.state.counter} Vote</p> 
        <Button variant="primary"> click to Vote</Button>       
          
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;