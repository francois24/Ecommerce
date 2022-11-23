import React from 'react';
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import '../CSS/Billing.css';
import Navbar from '../components/Navbar';


const Billing = () => {
  return (
    <div>
      <Navbar/>
      <MDBContainer className="my-5 py-5" style={{ maxWidth: '1100px' }}>
        <section>
          <MDBRow>
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p className="text-uppercase h4 text-font">Delivery Country:</p>
                  
                  <MDBRow>
                    <MDBCol md="1">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Others/extended-example/usa2.webp" className="rounded-circle me-2" style={{ width: '35px' }} alt="USA" />
                    </MDBCol>
                    
                    <MDBCol md="8">
                      {/* PRO NEEDED */}
                      <select className="custom-select">
                        <option value="1">United States</option>
                        <option value="2">Spain</option>
                        <option value="3">Poland</option>
                        <option value="4">Italy</option>
                        <option value="5">Greece</option>
                        <option value="6">Germany</option>
                        <option value="7">Croatia</option>
                        <option value="8">Sweden</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              
              <MDBAccordion className="card mb-4">
                <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo/Student Code or Vouchers'>
                  <MDBInput label='Enter code' type='text' />
                </MDBAccordionItem>
              </MDBAccordion>
              
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p className="text-uppercase fw-bold mb-3 text-font">Email address</p>

                  <MDBRow>
                    <MDBCol md="4">
                      <p>your-email@gmail.com</p>
                    </MDBCol>
                    
                    <MDBCol md="7">
                      <MDBBtn outline  className="float-end btn btn text-white" style={{background:'teal'}}>Change</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            
            <MDBCol md="4" className="mb-4 position-statics">
              <MDBCard className="mb-4">

                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0 text-font">
                    1 item <span className="float-end mt-1" style={{ fontSize: '13px' }}>Edit</span>
                  </MDBTypography>
                </MDBCardHeader>
                
                <MDBCardBody>
                  
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="rounded-3" style={{ width: '100px' }} alt="Blue Jeans Jacket" />
                    </MDBCol>
                    
                    <MDBCol md="6" className="ms-3">
                      <span className="mb-0 text-price">$35.00</span>
                      <p className="mb-0 text-descriptions">Denim jacket </p>
                      <span className="text-descriptions fw-bold">Black</span>
                      <span className="text-descriptions fw-bold">UK 8</span>

                      <p className="text-descriptions mt-0">
                        Qty: <span className="text-descriptions fw-bold">1</span>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
                
                <MDBCardFooter className="mt-4">
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                      Subtotal
                      <span>$35.00</span>
                    </MDBListGroupItem>
                    
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                      Total to pay
                      <span>$35.00</span>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" className="mb-4">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
                </MDBCardHeader>

                <MDBCardBody>
                  <div className="mx-auto gradient-custom mt-5" >
                    <MDBRow className="pt-3 mx-3">
                      <MDBCol md="3">
                        <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
                          <MDBIcon fas icon="shipping-fast text-dark" size="3x" />
                          <MDBTypography tag="h3" className="text-dark">Welcome</MDBTypography>
                          <p style={{ color: '#495057' }}>You are 30 seconds away from compleating your order!</p>
                        </div>
                        
                        <div className="text-center">
                          <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
                        </div>
                      </MDBCol>
                      
                      <MDBCol md="9" className="justify-content-center">
                        <MDBCard className="card-custom pb-4">
                          
                          <MDBCardBody className="mt-0 mx-5">
                            <div className="text-center mb-3 pb-2 mt-3">
                              <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                            </div>
                            
                            {/* Form Section Starts*/}

                            <form className="mb-0">
                              <MDBRow className="mb-4">
                                <MDBCol>
                                  <MDBInput label='First Name' type='text' placeholder='Enter your First Name' />
                                </MDBCol>

                                <MDBCol>
                                  <MDBInput label='Last name' type='text' placeholder='Enter your Last Name' />
                                </MDBCol>
                              </MDBRow>
                              
                              <MDBRow className="mb-4">
                                <MDBCol>
                                  <MDBInput label='City' type='text' placeholder='Enter your City' />
                                </MDBCol>
                                
                                <MDBCol>
                                  <MDBInput label='Zip' type='text' placeholder='Enter your Zip' />
                                </MDBCol>
                              </MDBRow>
                              
                              <MDBRow className="mb-4">
                                <MDBCol>
                                  <MDBInput label='Address' type='text' placeholder='Enter your Address' />
                                </MDBCol>

                                <MDBCol>
                                  <MDBInput label='Email' type='text' placeholder='Enter your Email' />
                                </MDBCol>
                              </MDBRow>
                              

                              <div className="float-end">
                                <button style={{ backgroundColor: 'teal' }} className='btn btn text-center text-white rounded-2'>
                                  Place Order
                                </button>
                              </div>
                            </form>
                            {/* Form Section Ends*/}
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
}
export default Billing
