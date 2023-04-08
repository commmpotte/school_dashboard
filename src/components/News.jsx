import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const News = () => {
  return (
    <Container className="py-5 h-300" style={{ height: '100vh' }}>
      <Row>
        <Col md={8} lg={9}>
          <h2>News</h2>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Important Notice</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies ligula auctor, pulvinar urna eu, suscipit quam. Sed eu
                vestibulum nisi, vel bibendum neque. Praesent ut massa
                malesuada, finibus sapien ac, pellentesque odio. Donec fermentum
                vel elit at hendrerit. Nullam ac bibendum ex. Etiam tincidunt
                arcu non tellus viverra congue.
              </Card.Text>
              <Card.Footer className="text-muted">
                Posted 2 hours ago
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Class Cancellation</Card.Title>
              <Card.Text>
                Pellentesque ut orci eu justo elementum pellentesque. In hac
                habitasse platea dictumst. Donec lacinia, nisi vel tempor
                pretium, massa est elementum elit, quis faucibus lacus urna vel
                elit. Vivamus sit amet erat semper, tempor lorem a, dignissim
                eros. Vivamus non nulla nibh. Aliquam vitae dolor in velit
                luctus accumsan at nec ex. Nulla euismod, lectus eget pharetra
                vehicula, quam mi venenatis nulla, sit amet feugiat libero quam
                sit amet felis. Vestibulum lacinia augue justo, vel posuere
                tellus imperdiet ac. Nullam at tellus ut odio ultricies posuere
                sed ut elit. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Mauris volutpat leo
                sit amet nibh commodo suscipit. Nullam id mi non quam ultrices
                mollis.
              </Card.Text>
              <Card.Footer className="text-muted">Posted 1 day ago</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <h4>Upcoming Events</h4>
          <Card className="my-4">
            <Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">February 12 - Science Fair</li>
                <li className="list-group-item">
                  February 15 - President's Day (School Closed)
                </li>
                <li className="list-group-item">
                  February 22 - Field Trip to Museum
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default News
