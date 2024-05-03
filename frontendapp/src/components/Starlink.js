import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Container, Row, Col, Table, Form, Card } from 'react-bootstrap';
import Globe from 'react-globe.gl';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const Starlink = () => {
  const [satellites, setSatellites] = useState([]);
  const [satData, setSatData] = useState([]);
  const [globeRadius, setGlobeRadius] = useState();
  const [time, setTime] = useState(new Date());
  const [filter, setFilter] = useState('');
  const globeEl = useRef();
  const [globeWidth, setGlobeWidth] = useState(300); // Initial width
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/api/spacex/starlink');
        const response = await fetch('https://api.spacexdata.com/v4/starlink');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSatellites(data);
        const satData = data.map(sat => ({
          name: sat.spaceTrack.OBJECT_NAME,
          lat: sat.latitude,
          lng: sat.longitude >= 180 ? sat.longitude - 360 : sat.longitude,
          alt: sat.height_km / 6371
        }));
        setSatData(satData);
        console.log(satData);
        setLoading(false); // Set loading to false when data is fetched successfully
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error); // Set error state if there's an error during fetching
        setLoading(false); // Set loading to false to indicate completion (even if error occurs)
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <CircularProgress />
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <ErrorOutlineIcon fontSize="large" color="error" />
            <p>Error fetching data. Please try again later.</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={6} className="mb-3 mb-md-0">
          <Card style={{alignItems: 'center',padding: '10px'}}>
          {satData.length > 0 && <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            objectsData={satData}
            objectLabel="name"
            objectLat="lat"
            objectLng="lng"
            objectAltitude="alt"
            objectFacesSurface={false}
            width={globeWidth}
            height={500}
          />}
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
              {satellites.map((satellite,index)=> (
                <tr key={index}>
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
