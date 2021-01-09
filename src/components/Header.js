import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputf from "./Inputf";


function Header(){
const head="Want To Find Someone? "
const [wel,changehead]=React.useState(head)

function change(){
const head1="Lets get started!"
 changehead(head1);}

 

    return(
        <div>
            <header>
            <p className="headnew" style={{fontSize:"2rem"}}>{wel} </p>

            <Container fluid style={{backgroundColor:"rgba(56, 58, 59,0.8)", width:"50%", marginTop:"3%", borderRadius:"30px"}}>
                <Row>
                    <Col xs={6} style={{marginLeft:"auto",marginRight:"auto"}} >
                    <div className="headdiv">
                    <span> <Inputf /></span>
                    <div style={{marginLeft:"auto",marginRight:"auto",display: 'flex',alignItems: 'center',justifyContent: 'center'}}><span><button className="go" onClick={change}  style={{marginLeft:"auto",marginRight:"auto"}}  >Start</button></span></div>
                    </div>

                    </Col>

                    
             </Row>
             

             </Container>
             <p className="headnew"> Results</p>

            </header>
        </div>
    );
}

export default Header