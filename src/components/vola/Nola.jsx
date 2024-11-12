import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import face from "../../assets/facebook.png"
import ins from "../../assets/ins.png"
import linkdin from "../../assets/instagram.png"
import twitter from "../../assets/twi.png"
function Nola() {
  return (
    <section className='pt-[128px]'>
      <div className="k bg-ho ">
        <Container>
        <Row>
          <Col lg={5}>
          <img className='pt-[100px] pb-[22px]' src={logo} alt="" />
          <p className='pb-[86px] text-white'>We are always open to discuss your project and improve your online presence.</p>
          <div className="sd flex bg-hy text-center w-[400px]">
            <div className="sdfs pl-[30px]">
                <p className='text-black pt-[20px]'>Email me at</p>
            <h6 className='text-black'>contact@website.com</h6>
            </div>
          
            <div className="sdf  ">
              <p className='text-black pl-[30px] pt-[20px]' >Call us</p>
              <h6 className='text-black pl-[30px]'>0927 6277 28525</h6>
            </div>
          </div>
          </Col>
          <Col lg={{span:6,offset:1}}>
          <h1 className='pt-[90px] font-bold text-[45px] text-white'>Lets Talk!</h1>
          <div className="we flex pt-[126px] ">
            <img className='pr-3' src={face} alt="" />
            <img className='pr-3' src={twitter} alt="" />
            <img className='pr-3' src={ins} alt="" />
            <img src={linkdin} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
      </div>
      
    </section>
  )
}

export default Nola