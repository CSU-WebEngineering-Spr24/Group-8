import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CrewPage() {
  const [crewData, setCrewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/spacex/crew');
        setCrewData(response.data);
      } catch (error) {
        console.error('Error fetching crew data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {crewData.map(crew => (
          <div className="col-md-4 mb-4" key={crew.id}>
            <div className="card">
              <img src={crew.image} className="card-img-top" alt={crew.name} />
              <div className="card-body">
                <h5 className="card-title">{crew.name}</h5>
                <p className="card-text">Agency: {crew.agency}</p>
                <p className="card-text">Status: {crew.status}</p>
                <a href={crew.wikipedia} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Wikipedia</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrewPage;
