import React from 'react'
import Col from 'react-bootstrap/Col';
import { button} from 'react-bootstrap/button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <>
    <Container  fluid>
       <Row  fluid className="justify-content-md-center d-flex mt-4 gap-x-">
  
      <Col sm={12} md={4} lg={4} className='mt-4 fluid gap-2 move-up-slow'>

 <Link to="/servise" > 
 <img src="https://baroque.pk/cdn/shop/files/02_Banner202_ca5b3df3-88ca-4197-961f-a8bbbad12333.jpg?v=1729245091&width=500"  alt='hbejh' style={{ }} />
        <div className=' text-center mt-3  ' style={{fontSize:"27px", fontWeight:"", width:"435px", }}><h2>Ready To Wear</h2></div>
        
        <button className="  mt-4" style={{
           display:"flex",
           justifyContent:"center",
            border: "1px solid black",
            width: "150px",
            padding: "10px 10px",
            fontSize: "16px",
            letterSpacing: '2px',
          transition: "background-color 0.20s ease", 
           backgroundColor:"black", 
            marginLeft:"140px",
            color:"white",
            alignContent:"center",
            // transform: "translateX(-50%)",
          
            
          }}

            onMouseEnter={(a) => {
              a.currentTarget.style.fontWeight = ""
              a.currentTarget.style.backgroundColor = "transparent";
              a.currentTarget.style.color = "black"
            }}
            onMouseLeave={(a) => {
              a.currentTarget.style.backgroundColor = "black";
              a.currentTarget.style.color = "white"
            }}
          >
            SHOP NOW</button></Link>
       
      </Col>
      <Col sm={12} md={4} lg={4} className='mt-4 fluid gap- move-up-slow'>
      <Link to="/Shawls">
<img src="https://baroque.pk/cdn/shop/files/02_Banner201.jpg?v=1729245108&width=500"  alt='hbejh' style={{ }} />
<div className=' text-center mt-3  ' style={{fontSize:"27px", fontWeight:"", width:"435px", }}><h2>SHAWALS</h2></div>

<button className="  mt-4" style={{
   display:"flex",
   justifyContent:"center",
    border: "1px solid black",
    width: "150px",
    padding: "10px 10px",
    fontSize: "16px",
    letterSpacing: '2px',
  transition: "background-color 0.20s ease", 
   backgroundColor:"black", 
    marginLeft:"140px",
    color:"white",
    alignContent:"center",
    // transform: "translateX(-50%)",
  
    
  }}

    onMouseEnter={(a) => {
      a.currentTarget.style.fontWeight = ""
      a.currentTarget.style.backgroundColor = "transparent";
      a.currentTarget.style.color = "black"
    }}
    onMouseLeave={(a) => {
      a.currentTarget.style.backgroundColor = "black";
      a.currentTarget.style.color = "white"
    }}
  >
    SHOP NOW</button></Link>

</Col>

<Col sm={12} md={4} lg={4} className='mt-4 fluid gap- move-up-slow'>
<Link to="/Chanttele">
        <img src="https://baroque.pk/cdn/shop/files/02_Banner191_db56136f-e843-4f69-818d-c8752ed48fba.jpg?v=1729245343&width=500"  alt='hbejh' style={{ }} />
        <div className=' text-center mt-3  ' style={{fontSize:"27px", fontWeight:"", width:"px", }}><h2>CHENTELLE</h2></div>
        
        <button className="  mt-4" style={{
           display:"flex",
           justifyContent:"center",
            border: "1px solid black",
            width: "150px",
            padding: "10px 10px",
            fontSize: "16px",
            letterSpacing: '2px',
          transition: "background-color 0.20s ease", 
           backgroundColor:"black", 
            marginLeft:"140px",
            color:"white",
            alignContent:"center",
            // transform: "translateX(-50%)",
          
            
          }}

            onMouseEnter={(a) => {
              a.currentTarget.style.fontWeight = ""
              a.currentTarget.style.backgroundColor = "transparent";
              a.currentTarget.style.color = "black"
            }}
            onMouseLeave={(a) => {
              a.currentTarget.style.backgroundColor = "black";
              a.currentTarget.style.color = "white"
            }}
          >
            SHOP NOW</button></Link>
       
      </Col>
      </Row>
     </Container>
    </>
  )
}

export default Main
 