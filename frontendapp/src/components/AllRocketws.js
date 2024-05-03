import React, { useEffect, useState } from 'react';
import CategorySection from './CategorySection';
import RocketCard from './Cards/RocketCard';  // Assuming RocketCard is the component used to display each rocket
import { Container } from 'react-bootstrap';

const AllRocketsPage = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch('https://api.spacexdata.com/v4/rockets/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: {},
          options: {
            pagination: false
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch rockets');
      }

      const data = await response.json();
      setRockets(data.docs);  // Assuming the data returned follows the structure mentioned
      setLoading(false);
    };

    fetchRockets().catch(error => {
      console.error('Error fetching rockets:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1>All Rockets</h1>
      <CategorySection title="Rockets" items={rockets} ItemComponent={RocketCard} showMore={false} />
    </Container>
  );
};

export default AllRocketsPage;
