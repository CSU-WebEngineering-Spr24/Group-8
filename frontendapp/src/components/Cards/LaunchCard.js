import React from 'react';
import { Card, Button } from 'react-bootstrap';

const LaunchCard = ({ launch }) => {
  const { name, date_local, details, links, success, failures } = launch;

  return (
    <Card>
      <Card.Img variant="top" src={links?.patch?.large}  style ={{ maxHeight: '200px', maxWidth: '200px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {date_local}<br />
          <strong>Success:</strong> {success ? 'Yes' : 'No'}<br />
          <strong>Details:</strong> <span className="card-content">{details?.substring(0, 30)+ (details?.length > 30 ? "..." : "")}</span><br />
          {failures && failures.length > 0 && (
            <div>
              <strong>Failures:</strong>
              <ul>
                {failures.map((failure, index) => (
                  <li key={index}>
                    Time: {failure.time}, Altitude: {failure.altitude}
                    <br></br>
                    <span className="card-content">{failure.reason.substring(0, 30)+ (failure.reason.length > 30 ? "..." : "")}</span>
                    
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card.Text>
        <Button variant="primary" href={links?.webcast} target="_blank">Watch Webcast</Button>
        <Button variant="secondary" href={links?.wikipedia} target="_blank">Wikipedia</Button>
        <Button variant="secondary" href={links?.article} target="_blank">Article</Button>
      </Card.Body>
    </Card>
  );
};

export default LaunchCard;
