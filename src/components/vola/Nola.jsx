import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
function Nola() {
  return (
    <section className='bg-black pt-[120px]'>
      <Container>
        <Row>
          <Col lg={5}>
          <img src={logo} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Nola