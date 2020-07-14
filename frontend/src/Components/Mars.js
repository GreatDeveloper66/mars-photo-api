import React, { Component, useState } from 'react'
import { Row, Container, Col, Form } from 'react-bootstrap'

export default function Mars() {
    const [ camera, setCamera ] = useState('FHAZ')
    const [ sol, setSol ] = useState(0)
    const handleChange = event => setCamera(event.target.value)
    const handleIncDec = event => setSol(event.target.value)
    const handleSubmit = () => {
        console.log('camera', camera)
        console.log('sol', sol)
    }

    return(
        <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={12} sm={4} lg={3} className="d-flex justify-content-center">
              <Form> 
                <Form.Row> 
                    <h1>MARS PHOTO API</h1>
                </Form.Row> 
                <Form.Row> 
                    <h3>CURIOSITY</h3> 
                </Form.Row> 
                <Form.Row> 
                    <label htmlFor="sol">Sol</label> 
                    <input type="number"></input> 
                </Form.Row> 
                <Form.Row> 
                <label htmlFor="camera">Camera</label> 
                <select id="cameras" name="cameras" value={camera} onChange={handleChange}> 
                    <option value="FHAZ">FHAZ</option> 
                    <option value="RHAZ">RHAZ</option> 
                    <option value="MAST">MAST</option> 
                    <option value="CHEMCAM">CHEMCAM</option> 
                    <option value="MAHLI">MAHLI</option> 
                    <option value="MARDI">MARDI</option> 
                    <option value="NAVCAM">NAVCAM</option> 
                    <option value="PANCAM">PANCAM</option> 
                    <option value="MINITES">MINITES</option> 
                </select> 
            </Form.Row> 
            <Form.Row> 
                <button type="submit" onSubmit={handleSubmit}>Find Photos</button> 
            </Form.Row> 
        </Form> 
    </Col>
</Row>
</Container>   
)
}
