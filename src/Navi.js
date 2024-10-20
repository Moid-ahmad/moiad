import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineUser } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import {  Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';

function Navi() {
  return (
    <>
    
    <>
       {[false,].map((expand) => (
        
        <Navbar key={expand} expand={expand} 
        className=" bg-white pb-3 fixed-top shadow-sm full-screen   border-spacing-y-1 " // 'fixed-top' for keeping navbar fixed
        >

          
          <Container fluid>
            
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
          
          <div className="text-center" style={{display:"flex",textAlign:"center", border:"px solid black" }} >
          <Link to="/"> <img src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&amp;width=160" alt=''/></Link>          

            </div>
           
            <div className="d-lg-flex d-none" style={{display:"flex",justifyContent:"space-around", marginLeft:"", padding:"0px 0px" , border:"px solid black", width:"140px"  }}>            
            <span className="d-lg-flex d-none ">
            <Dropdown>
      <DropdownToggle 
        style={{ 
          fontSize: "11px", 
          outline: "none" 
        }} 
        variant="white"
      >
        Pakistan
      </DropdownToggle>
      <DropdownMenu 
        style={{ 
          width: "auto",  // Auto width to match text
          fontSize: "11px" 
        }}
      >
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>


              
              </span>
              <Link to="/Form2">
              <AiOutlineUser  className='text-xl'/>
              </Link>
                  <IoSearch     className='text-xl'/>

                    </div>                 
                    <div className="d-lg-none d-flex  gap-3" style={{width:"60px"   }}>            
                    <Link to="/Form2">
              <AiOutlineUser  className='text-xl'/>
              </Link>
              
                  <IoSearch     className='text-xl'/>

                    </div>                 

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='ml-5'>
                <Nav className="justify-content-end flex-grow-1 pe- ml-3">
                  <Link to="/" style={{fontSize:'17px', margintop:"10px", letterSpacing:"3px", }}> Home</Link>
                  <hr  style={{marginTop:"20px", width:"300px"}}/>
                  <Link to="/Chanttele" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}> CHANTELLE</Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  <Link to="/About" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}> Unstitched </Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  <Link to="/Shawls" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}>SHAWLS</Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  <Link to="/Servise" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}>READY TO WEAR</Link>
                  <hr style={{marginTop:"20px", width:"300px"}}/>
                  <Link to="/Special" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}>SPECIAL PRICES</Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  <Link to="/Bottoms" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}>BOTTOMS</Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  <Link to="/Dupattas" style={{fontSize:'16px', paddingTop:"10px", letterSpacing:"3px", }}>DUPATTAS</Link>
                  <hr style={{marginTop:"20px", width:"300px"}} />
                  
                  </Nav>
                <Form className="d-flex mt-5">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

        </Navbar>
      ))}
    </> 
     <Outlet /> 
      

      </>
  )
}

export default Navi
