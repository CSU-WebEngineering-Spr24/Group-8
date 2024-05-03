import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Container, Row, Col, Table, Form, Card } from 'react-bootstrap';
import Globe from 'react-globe.gl';

const Starlink = () => {
  const [satellites, setSatellites] = useState([]);
  const [satData, setSatData] = useState([]);
  const [globeRadius, setGlobeRadius] = useState();
  const [time, setTime] = useState(new Date());
  const [filter, setFilter] = useState('');
  const globeEl = useRef();
  const [globeWidth, setGlobeWidth] = useState(300); // Initial width

  useEffect(() => {
    // Fetch Starlink satellite data from SpaceX API
    // fetch('https://api.spacexdata.com/v4/starlink')
    fetch('/api/spacex/starlink')
      .then(response => response.json())
      .then(data => {
        setSatellites(data);
        const satData = data.map(sat => ({
          name: sat.spaceTrack.OBJECT_NAME,
          lat: sat.latitude,
          lng: sat.longitude,
          alt: sat.height_km / 6371 // Convert height to altitude
        }));
        setSatData(satData);
      });
  }, []);

  const filteredSatellites = satellites.filter(satellite => {
    const name = satellite.spaceTrack.OBJECT_NAME;
    const country = satellite.spaceTrack.COUNTRY_CODE;
    return name.includes(filter) || country.includes(filter);
  });

  const objectsData = useMemo(() => {
    if (!satData) return [];

    return satData.map(d => ({
      ...d,
      lng: d.lng >= 180 ? d.lng - 360 : d.lng // Convert longitude to correct range (-180 to 180)
    }));
  }, [satData]);

  useEffect(() => {
    // Set the globe radius and adjust the point of view
    if (globeEl.current) {
      setGlobeRadius(globeEl.current.getGlobeRadius());
      globeEl.current.pointOfView({ altitude: 3.5 });
    }
  }, [globeEl.current]);

  useEffect(() => {
    // Update globe width based on screen width
    const handleResize = () => {
      const width = window.innerWidth < 576 ? '100%' : window.innerWidth *0.9 / 2;
      setGlobeWidth(width);
    };
    // window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={6} className="mb-3 mb-md-0">
          <Card style={{alignItems: 'center',padding: '10px'}}>
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            objectsData={objectsData}
            objectLabel="name"
            objectLat="lat"
            objectLng="lng"
            objectAltitude="alt"
            objectFacesSurface={false}
            width={globeWidth}
            height={500}
          />
          </Card>
        </Col>
        <Col md={6} lg={6}>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Country Code</th>
                <th>Longitude</th>
                <th>Latitude</th>
              </tr>
            </thead>
            <tbody>
              {filteredSatellites.map(satellite => (
                <tr key={satellite.id}>
                  <td>{satellite.spaceTrack.OBJECT_NAME}</td>
                  <td>{satellite.spaceTrack.LAUNCH_DATE}</td>
                  <td>{satellite.spaceTrack.COUNTRY_CODE}</td>
                  <td>{satellite.longitude}</td>
                  <td>{satellite.latitude}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Starlink;
