import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

const Schedule = () => {
  return (
    <Container fluid className='mt-4'>
      <h1 className="mt-3 mb-3">Schedule</h1>
      <Row>
        <Col>
          <h3>Monday</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Classroom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00-10:00</td>
                <td>Mathematics</td>
                <td>Room 101</td>
              </tr>
              <tr>
                <td>10:00-11:00</td>
                <td>History</td>
                <td>Room 102</td>
              </tr>
              <tr>
                <td>11:00-12:00</td>
                <td>Physics</td>
                <td>Room 103</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <h3>Tuesday</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Classroom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00-10:00</td>
                <td>English</td>
                <td>Room 201</td>
              </tr>
              <tr>
                <td>10:00-11:00</td>
                <td>Chemistry</td>
                <td>Room 202</td>
              </tr>
              <tr>
                <td>11:00-12:00</td>
                <td>Biology</td>
                <td>Room 203</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule
