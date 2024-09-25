import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Accordion, Form, Button } from 'react-bootstrap'
import Cards from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addVehicle ,search } from '../redux/vehicle'
function Garage() {
    const dispatch = useDispatch()
    const [Card, setCard] = useState({ ownerName: '', vehicleNumber: '', ownerNumber: '', vehicleIssue: '', date: '' })
    const [ser, setSer] = useState('')
    var data = useSelector(state => state.vehicleReducer)
    const add = () => {
        dispatch(addVehicle(Card))
    }

   

    return (
        <div>

            <Container >

                <div className='d-flex justify-content-center'> <Row> <Col><input type="text" className='form-control mb-3 px-4 py-2 w-100 ' placeholder='Search...' onChange={e => setSer(e.target.value)} /></Col><Col><Button variant='danger' onClick={e=> dispatch(search(ser))}><i className="fa-solid fa-magnifying-glass"onClick={e=> dispatch(search(ser))}></i></Button></Col></Row></div>

                <Accordion className=' mt-3 mb-5 '>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header >Add Vehicle To Garage</Accordion.Header>
                        <Accordion.Body className='p-5'>
                            <Form.Control type="text" className="form-control mb-3 border-2 border border-white" placeholder='Vehicle Number' required onChange={e => setCard({ ...Card, vehicleNumber: e.target.value })} />
                            <Form.Control type="text" placeholder='Owner Name' className="form-control mb-3 border-2 border border-white" required onChange={e => setCard({ ...Card, ownerName: e.target.value })} />
                            <Form.Control type="number" placeholder='Owner Number' className="form-control mb-3 border-2 border border-white" required onChange={e => setCard({ ...Card, ownerNumber: e.target.value })} />
                            <Form.Control type="text" placeholder='Vehicle Issue' className="form-control mb-3 border-2 border border-white" required onChange={e => setCard({ ...Card, vehicleIssue: e.target.value })} />
                            <Form.Control type="text" placeholder='Date Of Entry' className="form-control mb-3 border-2 border border-white" required onChange={e => setCard({ ...Card, date: e.target.value })} />
                            <Button variant="success" className='w-100' onClick={add}>
                                Add
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Container className='w-100'>
                <Row>
                    {
                        data.vehicle.length > 0 ?
                            data?.vehicle?.map(obj => (

                                <Col sm={12} md={4} lg={3} ><Cards data={obj} /></Col>

                            ))
                            : ''
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Garage
