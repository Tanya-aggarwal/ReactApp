import React, { useState } from 'react';

import Image from "./Image";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./Details"




function Contact()
{

    return(
        <div>
            <div className="container1" style={{marginTop:"-3px"}}>
            <Container >
                <Row style={{paddingTop:"5%",paddingBottom:"5%"}}>
                    <Col xs={6} style={{marginLeft:"auto",marginRight:"auto"}} >
                           <Image /> 
                    </Col>

                    <Col xs={6}>
                    <Details />
                   
                    </Col>
                    
             </Row>
             

             </Container>
                
                


            </div>

        </div>

    )
}

export default Contact