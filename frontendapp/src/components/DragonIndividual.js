import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Col, Row , Carousel} from 'react-bootstrap';

const DragonIndividual = () => {
  const { id } = useParams();
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDragon = async () => {
      try {
        // const response = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`);
        const response = await fetch(`/api/spacex/dragons/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Dragon data');
        }
        const data = await response.json();
        setDragon(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Dragon data:', error);
        setLoading(false);
      }
    };

    fetchDragon();
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (!dragon) return <Container>No Dragon found for the provided ID.</Container>;

  return (
    <Container>
      <h1>{dragon.name}</h1>
      {/* carousel of flickr_images */}

        <Carousel>
          {dragon.flickr_images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                style={{ maxHeight: '40vh' }}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>




      <Card>
        <Card.Body>
          <Card.Text>{dragon.description}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Height with Trunk: {dragon.height_w_trunk.meters} meters</ListGroup.Item>
          <ListGroup.Item>Diameter: {dragon.diameter.meters} meters</ListGroup.Item>
          <ListGroup.Item>Crew Capacity: {dragon.crew_capacity}</ListGroup.Item>
          <ListGroup.Item>Orbit Duration: {dragon.orbit_duration_yr} years</ListGroup.Item>
          <ListGroup.Item>Dry Mass: {dragon.dry_mass_kg} kg</ListGroup.Item>
          {/* Add more details here */}
        </ListGroup>
        <Card.Footer>
          <Card.Link href={dragon.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</Card.Link>
        </Card.Footer>
      </Card>
      <Row>
        <Col>
          <h2>Thrusters</h2>
          <ListGroup>
            {dragon.thrusters.map((thruster, index) => (
              <ListGroup.Item key={index}>
                Type: {thruster.type}, Amount: {thruster.amount}, Pods: {thruster.pods}
                , Fuel 1: {thruster.fuel_1}, Fuel 2: {thruster.fuel_2}, ISP: {thruster.isp}, Thrust: {thruster.thrust.kN}
              </ListGroup.Item>
            ))}
            {/* fuel_1": "nitrogen tetroxide",
      "fuel_2": "monomethylhydrazine",
      "isp": 300,
      "thrust": {
        "kN": 0.4,
        "lbf": 90 */}
          </ListGroup>
          {/* "heat_shield": {
    "material": "PICA-X",
    "size_meters": 3.6,
    "temp_degrees": 3000,
    "dev_partner": "NASA"
  }, */}
        <Card className="mt-3">
          <Card.Header> Heat Shield</Card.Header>
          <Card.Body>
            <Card.Text>
              Material: {dragon.heat_shield.material}, Size: {dragon.heat_shield.size_meters} meters, Temp: {dragon.heat_shield.temp_degrees} degrees, Dev Partner: {dragon.heat_shield.dev_partner}
            </Card.Text>
          </Card.Body>
        </Card>

{/*  "launch_payload_mass": {
    "kg": 6000,
    "lb": 13228
  },
  "launch_payload_vol": {
    "cubic_meters": 25,
    "cubic_feet": 883
  },
  "return_payload_mass": {
    "kg": 3000,
    "lb": 6614
  },
  "return_payload_vol": {
    "cubic_meters": 11,
    "cubic_feet": 388
  }, */}

        <Card className="mt-3">
          <Card.Header> Payload</Card.Header>
          <Card.Body>
            <Card.Text>
                <ListGroup>
                  <ListGroup.Item>Launch Mass: {dragon.launch_payload_mass.kg} kg, Launch Volume: {dragon.launch_payload_vol.cubic_meters} cubic meters</ListGroup.Item>
                  <ListGroup.Item>Return Mass: {dragon.return_payload_mass.kg} kg, Return Volume: {dragon.return_payload_vol.cubic_meters} cubic meters</ListGroup.Item>    
                </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="mt-3">
            {/*   "pressurized_capsule": {
    "payload_volume": {
      "cubic_meters": 11,
      "cubic_feet": 388
    }
  },
  "trunk": {
    "trunk_volume": {
      "cubic_meters": 14,
      "cubic_feet": 494
    },
    "cargo": {
      "solar_array": 2,
      "unpressurized_cargo": true
    } */}

        <Card.Header> Trunk</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>Trunk Volume: {dragon.trunk.trunk_volume.cubic_meters} cubic meters</ListGroup.Item>
              <ListGroup.Item>Solar Array: {dragon.trunk.cargo.solar_array}</ListGroup.Item>
              <ListGroup.Item>Unpressurized Cargo: {dragon.trunk.cargo.unpressurized_cargo}</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
    </Card>
          <h2>Images</h2>
          <Row>
            {dragon.flickr_images.map((image, index) => (
              <Col key={index} xs={6} md={4}>
                <img src={image} alt={`Dragon ${index}`} style={{ width: '100%' }} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Card className="mt-3">
        <Card.Header>Raw JSON Data</Card.Header>
        <Card.Body>
          <pre>{JSON.stringify(dragon, null, 2)}</pre>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DragonIndividual;


/* 

{
  "heat_shield": {
    "material": "PICA-X",
    "size_meters": 3.6,
    "temp_degrees": 3000,
    "dev_partner": "NASA"
  },
  "launch_payload_mass": {
    "kg": 6000,
    "lb": 13228
  },
  "launch_payload_vol": {
    "cubic_meters": 25,
    "cubic_feet": 883
  },
  "return_payload_mass": {
    "kg": 3000,
    "lb": 6614
  },
  "return_payload_vol": {
    "cubic_meters": 11,
    "cubic_feet": 388
  },
  "pressurized_capsule": {
    "payload_volume": {
      "cubic_meters": 11,
      "cubic_feet": 388
    }
  },
  "trunk": {
    "trunk_volume": {
      "cubic_meters": 14,
      "cubic_feet": 494
    },
    "cargo": {
      "solar_array": 2,
      "unpressurized_cargo": true
    }
  },
  "height_w_trunk": {
    "meters": 7.2,
    "feet": 23.6
  },
  "diameter": {
    "meters": 3.7,
    "feet": 12
  },
  "first_flight": "2010-12-08",
  "flickr_images": [
    "https://i.imgur.com/9fWdwNv.jpg",
    "https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg",
    "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
    "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
  ],
  "name": "Dragon 1",
  "type": "capsule",
  "active": true,
  "crew_capacity": 0,
  "sidewall_angle_deg": 15,
  "orbit_duration_yr": 2,
  "dry_mass_kg": 4200,
  "dry_mass_lb": 9300,
  "thrusters": [
    {
      "type": "Draco",
      "amount": 18,
      "pods": 4,
      "fuel_1": "nitrogen tetroxide",
      "fuel_2": "monomethylhydrazine",
      "isp": 300,
      "thrust": {
        "kN": 0.4,
        "lbf": 90
      }
    }
  ],
  "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Dragon",
  "description": "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
  "id": "5e9d058759b1ff74a7ad5f8f"

*/