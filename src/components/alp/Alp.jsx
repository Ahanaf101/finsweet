import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import card from "../../assets/Card.png"
import choto1 from "../../assets/choto1.png"
import choto2 from "../../assets/choto2.png"
function Alp() {
  return (
   <section className='bg-gray-100'>
    <Container>
        <Row>
            <Col lg={8}>
                <h6 className='text-[48px] font-semibold text-indigo-950 pb-[64px] pt-[30px] '>View our projects</h6>
            <   img className='pb-[50px]' src={card} alt="" />
            </Col>
            <Col lg={4}>
                <p  className='pb-[53px] pt-[64px] text-right mr-10 '> View More</p>
                <img className='pb-[32px] ' src={choto1} alt="" />
                <img src={choto2} alt="" />
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Alp