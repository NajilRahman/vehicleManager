import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row,Col,Button,Accordion } from 'react-bootstrap'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

function Landiing() {
  return (
    <div>
      <div>
       
            <Container className='bg-light rounded-3 w-100 my-5 shadow ' style={{ minHeight: '300px', height: 'max-content' }} >
                <Row>
                    <Col sm={12} md={8} className='p-5'>
                    <i className="fa-solid fa-gear fa-3x mb-3"><span className='d-inline ms-3 text-dark '>Vehicle <p className='text-warning d-inline'>Manage</p></span></i>
                        <p className='text-dark fs-5 '>Vehicle management focuses on efficiently overseeing a fleet to optimize performance and reduce costs. It includes scheduling maintenance, tracking fuel usage, and monitoring driver behavior. By using technology like GPS and fleet management software, organizations can enhance productivity, minimize downtime, and improve overall operational efficiency.</p>
                        <Link to={'/garage'}>
                            <Button variant='warning' className='my-3 w-100'>Let's Start</Button>

                        </Link>                    </Col>
                    <Col sm={12} md={4} className=' d-flex align-items-center justify-content-center' ><i class="fa-solid fa-warehouse fa-10x  pb-5"></i></Col>
                </Row>
            </Container>



            <Container>
                <div className="row my-5 ">
                    <div className="col-md-4 col-sm-12 my-3  ">
                        <div className="card card-block px-3 py-4  bg-light text-center">
                            <img src={card1} alt="Photo of sunset" />
                            <h4 className="card-title mt-3 mb-3 text-dark ">Garage</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 my-3 ">
                        <div className="card card-block px-3 py-4  bg-light text-center">
                            <img src={card2} alt="Photo of sunset" />
                            <h4 className="card-title mt-3 mb-3 text-dark ">Vehicle service</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 my-3 ">
                        <div className="card card-block px-3 py-4  bg-light text-center">
                            <img src={card3} alt="Photo of sunset" />
                            <h4 className="card-title mt-3 mb-3 text-dark ">Home Pickup</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis.</p>
                        </div>
                    </div>



                </div>

            </Container>
        </div>
    </div>
  )
}

export default Landiing
