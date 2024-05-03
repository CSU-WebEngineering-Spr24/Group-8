import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Row, Col , Carousel} from 'react-bootstrap';


/* 
{
    "height": {
        "meters": 22.25,
        "feet": 73
    },
    "diameter": {
        "meters": 1.68,
        "feet": 5.5
    },
    "mass": {
        "kg": 30146,
        "lb": 66460
    },
    "first_stage": {
        "thrust_sea_level": {
            "kN": 420,
            "lbf": 94000
        },
        "thrust_vacuum": {
            "kN": 480,
            "lbf": 110000
        },
        "reusable": false,
        "engines": 1,
        "fuel_amount_tons": 44.3,
        "burn_time_sec": 169
    },
    "second_stage": {
        "thrust": {
            "kN": 31,
            "lbf": 7000
        },
        "payloads": {
            "composite_fairing": {
                "height": {
                    "meters": 3.5,
                    "feet": 11.5
                },
                "diameter": {
                    "meters": 1.5,
                    "feet": 4.9
                }
            },
            "option_1": "composite fairing"
        },
        "reusable": false,
        "engines": 1,
        "fuel_amount_tons": 3.38,
        "burn_time_sec": 378
    },
    "engines": {
        "isp": {
            "sea_level": 267,
            "vacuum": 304
        },
        "thrust_sea_level": {
            "kN": 420,
            "lbf": 94000
        },
        "thrust_vacuum": {
            "kN": 480,
            "lbf": 110000
        },
        "number": 1,
        "type": "merlin",
        "version": "1C",
        "layout": "single",
        "engine_loss_max": 0,
        "propellant_1": "liquid oxygen",
        "propellant_2": "RP-1 kerosene",
        "thrust_to_weight": 96
    },
    "landing_legs": {
        "number": 0,
        "material": null
    },
    "payload_weights": [
        {
            "id": "leo",
            "name": "Low Earth Orbit",
            "kg": 450,
            "lb": 992
        }
    ],
    "flickr_images": [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg"
    ],
    "name": "Falcon 1",
    "type": "rocket",
    "active": false,
    "stages": 2,
    "boosters": 0,
    "cost_per_launch": 6700000,
    "success_rate_pct": 40,
    "first_flight": "2006-03-24",
    "country": "Republic of the Marshall Islands",
    "company": "SpaceX",
    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
    "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    "id": "5e9d0d95eda69955f709d1eb"
}
*/

