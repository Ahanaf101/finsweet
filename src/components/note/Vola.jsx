import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Note() {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={4}>
                  <h6 className='text-[35px] font-bold pt-[128px] pb-[16px]'>Frequently  <br /> asked questions</h6>
                  <a className='text-purple-600 no-underline font-semibold' href="https://ahanafhossain.com/">Contact us for more info</a>
                </Col>
                <Col lg={{span:7,offset:1}}>
                <div className="number flex pt-[135px]">
                  <h5 className='pr-[59px] text-[25px] font-semibold text-purple-800'>01</h5>
                  <div className="text">
                    <h6 className='font-semibold text-[25px] pb-[16px]'>How much time does it take?</h6>
                    <p className='pb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   
                  </div>
                </div>
                <hr />
                <div className="sd flex pt-[32px]">
                  <p className='pr-[59px] text-[25px] font-semibold text-purple-800'>02</p>
                  <h6 className='font-semibold text-[25px] pb-[16px]'>What is your class naming convention?</h6>
                  
                </div>
                <hr />
                <div className="sd flex pt-[32px]">
                  <p className='pr-[59px] text-[25px] font-semibold text-purple-800'>03</p>
                  <h6 className='font-semibold text-[25px] pb-[16px]'>How do you communicate?</h6>
                  
                </div>
                <hr />
                <div className="sd flex pt-[32px]">
                  <p className='pr-[59px] text-[25px] font-semibold text-purple-800'>04</p>
                  <h6 className='font-semibold text-[25px] pb-[16px]'>I have a bigger project. Can you handle it?</h6>
                  
                </div>
                <hr />
                <div className="sd flex pt-[32px]">
                  <p className='pr-[59px] text-[25px] font-semibold text-purple-800'>05</p>
                  <h6 className='font-semibold text-[25px] pb-[16px]'>What is your class naming convention?</h6>
                  
                </div>
                <hr />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Note