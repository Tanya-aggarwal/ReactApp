import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ReactDOM from "react-dom"




function Inputf()
{
const [name,Setname]=React.useState("")
function onchange(event)
 {
   console.log(event.target.value)
  Setname(event.target.value);
 }



    return(
        <div style={{margin:"auto"}}>
     <p className="head"> I am  {name}</p>

      <InputGroup style={{width:"90%"}} className="box" value={name}>
    <FormControl
      placeholder="Enter Your Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={onchange}
    />
  </InputGroup>


  </div>
    )
}

export default Inputf;