import React, { useEffect, useState } from 'react';
import CategorySection from './CategorySection';
import { Container } from 'react-bootstrap';

const AllItemsPage = ({ category, ItemComponent }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.spacexdata.com/v4/${category}/query`, {
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
        throw new Error(`Failed to fetch ${category}`);
      }

      const data = await response.json();
      setItems(data.docs);  // Adjust based on actual API response
      setLoading(false);
    };

    fetchData().catch(error => {
      console.error(`Error fetching ${category}:`, error);
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1>All {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <CategorySection title={category.charAt(0).toUpperCase() + category.slice(1)} items={items} ItemComponent={ItemComponent} showMore={false} />
    </Container>
  );
};

export default AllItemsPage;
