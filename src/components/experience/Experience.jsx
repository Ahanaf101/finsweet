import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../experience/experience.css"
function Experience() {
  return (
    <section>
        <Container>
            <Row>
                <div className="sd flex">
                    <Col lg={6} className='pt-[128px] '>
                    <div className="women ">
                        <h1 className='pt-[96px] pl-[96px] pb-[24px] pr-[96px] text-[60px] font-bold text-white'>Building stellar websites for early startups</h1>
                        <p className='pl-[96px] pr-[96px] pb-[261px] text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={6} className=' pt-[128px] mr-1'>
                    <div className="navi">
                        <h6 className='pt[196px] pr-[96px] pl-[96px] pt-[96px] text-white text-[35px] font-semibold'>Send inquiry</h6>
                        <p className='pt-3 pr-[96px] pl-[96px] font-semibold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                       <div className="gd">
                            <input type="text "  className='h-[64px] w-[432px] pl-[25px] bg-transparent border-[1px] border-solid border-gray-500   ml-[96px]  rounded-[5px] mb-[16px] mt-[40px]' placeholder='Your Name' />
                            <input type="text "  className='h-[64px] w-[432px] pl-[25px] bg-transparent border-[1px] border-solid border-gray-500   ml-[96px]  rounded-[5px] mb-[16px] ' placeholder='Email' />
                            <input type="text "  className='h-[64px] w-[432px] pl-[25px] bg-transparent border-[1px] border-solid border-gray-500   ml-[96px]  rounded-[5px] mb-[16px]  'placeholder='Paste your Figma design URL' />
                            
                        </div>
                            <div className="aas pt-[40px] pb-[107px]">
                            <a className='py-[16px] px-[100px] ml-[160px] rounded-[25px] no-underline text-center bg-hy' href="#">Send an Inquiry</a>
                           
                            </div>
                    </div>
                        
                </Col>
                </div>
                
            </Row>
        </Container>
    </section>
  )
}

export default Experience