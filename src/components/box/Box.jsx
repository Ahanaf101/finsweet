import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Boxreusable from "../reusable/Boxreusable"
import iconone from "../../assets/qq.png"
import iconetwo from "../../assets/ee.png"
import iconthree from "../../assets/pol.png"
import iconfour from "../../assets/col.png"
import iconfive from "../../assets/icon.png"
import iconsix from "../../assets/rr.png"

function Box() {
  return (
    <section >
        <Container>
            <Row>
               <Col lg={12}>
                    <p className='text-center pt-[128px] font-semibold'>Features</p>
                    <h6  className='text-[48px] font-semibold text-center pb-[47px] '>Design that solves <br />problems, one product at a time</h6>

               </Col>
          
               <Boxreusable img={iconfive} heading="Uses Client First" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          <Boxreusable img={ iconthree} heading="Two Free Revision Round"text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          <Boxreusable img={ iconsix}  heading="Template Customization"text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          <Boxreusable img={  iconetwo} heading="24/7 Support"text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          <Boxreusable img={iconone} heading="Quick Delivery"text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          <Boxreusable img={iconfour} heading="Hands-on approach"text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
         

         
            </Row>

        </Container>
    
    </section>
    
  )
}

export default Box