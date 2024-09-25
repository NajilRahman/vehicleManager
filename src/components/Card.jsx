import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row, Modal } from 'react-bootstrap'
import { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import card1 from '../assets/card3.png'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux';
import { deleteVehicle, editVehicle } from '../redux/vehicle';
function Cards({data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const dispatch=useDispatch()
  const [Card,setCard]=useState({ownerName:data.ownerName,vehicleNumber:data.vehicleNumber,ownerNumber:data.ownerNumber,vehicleIssue:data.vehicleIssue,date:data.date})
  const editCard=()=>{
    dispatch(editVehicle(Card))
    handleClose()
  }
      return (
    <>
      <div className="card rounded mb-3" style={{minHeight:'430px'}}>
        <div className="card-image">
          <img
            className="img-fluid"
            src={card1}
            alt={''}
          />
        </div>

        <div className="card-body text-center ">
          <div className="ad-title">
            <h5>{data.vehicleNumber}</h5>
          </div>
          <Row className='text-center p-2'>
            <Col className='px-2 '>
              <button className="btn btn-warning  w-100 " onClick={handleShow} ><i className="fa-solid fa-pen-to-square" style={{ color: "#fafafa" }}></i></button>

            </Col>
            <Col className='px-2 '><button className="btn btn-danger w-100 "  onClick={e=>dispatch(deleteVehicle(data.vehicleNumber))}  ><i className="fa-solid fa-trash" ></i></button></Col>
            <Col className='px-2 '><button className="btn btn-info w-100 "  onClick={handleShow2} ><i className="fa-solid fa-eye"></i></button></Col>

          </Row>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicles Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Control type="text" className="form-control mb-3" value={Card.vehicleNumber} onChange={e=>{setCard({...Card,vehicleNumber:e.target.value})}} required />
          <Form.Control type="text" value={Card.ownerName} className="form-control mb-3"  onChange={e=>{setCard({...Card,ownerName:e.target.value})}} />
          <Form.Control type="number" value={Card.ownerNumber} className="form-control mb-3"onChange={e=>{setCard({...Card,ownerNumber:e.target.value})}}  />
          <Form.Control type="text" value={Card.vehicleIssue} className="form-control mb-3" onChange={e=>{setCard({...Card,vehicleIssue:e.target.value})}} />
          <Form.Control type="text" value={Card.date} className="form-control mb-3" onChange={e=>{setCard({...Card,date:e.target.value})}}  />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={editCard}>Edit</Button>
        </Modal.Footer>
      </Modal>







      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vehicle Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Control type="text" className="form-control mb-3" value={Card.vehicleNumber} onChange={e=>{setCard({...Card,vehicleNumber:e.target.value})}} disabled required />
          <Form.Control type="text" value={Card.ownerName} className="form-control mb-3"  onChange={e=>{setCard({...Card,ownerName:e.target.value})}} disabled />
          <Form.Control type="number" value={Card.ownerNumber} className="form-control mb-3"onChange={e=>{setCard({...Card,ownerNumber:e.target.value})}}   disabled/>
          <Form.Control type="text" value={Card.vehicleIssue} className="form-control mb-3" onChange={e=>{setCard({...Card,vehicleIssue:e.target.value})}}  disabled/>
          <Form.Control type="text" value={Card.date} className="form-control mb-3" onChange={e=>{setCard({...Card,date:e.target.value})}}  disabled />


        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cards;
