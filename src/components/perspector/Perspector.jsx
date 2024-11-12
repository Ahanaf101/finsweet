import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import hot from "../../assets/hot.png"
import man from "../../assets/man.png"
import apple from "../../assets/apple.png"
import Perspectorreusable from '../reusable/Perspectorreusable'

function Perspector() {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={12}>
                <p className='text-[40px] font-bold pt-[128px] pb-[64px]'>Our blog</p>
                </Col>
                <Perspectorreusable img={man}/>
                <Perspectorreusable img={hot} />
                <Perspectorreusable img={apple}  />
            </Row>
        </Container>
    </section>
  )
}

export default Perspector