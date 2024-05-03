import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


/* {
    "last_ais_update": null,
    "legacy_id": null,
    "model": null,
    "type": "Cargo",
    "roles": [
        "Fairing Recovery",
        "Support Ship"
    ],
    "imo": 9529695,
    "mmsi": 368456000,
    "abs": 1220625,
    "class": 9195228,
    "mass_kg": 2719740,
    "mass_lbs": 5996000,
    "year_built": 2009,
    "home_port": "Port Canaveral",
    "status": null,
    "speed_kn": null,
    "course_deg": null,
    "latitude": null,
    "longitude": null,
    "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:454731/mmsi:368456000/imo:9529695/vessel:BOB",
    "image": "https://i.imgur.com/Wr1slIc.png",
    "name": "Bob",
    "active": true,
    "launches": [
        "618faad2563d69573ed8ca9d",
        "6161c94c6db1a92bfba85349",
        "5fe3afc1b3467846b3242164",
        "6243ada6af52800c6e919253"
    ],
    "id": "618fad7e563d69573ed8caa9"
} */

const ShipIndividual = () => {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShip = async () => {
      // const response = await fetch(`https://api.spacexdata.com/v4/ships/${id}`);
      const response = await fetch(`/api/spacex/ships/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch ship details');
      }
      const data = await response.json();
      setShip(data);
      setLoading(false);
    };

    fetchShip().catch(error => {
      console.error('Error fetching ship:', error);
      setLoading(false);
    });
  }, [id]);

  

  if (loading) return <Container>Loading...</Container>;
  if (!ship) return <Container>No ship data found.</Container>;


  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={ship.image} alt={ship.name} />
            <Card.Body>
              <Card.Title>{ship.name}</Card.Title>
              <Card.Text>Type: {ship.type}</Card.Text>
              <Card.Text>Home Port: {ship.home_port}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>IMO: {ship.imo}</ListGroup.Item>
                <ListGroup.Item>MMSI: {ship.mmsi}</ListGroup.Item>
                <ListGroup.Item>ABS: {ship.abs}</ListGroup.Item>
                <ListGroup.Item>Class: {ship.class}</ListGroup.Item>
                <ListGroup.Item>Mass: {ship.mass_kg} kg</ListGroup.Item>
                <ListGroup.Item>Year Built: {ship.year_built}</ListGroup.Item>
                <ListGroup.Item>Roles: {ship.roles.join(', ')}</ListGroup.Item>
                <ListGroup.Item>Status: {ship.status || 'Unknown'}</ListGroup.Item>
                <ListGroup.Item>Active: {ship.active ? 'Yes' : 'No'}</ListGroup.Item>
                <ListGroup.Item>
                  <a href={ship.link} target="_blank" rel="noopener noreferrer">MarineTraffic Link</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Launch Participation</Card.Header>
            <ListGroup variant="flush">
              {ship.launches.map(launchId => (
                <ListGroup.Item key={launchId}>{launchId}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          {/* 

          "speed_kn": null,
    "course_deg": null,
    "latitude": null,
    "longitude": null,
    "roles": [
        "Fairing Recovery",
        "Support Ship"
    ],
    last_ais_update": null,
    "legacy_id": null,
    "model": null,*/}
        
        </Col>
      </Row>

      <Card className="mt-3">
        <Card.Header>Raw JSON Data</Card.Header>
        <Card.Body>
          <pre>{JSON.stringify(ship, null, 2)}</pre>
        </Card.Body>
      </Card>

      <Card className="mt-3">
          <Card.Header>Location</Card.Header>
          <Card.Body>
          {/* if ship.latitude && ship.longitude */}
          <ListGroup>
          <ListGroup.Item>Latitude: {ship.latitude}</ListGroup.Item>
          <ListGroup.Item>Longitude: {ship.longitude}</ListGroup.Item>
          </ListGroup>
          { 
            ship.latitude && ship.longitude && (
                <div style={{ height: '400px', width: '100%' }}>
        <MapContainer center={[ship.latitude, ship.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
          <Marker position={[ship.latitude, ship.longitude]}>
            <Popup> The location of Ship "{ship.name}"</Popup>
          </Marker>
        </MapContainer>
      </div>
            )

          }
          </Card.Body>
        </Card>

    </Container>
  );
};

export default ShipIndividual;


{/* <ReactMapGL
              {...viewport}
              width="100px"
              height="400px"
              mapboxAccessToken="pk.eyJ1IjoibmFhdXNlcm5hbWUiLCJhIjoiY2x0ZHRzdzhnMDZ4azJrcGp0aTNveHNiOSJ9.KMIfvVh_a3LxYGs8c4vHyw"
              onViewportChange={newViewport => setViewport(newViewport)}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              scrollZoom
              dragPan
              dragRotate
            >
              <Marker
                latitude={ship.latitude}
                longitude={ship.longitude}
              >
                <div>Marker</div>
              </Marker>
            </ReactMapGL> */}