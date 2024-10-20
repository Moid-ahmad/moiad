import React,{useState} from 'react'
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Thirdpage(props) {
  const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/files/48_2bda2b36-2470-4596-9227-9d9df338aa03.jpg?v=1727772253&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/files/53_0ee4318b-9eab-499e-8756-e43b7c246fb1.jpg?v=1727772295&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/files/60_1cd74ebe-7d01-4093-b2b3-c82dd8dcc4d0.jpg?v=1727772337&width=800")
  const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/files/30_94e24345-0b1e-405c-a0c0-b7be6f30fd17.jpg?v=1727772462&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/files/80_1ffd5690-8478-4881-93ba-52442c7ee16d.jpg?v=1727772611&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/products/65.jpg?v=1632894665&width=800")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);
  return (
    
       <>
  <div className='text-center ' style={{fontSize:"40px", marginTop:"170px", letterSpacing:"4px"}}>
  SHAWLS
  </div>
<hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px", marginTop:"50px"  }}/>
  <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
    <Row className='d-none d-lg-flex'>
    

      <Col  md={10} lg={11} style={{borderLeft:"",padding:"12px", alignItems:"center" }}  className='text-center '>
       <span style={{fontSize:"16px", }}>     
      <button> 
      12 products

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
        <Accordion.Header className='mt-3'>Fabric</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum
        </Accordion.Body>
      </Accordion.Item>     
      <Accordion.Item eventKey="4">
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
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/files/50_2a39ef59-ca40-47f1-8041-c6bde0b52427.jpg?v=1727772253&width=500")}
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/files/48_2bda2b36-2470-4596-9227-9d9df338aa03.jpg?v=1727772253&width=800")}

 alt='kbjsdcj' />
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
src={show1} 
    onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/files/54_4ff2b2e0-561d-4389-8df5-34c2693eaef5.jpg?v=1727772295&width=500")}
onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/files/53_0ee4318b-9eab-499e-8756-e43b7c246fb1.jpg?v=1727772295&width=800")}
   
     alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img 
src={show2} 
      onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/files/62_dfd100f4-8597-425a-b0d7-9deedd489d7f.jpg?v=1727772337&width=500")}
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/files/60_1cd74ebe-7d01-4093-b2b3-c82dd8dcc4d0.jpg?v=1727772337&width=800")}
 
        alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show3} 
      onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/files/70_4d2e0e1d-9b01-4e26-ae75-66e8be3740a8.jpg?v=1727772369&width=500")}
onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/files/30_94e24345-0b1e-405c-a0c0-b7be6f30fd17.jpg?v=1727772462&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show4} 
      onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/files/96_ab1a28e9-4dc3-46af-88c2-e2c4e7c9bf5b.jpg?v=1727772400&width=500")}
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show5} 
      onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/files/31_151832cd-8414-4511-8809-36948db264ac.jpg?v=1727772462&width=500")}
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show6} 
      onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/files/42_cc75483a-0a30-4024-818d-353dee390cb7.jpg?v=1727772505&width=500")}
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show7} 
      onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/files/96_ab1a28e9-4dc3-46af-88c2-e2c4e7c9bf5b.jpg?v=1727772400&width=800")}
onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/files/80_1ffd5690-8478-4881-93ba-52442c7ee16d.jpg?v=1727772611&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
src={show8} 
      onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/products/41_17.jpg?v=1693402721&width=800")}
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")}
 
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
src={show9} 
      onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=800")}
onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/products/65.jpg?v=1632894665&width=800")}
 
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


  
  )
}

export default Thirdpage
