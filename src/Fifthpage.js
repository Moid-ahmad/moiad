import React,{ useState } from 'react'
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Fifthpage(props) {
  const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=800")
  const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/files/81_bda2ea26-0a1f-47d0-83b1-4a65bda38160.jpg?v=1705564318&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/files/103_967139cc-d1e1-46d5-8e3e-a82c7aaccb7e.jpg?v=1705564352&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/files/112_e84c9259-5263-40f3-90a0-76015b7c9c4e.jpg?v=1705564383&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/files/138_db4b4406-862e-4566-9fa0-7a9c57b0a418.jpg?v=1705564507&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/products/20_5709efc4-fc89-4fe0-adb2-5b1ef2afdc35.jpg?v=1669115381&width=800")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/products/07_87cc208c-2303-4e2d-9f23-afd181850325.jpg?v=1669115366&width=800")
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);

  
  
  return (
    <div>
      <>
  <div className='text-center ' style={{fontSize:"35px", marginTop:"170px", letterSpacing:"2px", marginRight:"20px"}}>
  CHANTELLE

  </div>
<hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px",  }}/>
  <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
    <Row className='d-none d-lg-flex'>
    

      <Col  md={10} lg={11} style={{borderLeft:"1px solid white",padding:"12px" }}  className='text-center '>
       <span style={{fontSize:"14px",fontWeight:"bold" }}>     
      <button> 
      35 products
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
        <Accordion defaultActiveKey="0" flush  style={{ position: "sticky", top: "130px",  }}>
      <Accordion.Item eventKey="">
        <Accordion.Header >Availability</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='mt-2'>Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='mt-2'>Product type</Accordion.Header>
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
      <Accordion.Item eventKey="7">
        <Accordion.Header className='mt-3'>Product style</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
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
        <Accordion.Header className='mt-2'>Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='mt-2'>Product type</Accordion.Header>
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
      <Accordion.Item eventKey="7">
        <Accordion.Header className='mt-3'>Product style</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
      
       </Col>

       <Col sm={12} xs={12} md={9} lg={9} className='s' >
       <Row className='mt-3'>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'style={{}} >

<img
src={show0} 
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=800")}
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800")}

 alt='kbjsdcj' />
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
src={show1} 
onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=800")}
onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800")}
  
        alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img 
src={show2} 
     onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=800")}
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=800")}
  
     alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show3} 
       onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=800")}
onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=800")}

       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show4} 
       onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/files/71_734b1969-aebe-442c-a05e-1f7c6add575d.jpg?v=1705736543&width=800")}
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/files/81_bda2ea26-0a1f-47d0-83b1-4a65bda38160.jpg?v=1705564318&width=800")}

        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show5} 
       onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=800")}
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/files/103_967139cc-d1e1-46d5-8e3e-a82c7aaccb7e.jpg?v=1705564352&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show6} 
       onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/files/114_8d7fa408-df27-479b-b51f-8e011b19a6f2.jpg?v=1705736387&width=800")}
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/files/112_e84c9259-5263-40f3-90a0-76015b7c9c4e.jpg?v=1705564383&width=800")}

        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show7} 
       onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/files/140_b5d09bc4-aabd-40bb-906a-b954eae81e15.jpg?v=1705736503&width=800")}
onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/files/138_db4b4406-862e-4566-9fa0-7a9c57b0a418.jpg?v=1705564507&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
src={show8} 
      onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/products/17_ff301f4f-ce11-456c-aa94-014215928e3a.jpg?v=1669115381&width=800")}
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/products/20_5709efc4-fc89-4fe0-adb2-5b1ef2afdc35.jpg?v=1669115381&width=800")}
  alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show9} 
      onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/products/11_97821f59-7f15-419c-ad65-8268c912f05d.jpg?v=1669115366&width=800")}
onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/products/07_87cc208c-2303-4e2d-9f23-afd181850325.jpg?v=1669115366&width=800")}
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

export default Fifthpage
