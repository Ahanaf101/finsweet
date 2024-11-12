import React from 'react'
import { Col } from 'react-bootstrap'

function Perspectorreusable({img}) {
  return (
    <Col lg={4}>
        <img src={img} alt="" />
        <p className='pt-[40px] pb-[16px] text-gray-500'>19 Jan 2022</p>
        <h4 className='pb-[16px] font-semibold'>How one Webflow user grew his single person consultancy from <br /> $0-100K in 14 months</h4>
        <h6 className='pb-[32px text-gray-500 pb-[30px]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h6>
        <a className='no-underline text-black ' href="#">Read More</a>
    </Col>
  )
}

export default Perspectorreusable