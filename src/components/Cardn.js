import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Cardn(props)
{
    return(
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
    <Button variant="primary">Go</Button>
  </Card.Body>
</Card>
</div>
    )
}

export default Cardn