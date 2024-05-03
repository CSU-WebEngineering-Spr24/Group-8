import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const CapsuleCard = ({ item }) => {
  let capsule = item
  console.log(capsule)
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>Capsule Serial: {capsule.serial}</Card.Title>
        <Card.Text>
          <strong>Type:</strong> {capsule.type}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Status: {capsule.status}</ListGroupItem>
        <ListGroupItem>Reuse Count: {capsule.reuse_count}</ListGroupItem>
        <ListGroupItem>Water Landings: {capsule.water_landings}</ListGroupItem>
        <ListGroupItem>Land Landings: {capsule.land_landings}</ListGroupItem>
        <ListGroupItem>Last Update: {capsule.last_update}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
};

export default CapsuleCard;
