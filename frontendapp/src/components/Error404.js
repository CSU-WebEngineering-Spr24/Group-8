import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WarningIcon from '@mui/icons-material/Warning';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const ErrorPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Error 404</Card.Title>
          <Card.Text className="text-center">
            Page Not Found
          </Card.Text>
          <div className="text-center">
            <ErrorOutlineIcon />
            <HomeIcon />
            <SearchIcon />
            <WarningIcon />
            <ReportProblemIcon />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ErrorPage;
