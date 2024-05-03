import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import RocketCard from './Cards/RocketCard';
import DragonCard from './Cards/DragonCard';
import ShipsCard from './Cards/ShipsCard';
import CapsuleCard from './Cards/CapsuleCard';
import CategorySection from './CategorySection';

const RocketIndex = () => {
  const [rockets, setRockets] = useState([]);
  const [dragons, setDragons] = useState([]);
  const [ships, setShips] = useState([]);
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    // fetch('https://api.spacexdata.com/v4/rockets')
    fetch('/api/spacex//rockets')
      .then(res => res.json())
      .then(data => {setRockets(data.slice(0, 3))});
    // fetch('https://api.spacexdata.com/v4/dragons')
    fetch('/api/spacex/dragons')
      .then(res => res.json())
      .then(data => setDragons(data.slice(0, 3)));
    // fetch('https://api.spacexdata.com/v4/ships')
    fetch('/api/spacex/ships')
      .then(res => res.json())
      .then(data => setShips(data.slice(0, 3)));
    // fetch('https://api.spacexdata.com/v4/capsules')
    fetch('/api/spacex/capsules')
      .then(res => res.json())
      .then(data => setCapsules(data.slice(0, 3)));

    // log the data 
    // console.log(rockets, dragons, ships, capsules);
  }, []);

  return (
    <Container>
      <CategorySection title="Rockets" items={rockets} ItemComponent={RocketCard} />
      <CategorySection title="Dragons" items={dragons} ItemComponent={DragonCard} />
      <CategorySection title="Ships" items={ships} ItemComponent={ShipsCard} />
      <CategorySection title="Capsules" items={capsules} ItemComponent={CapsuleCard} />
    </Container>
  );
};

/* const CategorySection = ({ title, items, ItemComponent }) => (
  <div>
    <h2>{title}</h2>
    <Row>
      {items.map(item => (
        <Col key={item.id} sm={12} md={6} lg={3}>
            {console.log("in category section",item)}
          <ItemComponent item={item} />
        </Col>
      ))}
    </Row>
    <Button variant="primary" className="mb-4">More {title}</Button>
  </div>
); */

export default RocketIndex;
