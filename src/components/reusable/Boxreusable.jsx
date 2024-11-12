import React from 'react'
import { Col } from 'react-bootstrap'


const Boxreusable =({img,heading,text}) => {
  return (
  <Col  lg="4">
     <div className="box h-[316px] w-[405px] m-[24px]  bg-slate-100  ">
       <img className='pt-[53px] pl-[48px] pb-[23px] ' src={img} alt="" />
        <h6 className='pl-[48px]  pb-[12px] font-bold text-[25px] ' > {heading} </h6>
        <p className='pl-[48px] pb-[48px] text-gray-500 pr-[32px]' >{text}</p>
     </div>
  </Col>
  )
}

export default Boxreusable