import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RocketCard = ({ item }) => {
  let rocket = item
  console.log("in rocket card", rocket)
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={rocket.flickr_images[0]} alt={`Image of ${rocket.name}`} />
      <Card.Body>
        <Card.Title>{rocket.name}</Card.Title>
        {/* {/* decription in } */}
        {/* <Card.Text>
          {rocket.description}
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>First Flight: {rocket.first_flight}</ListGroupItem>
        <ListGroupItem>Country: {rocket.country}</ListGroupItem>
        <ListGroupItem>Cost per Launch: ${rocket.cost_per_launch.toLocaleString()}</ListGroupItem>
        <ListGroupItem>Success Rate: {rocket.success_rate_pct}%</ListGroupItem>
        <ListGroupItem>Type: {rocket.type}</ListGroupItem>
        <ListGroupItem>Active: {rocket.active ? 'Yes' : 'No'}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        {/* <Button variant="primary" href={rocket.wikipedia} target="_blank">Learn More</Button> */}
        <Link to={`/rockets/${item.id}`} className="btn btn-primary">Learn More</Link>
      </Card.Body>
    </Card>
  );
};

export default RocketCard;
