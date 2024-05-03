import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/SidebarCus'; 
import MyNavbar from './components/AppBar'; 
import FooterCus from './components/FooterCus';

function App() {
  return (
    <Container fluid className="p-0" style={{ minHeight: '100vh' , paddingLeft:'20px' }}>
      <Row className="align-items-stretch">
        <Col xs={3} lg={1} md={1} sm={2} className="p-0" >
          {/* // side bar should be sticking to to the right of the col */}
          <Sidebar style={{  margin:'10px' }} />
        </Col>
        <Col xs={9} lg={11} md={11} sm={10} className="p-0">
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
