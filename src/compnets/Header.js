/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Footer extends React.Component {
  render() {
    return (
      <div>

        <Card className="text-center" >
          <Card.Img src="https://celinereads.files.wordpress.com/2016/03/free-watercolor-headers.png" alt="Card image" style={{ width: '1340px', height: '125px' }} />
          <Card.ImgOverlay>


            <Card.Title>Horned Beasts</Card.Title>
            <Card.Text>
              Welcome to the Website
            </Card.Text>
            <Button variant="primary">Home</Button>

            <Card.Footer className="text-muted" ></Card.Footer>
          </Card.ImgOverlay>
        </Card>

      </div>
    );
  }
}

export default Footer;
