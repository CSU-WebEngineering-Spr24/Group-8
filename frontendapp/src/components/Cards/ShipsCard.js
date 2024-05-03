import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShipsCard = ({ item }) => {
  let ship = item
  console.log(ship)
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={ship.image} alt={`Image of ${ship.name}`} />
      <Card.Body>
        <Card.Title>{ship.name}</Card.Title>
        <Card.Text>
          Type: {ship.type} - {ship.roles.join(", ")}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Home Port: {ship.home_port}</ListGroupItem>
        <ListGroupItem>Built Year: {ship.year_built}</ListGroupItem>
        <ListGroupItem>Status: {ship.status || "Not available"}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        {/* <Button variant="primary" href={ship.link} target="_blank">More Info</Button> */}
        <Link to={`/ships/${item.id}`} className="btn btn-primary">Learn More</Link>
      </Card.Body>
    </Card>
  );
};

export default ShipsCard;
