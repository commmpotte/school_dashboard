import React from 'react'
import { Card, Col } from 'react-bootstrap'


const Student = ({ id, name, age, gender, grade, gpa, image }) => {
  return (
    <Col>
      <Card className="card">
        <Card.Img
          style={{ height: '200px', objectFit: 'cover' }}
          variant="top"
          src={image}
          alt={`${name}'s photo`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Age: {age}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
          <Card.Text>Grade: {grade}</Card.Text>
          <Card.Text>GPA: {gpa}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Student
