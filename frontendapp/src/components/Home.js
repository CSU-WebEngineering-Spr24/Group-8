import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Import LinkContainer
import './home.css';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();    
  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <Card className="bg-dark text-white text-center">
            <Card.Img 
              src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg" 
              alt="Header Image" 
              style={{ maxHeight: '50vh', objectFit: 'cover' }} 
            />
            <Card.ImgOverlay>
              <Card.Title>SpaceX Explorer</Card.Title>
              <Card.Text>
                Read about SpaceX and API used for this project
              </Card.Text>
              <Button variant="primary" href ="https://github.com/r-spacex/SpaceX-API/blob/master/README.md">Explore API</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row xs={1} md={2} lg={4} className="g-4">
        {/* Wrap each Card with LinkContainer to make it clickable */}
        <LinkContainer to="/rockets">
          <Col>
            <Card onClick={(e)=>{e.preventDefault();navigate('/rockets')}}>
              <Card.Img 
                variant="top" 
                src="https://cdn.mos.cms.futurecdn.net/MHy4P6q3tVwgDGdw69XwoQ-1200-80.jpg" 
                // className={styles.cardImage}
                style={{ height: '200px', objectFit: 'cover' }} // Set a fixed height and cover for all images
              />
              <Card.Body>
                <Card.Title>Rockets-Dragons-Ships</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </LinkContainer>

        <LinkContainer to="/crew">
          <Col>
            <Card onClick={(e)=>{e.preventDefault();navigate('/crew')}}>
              <Card.Img 
                variant="top" 
                src="https://cdn.mos.cms.futurecdn.net/j54xVfDBCTf5VYr5nTGkyQ.jpeg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Crew</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </LinkContainer>

        <LinkContainer to="/history">
          <Col>
            <Card onClick={(e)=>{e.preventDefault();navigate('/history')}}>
              <Card.Img 
                variant="top" 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3cw1-5_0yRAdabrZJFAlaeQf46uIAsk1w2z98faylXc77Mu8iR8ys31TdqZek9q4kOGHjprPQgMefYjkETys-T2WRIuQzn_HUkM9L1FW1dVtFnVJ2IS5YKDBT7nNRFYdtiJsGRRjRGvmi/s2048/SpaceX+Starship+timeline+%25282021.06%2529+by+Ryan+MacDonald_infographic.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>History</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </LinkContainer>

        <LinkContainer to="/starlink">
          <Col>
            <Card onClick={(e)=>{e.preventDefault();navigate('/starlink')}}>
              <Card.Img 
                variant="top" 
                src="https://i.insider.com/5cdc4cade9f08a482e5775cc?width=1136&format=jpeg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>StarLink</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </LinkContainer>
      </Row>

    </Container>
  );
};

export default HomePage;

