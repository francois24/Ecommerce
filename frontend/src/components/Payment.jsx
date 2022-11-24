import React from 'react';
import '../CSS/Payment.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';


const Payment = () => {
  return (
      <div>
          <Navbar/>
          <div className="mx-auto gradient-custom1 mt-5" style={{ maxWidth: '1000px', height: '510px' }}>
              <MDBRow className="pt-4 mx-3">
                  <MDBCol md="3">
                      <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}> 
                          <MDBIcon far icon="credit-card text-white" size="2x" /> <MDBIcon fab icon="cc-paypal" size="2x" className='mx-2 text-white' />
                          <MDBIcon fas icon="credit-card" size="2x" className='mx-2 text-white' />
                          <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
                          <p className="text-white">You are 30 seconds away from compleating your order!</p> 
                      </div>
                      
                      <div className="text-center">   
                          <MDBBtn color="white" rounded className="back-button bg-white">Go back</MDBBtn> 
                      </div>
                  </MDBCol>
                  
                  <MDBCol md="9" className="justify-content-center">
                      <MDBCard className="card1 card-custom pb-4">
                          <MDBCardBody className="mt-0 mx-5">
                              <div className="text-center mb-3 pb-2 mt-3">
                                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Payment Details</MDBTypography>
                              </div>
                              
                              <form className="mb-0">
                                  <MDBRow className="mb-4">
                                      <MDBCol>  
                                          <MDBInput label='First name' type='text' />
                                      </MDBCol>
                                      
                                      <MDBCol> 
                                          <MDBInput label='Last name' type='text' />    
                                      </MDBCol>    
                                  </MDBRow>
                                  
                                  <MDBRow className="mb-4"> 
                                      <MDBCol>      
                                          <MDBInput label='City' type='text' />   
                                      </MDBCol>
                                      
                                      <MDBCol>            
                                          <MDBInput label='Zip' type='text' />                                 
                                      </MDBCol>    
                                  </MDBRow>
                                  
                                  <MDBRow className="mb-4"> 
                                      <MDBCol>           
                                          <MDBInput label='Address' type='text' />                 
                                      </MDBCol>    

                                      <MDBCol>   
                                          <MDBInput label='Email' type='text' />                                      
                                      </MDBCol>     
                                  </MDBRow>

                                  <div className="float-end">
                                      <MDBBtn rounded style={{ backgroundColor: 'teal' }}>Place order</MDBBtn>                                     
                                  </div>         
                                  
                              </form>             
                          </MDBCardBody>                     
                      </MDBCard>         
                  </MDBCol>     
              </MDBRow>
          </div>

      </div>
      
  )
}

export default Payment
