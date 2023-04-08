import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="p-0">
          <Sidebar />
        </Col>
        <Col md={9}>
          <Content />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
