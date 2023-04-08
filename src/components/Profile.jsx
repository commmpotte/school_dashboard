import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import '../index.css'

const Profile = () => {
  return (
    <Container className="pt-3">
      <Card className="my-3">
        <Card.Body>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <Image
                src="https://as2.ftcdn.net/v2/jpg/03/01/92/37/1000_F_301923753_4EAxJvORt3T1gL19sII1cM186I33GSHB.jpg"
                roundedCircle
                className="m-3 avatar"
              />
            </Col>
            <Col xs={12} md={8}>
              <h2 className="mb-3">Teacher Name</h2>
              <p>
                <strong>Email:</strong> teacher@example.com
              </p>
              <p>
                <strong>Phone:</strong> 123-456-7890
              </p>
              <p>
                <strong>Department:</strong> Mathematics
              </p>
              <p>
                <strong>Office:</strong> Building A, Room 101
              </p>
              <p>
                <strong>Office Hours:</strong> Monday-Friday, 9am-12pm
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Profile
