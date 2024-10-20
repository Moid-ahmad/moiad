import React, { useState } from 'react'
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Unstitched(props) {
  const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/files/40_7e419b63-a1a7-47e6-b6a2-97753f137fa1.jpg?v=1728642191&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/files/123_6767a827-42a2-44e1-a179-4622599d35d6.jpg?v=1727506686&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/files/163_dfae41ef-48f1-4c8c-bbda-29c6f10141f9.jpg?v=1727506973&width=800")
  const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/files/127_88cacba6-d4d7-4fe1-81df-b2902d6338a4.jpg?v=1726304454&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/files/119_d8be38fa-08cf-4e37-b84b-0de3b7f79d3f.jpg?v=1726304166&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/files/120_396d32ae-b922-4499-985f-0da4f9e7ab4f.jpg?v=1726304396&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/files/156_f170590c-d304-45f0-a95f-4b625e1f6b3f.jpg?v=1727507021&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/files/69_e93e996f-18d4-4782-832a-b30e18188d54.jpg?v=1726304113&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/files/146_0377ef78-adc5-44f9-bfdc-150a47da6ae7.jpg?v=1727507079&width=800")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/files/123_3.jpg?v=1695908507&width=800")
  const [show10,setShow10]=useState("https://baroque.pk/cdn/shop/files/01_c895a1b8-6748-42de-831c-e293b172dabf.jpg?v=1726304052&width=800")
  const [show11,setShow11]=useState("https://baroque.pk/cdn/shop/files/171_00409b5b-a034-48bf-a43d-38bc4eeb2122.jpg?v=1727506931&width=800")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);








  return (
    
       <>
  <div className='text-center ' style={{fontSize:"35px", marginTop:"170px"}}>
  UNSTITCHED
  </div>
<hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px",  }}/>
  <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
    <Row className='d-none d-lg-flex'>
    

      <Col  md={10} lg={11} style={{borderLeft:"1px solid white",padding:"12px" }}  className='text-center '>
       <span style={{fontSize:"16px", }}>     
      <button> 
      236 products
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

       <Col  sm={6}xs={6} className='mx-auto  'style={{borderLeft:"1px solid gray", padding:"15px" , textAlign:"center"}} >
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

<Link to="/Unstitched2"><img 
src={show0} 
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/files/43_cda2a25a-c1e9-4692-a069-c65ed9c2bb48.jpg?v=1728642191&width=800")}
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/files/40_7e419b63-a1a7-47e6-b6a2-97753f137fa1.jpg?v=1728642191&width=800")}

alt='kbjsdcj' /></Link>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
       src={show1} 
       onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/files/127_96520a10-15ec-43c3-961f-39375a85acbc.jpg?v=1727506686&width=800")}
       onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/files/123_6767a827-42a2-44e1-a179-4622599d35d6.jpg?v=1727506686&width=800")}
       
        alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img 
src={show2} 
onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/files/168_df31b961-9de6-4248-a662-2f1aea943e6d.jpg?v=1727506973&width=800")}
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/files/163_dfae41ef-48f1-4c8c-bbda-29c6f10141f9.jpg?v=1727506973&width=800")}
     
        alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show3} 
onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/files/128_8ebe26df-73a5-43d5-a3a4-9ce56fa9baf6.jpg?v=1726304454&width=800")}
onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/files/127_88cacba6-d4d7-4fe1-81df-b2902d6338a4.jpg?v=1726304454&width=800")}
    
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show4} 
onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/files/120_55d316af-3160-4d2e-93e2-7cf78dcc27fe.jpg?v=1726304166&width=800")}
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/files/119_d8be38fa-08cf-4e37-b84b-0de3b7f79d3f.jpg?v=1726304166&width=800")}
      
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show5} 
onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/files/119_fc1ca3a7-be49-4327-bb80-9d3e77dfd9e8.jpg?v=1726304396&width=500")}
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/files/120_396d32ae-b922-4499-985f-0da4f9e7ab4f.jpg?v=1726304396&width=800")}
      
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show6} 
  onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/files/157_c47b43c0-d3d0-4ad7-a81f-8d17c7658e49.jpg?v=1727507021&width=800")}
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/files/156_f170590c-d304-45f0-a95f-4b625e1f6b3f.jpg?v=1727507021&width=800")}
     
       alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show7} 
  onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/files/71_2a3981bd-f61d-444a-801b-f82bf5a6f6c5.jpg?v=1726304113&width=500")}
onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/files/69_e93e996f-18d4-4782-832a-b30e18188d54.jpg?v=1726304113&width=800")}
     
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img
src={show8} 
  onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/files/149_ba52ac15-4df4-478c-bad3-42989b030089.jpg?v=1727507079&width=800")}
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/files/146_0377ef78-adc5-44f9-bfdc-150a47da6ae7.jpg?v=1727507079&width=800")}
     
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show9} 
  onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/files/124_4_2c0631a2-afce-4125-80a1-24799b32b46a.jpg?v=1695908507&width=800")}
onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/files/123_3.jpg?v=1695908507&width=800")}
     
        alt='ncnjc /'></img>

       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show10} 
onMouseEnter={()=>setShow10("https://baroque.pk/cdn/shop/files/02_df0085ec-b8c5-4b65-a2bc-60281aa985a8.jpg?v=1726304052&width=800")}
onMouseLeave={()=>setShow10("https://baroque.pk/cdn/shop/files/01_c895a1b8-6748-42de-831c-e293b172dabf.jpg?v=1726304052&width=800")}
   
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img
src={show11} 
onMouseEnter={()=>setShow11("https://baroque.pk/cdn/shop/files/174_329fac53-87f6-4186-9371-e71b25795cc5.jpg?v=1727506931&width=800")}
onMouseLeave={()=>setShow11("https://baroque.pk/cdn/shop/files/171_00409b5b-a034-48bf-a43d-38bc4eeb2122.jpg?v=1727506931&width=800")}
        
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
  );
}

export default Unstitched
