import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Link
import { Link } from 'react-router-dom';

const DragonCard = ({ item }) => {
  let dragon = item
  console.log(dragon)
  // dragons
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={dragon.flickr_images[0]} alt={`Image of ${dragon.name}`} />
      <Card.Body>
        <Card.Title>{dragon.name}</Card.Title>
        <Card.Text>
          {dragon.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>First Flight: {dragon.first_flight}</ListGroupItem>
        <ListGroupItem>Crew Capacity: {dragon.crew_capacity}</ListGroupItem>
        <ListGroupItem>Mass: {dragon.launch_payload_mass.kg} kg</ListGroupItem>
        <ListGroupItem>Height: {dragon.height_w_trunk.meters} meters</ListGroupItem>
      </ListGroup>
      <Card.Body>
        {/* <Button variant="primary" href={dragon.wikipedia} target="_blank">Learn More</Button> */}
        <Link to={`/dragons/${item.id}`} className="btn btn-primary">Learn More</Link>
      </Card.Body>
    </Card>
  );
};

export default DragonCard;