const RocketIndividual = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    fetch(`/api/spacex/rockets/${id}`)
      .then(res => res.json())
      .then(data => {
        setRocket(data);
        setLoading(false);
      })
      .catch(err => console.error("Fetching rocket data failed:", err));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!rocket) return <div>No rocket data found.</div>;

  return (
    <Container>
      <h1>{rocket.name}</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Img variant="top" src={rocket.flickr_images[0]} />
            <Card.Body>
                {/* "name": "Falcon Heavy",
  "type": "rocket",
  "active": true,
  "stages": 2,
  "boosters": 2,
  "cost_per_launch": 90000000,
  "success_rate_pct": 100,
  "first_flight": "2018-02-06",
  "country": "United States",
  "company": "SpaceX",
  "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy",
  "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
  "id": "5e9d0d95eda69974db09d1ed" */}
              <Card.Title>Overview</Card.Title>
              <Card.Text>{rocket.description}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>First Flight: {rocket.first_flight}</ListGroup.Item>
                <ListGroup.Item>Type: {rocket.type}</ListGroup.Item>
                <ListGroup.Item>Country: {rocket.country}</ListGroup.Item>
                <ListGroup.Item>Company: {rocket.company}</ListGroup.Item>
                <ListGroup.Item>Cost per Launch: ${rocket.cost_per_launch}</ListGroup.Item>
                <ListGroup.Item>Success Rate: {rocket.success_rate_pct}%</ListGroup.Item>
                <ListGroup.Item>Active: {rocket.active ? 'Yes' : 'No'}</ListGroup.Item>
                <ListGroup.Item>Stages: {rocket.stages}</ListGroup.Item>
                <ListGroup.Item>Boosters: {rocket.boosters}</ListGroup.Item>
                <ListGroup.Item>Wikipedia: <a href={rocket.wikipedia} target="_blank">{rocket.wikipedia}</a>
                <Button variant="primary" href={rocket.wikipedia} target="_blank">Wikipedia</Button>
                </ListGroup.Item>

              </ListGroup>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Physical Characteristics</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Height: {rocket.height.meters} meters</ListGroup.Item>
                <ListGroup.Item>Diameter: {rocket.diameter.meters} meters</ListGroup.Item>
                <ListGroup.Item>Mass: {rocket.mass.kg} kg</ListGroup.Item>
                <ListGroup.Item>Stages: {rocket.stages}</ListGroup.Item>
                <ListGroup.Item>Boosters: {rocket.boosters}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>First Stage</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Thrust (sea level): {rocket.first_stage.thrust_sea_level.kN} kN</ListGroup.Item>
                <ListGroup.Item>Thrust (vacuum): {rocket.first_stage.thrust_vacuum.kN} kN</ListGroup.Item>
                <ListGroup.Item>Reusable: {rocket.first_stage.reusable ? "Yes" : "No"}</ListGroup.Item>
                <ListGroup.Item>Engines: {rocket.first_stage.engines}</ListGroup.Item>
                <ListGroup.Item>Fuel Amount: {rocket.first_stage.fuel_amount_tons} tons</ListGroup.Item>
                <ListGroup.Item>Burn Time: {rocket.first_stage.burn_time_sec} seconds</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Second Stage</Card.Title>

              <ListGroup variant="flush">
                <ListGroup.Item>Thrust: {rocket.second_stage.thrust.kN} kN</ListGroup.Item>
                <ListGroup.Item>Payloads: height = {rocket.second_stage.payloads.composite_fairing.height.meters} meters and diameter = {rocket.second_stage.payloads.composite_fairing.diameter.meters} meters </ListGroup.Item>
                <ListGroup.Item>Reusable: {rocket.second_stage.reusable ? "Yes" : "No"}</ListGroup.Item>
                <ListGroup.Item>Engines: {rocket.second_stage.engines}</ListGroup.Item>
                <ListGroup.Item>Fuel Amount: {rocket.second_stage.fuel_amount_tons} tons</ListGroup.Item>
                <ListGroup.Item>Burn Time: {rocket.second_stage.burn_time_sec} seconds</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* "engines": {
        "isp": {
            "sea_level": 267,
            "vacuum": 304
        },
        "thrust_sea_level": {
            "kN": 420,
            "lbf": 94000
        },
        "thrust_vacuum": {
            "kN": 480,
            "lbf": 110000
        },
        "number": 1,
        "type": "merlin",
        "version": "1C",
        "layout": "single",
        "engine_loss_max": 0,
        "propellant_1": "liquid oxygen",
        "propellant_2": "RP-1 kerosene",
        "thrust_to_weight": 96
    }, */}
      

      <Row>
        {/* carousel of flickr images */}
        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Flickr Images</Card.Title>
              <Carousel>
                {rocket.flickr_images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Engines</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>ISP: {rocket.engines.isp.sea_level} sea level</ListGroup.Item>
                <ListGroup.Item>ISP: {rocket.engines.isp.vacuum} vacuum</ListGroup.Item>
                <ListGroup.Item>Thrust: {rocket.engines.thrust_sea_level.kN} kN</ListGroup.Item>
                <ListGroup.Item>Thrust: {rocket.engines.thrust_vacuum.kN} kN</ListGroup.Item>
                <ListGroup.Item>Number: {rocket.engines.number}</ListGroup.Item>
                <ListGroup.Item>Type: {rocket.engines.type}</ListGroup.Item>
                <ListGroup.Item>Version: {rocket.engines.version}</ListGroup.Item>
                <ListGroup.Item>Layout: {rocket.engines.layout}</ListGroup.Item>
                <ListGroup.Item>Engine Loss: {rocket.engines.engine_loss_max}</ListGroup.Item>
                <ListGroup.Item>Propellant 1: {rocket.engines.propellant_1}</ListGroup.Item>
                <ListGroup.Item>Propellant 2: {rocket.engines.propellant_2}</ListGroup.Item>
                <ListGroup.Item>Thrust to Weight: {rocket.engines.thrust_to_weight}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        {/* 
         "landing_legs": {
        "number": 0,
        "material": null
    },
    "payload_weights": [
        {
            "id": "leo",
            "name": "Low Earth Orbit",
            "kg": 450,
            "lb": 992
        }
    ],
         */}
         < Card className="mb-3">
            <Card.Body>
              <Card.Title>Landing Legs</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Number: {rocket.landing_legs.number}</ListGroup.Item>
                <ListGroup.Item>Material: {rocket.landing_legs.material}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payload Weights</Card.Title>
              <ListGroup variant="flush">
                {rocket.payload_weights.map((weight, index) => (
                  <ListGroup.Item key={index}>
                    {index+1} .
                    {weight.name}: {weight.kg} kg
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mt-3">
        <Card.Header>Raw JSON Data</Card.Header>
        <Card.Body>
          <pre>{JSON.stringify(rocket, null, 2)}</pre>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RocketIndividual;
