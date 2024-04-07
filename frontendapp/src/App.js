import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routing
import Sidebar from './components/SidebarCus'; // Assume you have a Sidebar component
import FooterCus from './components/FooterCus'; // Assume you have a Footer component
import MyNavbar from './components/AppBar';

function App() {
  return (
    <Container fluid className="vh-100 p-0">
      <MyNavbar />
      <Col xs={12} md={3} lg={2} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Sidebar />
    </Col>
      <Row className="flex-nowrap" style={{ height: '100vh' }}>
    
    <Col xs={12} md={9} lg={10} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div className="flex-grow-1">
            {/* Outlet is used to render the matched child route elements */}
            <Outlet />
          </div>
          <FooterCus />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
