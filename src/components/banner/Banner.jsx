import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/banner.png"

function Banner() {
  return (
    <section className='bg-ho'>
       <Container>
        <Row>
            <Col lg={6}>
            <div className="left">
                <h3 className='text-[54px] font-bold pt-[128px] text-white'>Building stellar websites for early startups</h3>

                <p className='text-[16px] pt-[24px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                
                <div  className="button pt-[48px] pb-[128px] flex">
                    <a className='px-[56px] py-[16px] border-[1px] border-white rounded-[30px] bg-ko no-underline text-black animate-pulse ' href="#">View our work</a>
                    <p className='mt-3 pl-9 text-white  '>view pricing</p>
                </div>
                
            </div>
            </Col>
            <Col lg={6}>
         <img className='pt-[128px] ' src={banner} alt="" />
            </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Banner