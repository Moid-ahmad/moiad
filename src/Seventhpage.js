import React from 'react'
import  { useState } from 'react';
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Seventhpage(props) {
    const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/products/5_8_ae9fac23-746f-4bfd-a71f-5ab8da59fa2b.jpg?v=1638602800&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/products/20_2.jpg?v=1638602795&width=800")
  const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/products/34_4.jpg?v=1636697449&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/products/44_2.jpg?v=1638602612&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/products/2_3f3d1ab1-7784-43de-b376-0e307201565b.jpg?v=1629109542&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/products/141_1.jpg?v=1679118489&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/products/3copy_0b1708ca-effa-4ce4-8071-67ae30f4e38c.jpg?v=1635330343&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/products/215.jpg?v=1644669671&width=800")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/products/12_24.jpg?v=1635319416&width=800")

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);
  return (
    <div>
      <>
  <div className='text-center ' style={{fontSize:"35px", marginTop:"170px"}}>
  DUPATTAS
  </div>
<hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px",  }}/>
  <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
    <Row className='d-none d-lg-flex'>
    

      <Col  md={10} lg={11} style={{borderLeft:"1px solid white",padding:"12px" }}  className='text-center '>
       <span style={{fontSize:"16px", }}>     
      <button> 
      29 products

      </button>
       </span>
       </Col>

       <Col  md={2} lg={1}  style={{borderLeft:"1px solid gray",padding:"12px",  }}>
       <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic ">
       <button>sort by</button>
        
      </Dropdown.Toggle>

    </Dropdown>


       </Col>
    </Row>
  <hr className='d-none d-lg-flex 'style={{ position: "sticky",   }}/>
    
  </Container>
  <hr className='d-none d-lg-flex 'style={{ position: "sticky",   }}/>
{/* --------------------------------------------------------------- */}
  <hr className='d-block d-lg-none mt-4' />
  <Container  style={{ position: "sticky", top: "60px",  }} className='bg-white shadow-sm'>
    <Row className='d-flex d-lg-none '>
    {/* <Col  md={6} lg={2} style={{ }}  >
    </Col> */}

      <Col  sm={6}xs={6} className='mx-auto ' style={{border:"1px solid white", padding:"15px", textAlign:"center"}} >
       <span >
       <button  onClick={handleShow}>
       FILTER
     </button>
     <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion defaultActiveKey="0" flush  style={{ position: "sticky", top: "0px",  }}>
      <Accordion.Item eventKey="">
        <Accordion.Header >Availability</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='mt-3'>Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='mt-3'>Product type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='mt-3'>Type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='mt-3'>Fabric</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='mt-3'>Size</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="6">
        <Accordion.Header className='mt-3'>Pieces
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
      
        </Offcanvas.Body>
      </Offcanvas>

       </span>
       </Col>

       <Col  sm={6}xs={6} className='mx-auto 'style={{borderLeft:"1px solid gray", padding:"15px" , textAlign:"center"}} >
       <button onClick={handleShow1}>sort by</button>
       

<Offcanvas
  show={show12}
  onHide={handleClose1}
  {...props}
  placement='bottom'
  backdrop
  className='h-[2000px] w-full'  // Add Tailwind classes
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title className='text-center'>Sort By</Offcanvas.Title>
  </Offcanvas.Header>
  <hr />
  <Offcanvas.Body className='flex flex-col items-center justify-center'>
    <div className='text-center space-y-2 '> {/* Space between buttons */}
      <Link to="/Servise"><button  className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Featured</button></Link>
      <Link to="/Special"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Best Selling</button></Link>
      <Link to="/About"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Alphabetically, A-Z</button></Link>
      <Link to="/Chanttele"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Alphabetically, Z-A</button></Link>
      <Link to="/Special"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Price, Low to High</button></Link>
      <Link to="/About"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Price, High to Low</button></Link>
      <Link to="/Dupattas"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Date, Old to New</button></Link>
      <Link to="/Special"><button className='text-gray-500 hover:text-black  py-2 px-4 rounded'>Date, New to Old</button></Link>
    </div>
  </Offcanvas.Body>
</Offcanvas>

       
       </Col>
    </Row>
    
  </Container>
  <hr className='d-block d-lg-none'/>
{/* --------------------------------------------------------- */}
  <Container>
    <Row className=' '>
    {/* <Col  md={6} lg={2} style={{ }}  >
    </Col> */}

<Col md={3} lg={3} className='d-none d-lg-block mt-4 ' >

      <Accordion defaultActiveKey="0" flush  style={{ position: "sticky", top: "130px",  }}>
      <Accordion.Item eventKey="">
        <Accordion.Header >Availability</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='mt-3'>Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='mt-3'>Product type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='mt-3'>Type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='mt-3'>Fabric</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='mt-3'>Size</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="6">
        <Accordion.Header className='mt-3'>Pieces
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
       </Col>

       <Col sm={12} xs={12} md={9} lg={9} className='s' >
       <Row className='mt-3'>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'style={{}} >

<img 
src={show0} 
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=800")} 
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/products/5_8_ae9fac23-746f-4bfd-a71f-5ab8da59fa2b.jpg?v=1638602800&width=800")}
 alt='kbjsdcj' />
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
       src={show1} 
onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/products/12_3.jpg?v=1638602834&width=500")} 
onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=800")}
        alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img 
       src={show2} 
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/products/16_2_f038779b-2bf7-4fcc-a966-c0a4e3ae6dac.jpg?v=1638602795&width=800")} 
onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/products/20_2.jpg?v=1638602795&width=800")}
        alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show3} 
onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/products/32_5.jpg?v=1636697450&width=800")} 
onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/products/34_4.jpg?v=1636697449&width=800")}
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show4} 
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/products/37_4.jpg?v=1638602612&width=500")} 
onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/products/44_2.jpg?v=1638602612&width=800")}
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show5} 
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/products/1_45405c3e-b1f1-469f-87d4-d7770fdbef5c.jpg?v=1629109542&width=500")} 
onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/products/2_3f3d1ab1-7784-43de-b376-0e307201565b.jpg?v=1629109542&width=800")}
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show6} 
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/products/144_8da507ac-0ab6-4b24-8950-7747020088df.jpg?v=1679118488&width=500")} 
onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/products/141_1.jpg?v=1679118489&width=800")}
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
        src={show7} 
        onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/products/3copysad.jpg?v=1635330315&width=500")} 
        onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/products/3copy_0b1708ca-effa-4ce4-8071-67ae30f4e38c.jpg?v=1635330343&width=800")}
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
       src={show8} 
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/products/214.jpg?v=1644669671&width=500")} 
onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/products/215.jpg?v=1644669671&width=800")}
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
        src={show9} 
        onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/products/15_16.jpg?v=1635319415&width=500")} 
        onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/products/12_24.jpg?v=1635319416&width=800")}
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
  
       
       
          </Row>

       </Col>
    </Row>
    
  </Container>
  <hr className='mt-5'/>
  </>

    </div>
  )
}

export default Seventhpage

