import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button,Container } from 'react-bootstrap';
import LaunchCard from './Cards/LaunchCard'; // Assuming you have created the LaunchCard component
import Pagination from 'react-bootstrap/Pagination';
const LaunchesPage = () => {
  const [launches, setLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    try {
    //   const response = await fetch('https://api.spacexdata.com/v4/launches');
      const response = await fetch('/api/spacex/launches');
      if (!response.ok) {
        throw new Error('Failed to fetch launches');
      }
      const data = await response.json();
      setLaunches(data);
    } catch (error) {
      console.error('Error fetching launches:', error);
    }
  };

  const handleSearch = async () => {
    try {
    //   const response = await fetch('https://api.spacexdata.com/v4/launches/query', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       query: {
    //         name: {
    //           $regex: searchTerm,
    //           $options: 'i'
    //         }
    //       }
    //     })
    //   });
    const response = await fetch('/api/spacex/searchlaunches?name='+searchTerm);
      if (!response.ok) {
        throw new Error('Failed to search launches');
      }
      const data = await response.json();
      setLaunches(data.docs);
      console.log(data.docs);
    } catch (error) {
      console.error('Error searching launches:', error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 12;

  // Calculate the index of the first and last launch of the current page
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(launches.length / launchesPerPage);

  return (
    <Container fluid>
      <Form inline className="mb-2" onSubmit={(e) => {e.preventDefault();handleSearch()}}>
        <FormControl
          type="text"
          placeholder="Search by name"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" onClick={(e) => {e.preventDefault();handleSearch()}}>Search</Button>
      </Form>
      <div>
      <Pagination className="d-flex justify-content-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <div className="d-flex flex-wrap">
        {currentLaunches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} xs={12} sm={6} lg={4} className="mb-3" />
        ))}
      </div>
      
    </div>
    </Container>
  );
};

export default LaunchesPage;
