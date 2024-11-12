import React from 'react'
import { Col } from 'react-bootstrap'
import one from "../../assets/one.png"
const Chotoreusable =({title,pera,img,ClassName}) =>{
   
   
    
  return (
    <Col lg={6}>
                    <img src={img} alt="" />
                      <h6 className='text-[32px] font-medium pt-[16px] pb-[8px]'>{title}</h6>
                      <p className='text-[16px] text-indigo-950 pb-[30px] '>{pera}</p>
                    </Col>
  )
}

export default Chotoreusable