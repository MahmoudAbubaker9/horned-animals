/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
    // test
    this.props.showCard();
    this.props.CardData(
      this.props.title,
      this.props.image_url,
      this.props.description,
    );
  };

  render() {
    return (
      <Card
        style={{ width: '25rem', height: '40rem' }}
        className="text-center"
      >

        <Card.Header>{this.props.title}</Card.Header>
        <Card.Img variant="top" src={this.props.image_url} style={{ width: '25rem', height: '30rem' }} onClick={this.voteCounter} />
        <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Horns : {this.props.horns}</Card.Text>
          <Card.Text>keyword : {this.props.keyword}</Card.Text>
          <Card.Text>❤ Number of Click ❤</Card.Text>
          <Card.Text>{this.state.counter}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
