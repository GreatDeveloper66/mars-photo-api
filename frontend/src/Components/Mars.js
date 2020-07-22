import React, { Component, useState } from 'react'
import { Row, Container, Col, Form, Button } from 'react-bootstrap'
//import { URL } from './EnvVars'
import fetch from 'isomorphic-fetch'

const URL = process.env.REACT_APP_APIURL
console.log(URL)

export default function Mars() {
    const [ camera, setCamera ] = useState('FHAZ')
    const [ sol, setSol ] = useState(0)
    const handleChange = event => setCamera(event.target.value)
    const handleIncDec = event => setSol(event.target.value)
    const handleSubmit = event => {
        console.log(URL)
        event.preventDefault()
        fetch(`${URL}`)
            .then(resp => resp.json())
            .then(data => console.log(data))

        console.log('camera', camera)
        console.log('sol', sol)
    }
    const colStyle={
        backgroundColor: 'lightblue',
        boxShadow: '3px 3px grey'
    }
    return(
        <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={12} sm={4} className="d-flex justify-content-center" style={colStyle}>
              <Form onSubmit={handleSubmit}> 
                <Form.Row className="d-flex justify-content-center align-items-center"> 
                    <h1>MARS PHOTO API</h1>
                </Form.Row> 
                <Form.Row className="d-flex justify-content-center align-items-center"> 
                    <h3>CURIOSITY</h3> 
                </Form.Row> 
                <Form.Row className="d-flex justify-content-start align-items-center">
                    <Col xs={3}>
                    <label htmlFor="sol"className="d-flex mr-5">Sol</label> 
                    </Col>
                    <Col xs={9}>
                    <input type="number"></input> 
                    </Col>
                </Form.Row> 
                <Form.Row> 
                    
                        <Col xs={3}>
                <label htmlFor="camera" className="d-flex mr-3" >Camera</label> 
                </Col>
                <Col xs={9}>
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
                </Col>
                
            </Form.Row> 
            <Form.Row className="d-flex justify-content-center align-items-center"> 
                <Button type="submit" variant="primary">Find Photos</Button> 
            </Form.Row> 
        </Form> 
    </Col>
</Row>
</Container>   
)
}
