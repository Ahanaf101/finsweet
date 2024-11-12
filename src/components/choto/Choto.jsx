import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import one from "../../assets/one.png"
import Chotoreusable from '../reusable/Chotoreusable'
// import icon1 from "../../assets/icon1"

function Choto() {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={3}>
                    <h2 className='pt-[128px] pb-[16px] text-[45px] font-semibold'>How we work</h2>
                    <p className='pb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className='pb-[349px]'>Get touch with us</p>
                </Col>
                <Col className='pt-[128px]' lg={{span:6,offset:2}}>
                  <Row>
                    <Chotoreusable   className='pt-[128px]'  title="strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img={one}/>
                    <Chotoreusable  title="Wirefarming"pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."img={two}/>
                    <Chotoreusable  title="Design"pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."img={three}/>
                    <Chotoreusable  title="Development"pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."img={four}/>
                   
                  </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Choto