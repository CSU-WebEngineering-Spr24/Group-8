import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg" alt="Header Image" />
            <Card.ImgOverlay>
              <Card.Title>SpaceX Explorer</Card.Title>
              <Card.Text>
                Subheading with description of your shopping site
              </Card.Text>
              <Button variant="primary">Button</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/MHy4P6q3tVwgDGdw69XwoQ-1200-80.jpg" />
            <Card.Body>
              <Card.Title>Rockets-Dragons-Ships</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/j54xVfDBCTf5VYr5nTGkyQ.jpeg" />
            <Card.Body>
              <Card.Title>Crew</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3cw1-5_0yRAdabrZJFAlaeQf46uIAsk1w2z98faylXc77Mu8iR8ys31TdqZek9q4kOGHjprPQgMefYjkETys-T2WRIuQzn_HUkM9L1FW1dVtFnVJ2IS5YKDBT7nNRFYdtiJsGRRjRGvmi/s2048/SpaceX+Starship+timeline+%25282021.06%2529+by+Ryan+MacDonald_infographic.jpg" />
            <Card.Body>
              <Card.Title>History</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.insider.com/5cdc4cade9f08a482e5775cc?width=1136&format=jpeg" />
            <Card.Body>
              <Card.Title>Starlink</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
