import React from 'react'
import studentData from '../data/studentData'
import Student from './Student'
import { Row, Col } from 'react-bootstrap'

const Students = () => {
  return (
    <div className="container pt-4">
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {studentData.map((student) => (
          <Col key={student.id} className='col'>
            <Student {...student} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Students
