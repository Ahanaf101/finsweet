import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aunty from "../../assets/aunty.png"
function Review() {
  return (
   <section className='bg-stone-200' >
    <Container>
        <Row>
            <Col lg={3}>
             <h6 className='text-[35px] ml-6 font-bold pt-[128px] '>What our clients say about us</h6>
             <p className='pt-[16px] ml-6  text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </Col>
            <Col lg={{span:8,offset:1}}>
            <h6 className='text-[30px] pt-[128px] font-semibold pb-[48px] ml-9'>"The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."</h6>
            <div className="gf flex pb-[130px] ">
                <img className='w-[70px] ml-9' src={aunty} alt="" />
                <div className="gs  ">
                    <h6 className='ml-4'>Jenny Wilson</h6>
                    <p className='ml-4'>Vice President</p>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Review