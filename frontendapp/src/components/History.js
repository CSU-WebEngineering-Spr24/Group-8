import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

const HistoryTimeline = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        // const response = await fetch('https://api.spacexdata.com/v4/history'); // 
        const response = await fetch('/api/spacex/history'); // 
        if (!response.ok) {
          throw new Error('Failed to fetch history data');
        }
        const data = await response.json();
        setHistoryData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching history data:', error);
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  if (loading) return <Container>Loading...</Container>;
  if (historyData.length === 0) return <Container>No history data available.</Container>;

  return (
    <Container className="timeline">
      <h2>History</h2>
      <div className="timeline-line"></div>
      {historyData.map((event, index) => (
        // alternately align left and right
        <div key={event.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{new Date(event.event_date_utc).toLocaleString()}</Card.Subtitle>
              <Card.Text>{event.details}</Card.Text>
              <Card.Link href={event.links.article} target="_blank" rel="noopener noreferrer">Read More</Card.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default HistoryTimeline;
