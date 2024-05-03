import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategorySection = ({ title, items, ItemComponent, showMore = true }) => {
  const verticalCenterStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%' 
  };

  return (
    <div className="mb-4">
      <h2>{title}</h2>
      <Row className="justify-content-center">
        {items.map(item => (
          <Col key={item.id} sm={12} md={6} lg={3} className="mb-4 d-flex align-items-stretch">
            <div style={verticalCenterStyle}>
              <ItemComponent item={item} />
            </div>
          </Col>
        ))}
        {showMore && (
          <Col sm={12} md={6} lg={3} className="mb-4 d-flex align-items-stretch">
            <Card style={verticalCenterStyle}>
              <Card.Body>
                <Card.Title>Discover More</Card.Title>
                <Card.Text>
                  Explore more about {title}.
                </Card.Text>
                {/* if title is rockets , link to /allrocketss  else empty btn*/ }
                {title === 'Rockets' ? <Link to="/allrockets" className="btn btn-primary">More {title}</Link> : 
                  (
                    title === 'Ships' ? <Link to="/allships" className="btn btn-primary">More {title}</Link> : 
                    (
                      title === 'Capsules' ? <Link to="/allcapsules" className="btn btn-primary">More {title}</Link> :

                      (
                        // dragons
                        title === 'Dragons' ? <Link to="/alldragons" className="btn btn-primary">More {title}</Link> :

                        <Button variant="primary">More {title}</Button>
                      )
                    )
                  )
                }

                {/* <Button variant="primary">More {title}</Button> */}
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default CategorySection;
