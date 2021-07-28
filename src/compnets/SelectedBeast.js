import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: '30rem' }}
            src={this.props.pic}
            alt={this.props.title}
          />
        </Modal.Body>
        <Modal.Footer>
        {this.props.descp}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
