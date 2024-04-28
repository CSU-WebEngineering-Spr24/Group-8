import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/SidebarCus'; // Assume you have a Sidebar component
import MyNavbar from './components/AppBar'; // Assume you have a Navbar component
import FooterCus from './components/FooterCus'; // Assume you have a Footer component

function App() {
  return (
    <Container fluid className="p-0" style={{ minHeight: '100vh' , paddingLeft:'20px' }}>
      <Row className="align-items-stretch">
        <Col xs={2} lg={2} md={2} sm={3} className="p-0" >
          {/* // side bar should be sticking to to the right of the col */}
          <Sidebar style={{  margin:'10px' }} />
        </Col>
        <Col xs={10} lg={10} md={9} sm={9} className="p-0">
          <MyNavbar />
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col className="p-0">
          <div className="flex-grow-1" style={{  margin:'10px' }}>
            <Outlet />
          </div>
          <FooterCus />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
