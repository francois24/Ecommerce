import React from 'react'
import {Container , Row , Col} from 'react-bootstrap';
import {bannerItems} from '../data'
import '../CSS/Banner.css'


const Banner = () => {
  return (
    <div className='banner1'>
    <Container>
      {bannerItems.map((item) => (
        <Row>
            <Col sm={6}><img src={item.img1} alt=""style={{height: '65%'}}/></Col>
            <Col className='text-center text-bold' 
                 style={{marginTop: '20%'}} sm={6}>
                    <span style={{fontSize: '70px'}}>{item.title1}</span>
                    <br />
                    <span style={{fontSize: '20px',letterSpacing: '3px'}}>{item.desc1}</span>
                    <br/>
                   <button className='btn1'>SHOP NOW</button>
                 </Col>
        </Row>
         ))}       
    </Container>

    </div>
  )
}

export default Banner