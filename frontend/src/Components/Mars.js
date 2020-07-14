import React, { Component, useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap'

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
            
            <Container>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
                        
                           
                          
                            
                        
                  
        )
}
