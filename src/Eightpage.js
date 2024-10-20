import React from 'react'
import  { useState } from 'react';
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Eightpage(props) {
    const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/files/67_ce2a812b-72b9-4a5b-a254-240c64da646c.jpg?v=1721027015&width=800")
    const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/files/193_bbc69318-975c-47c2-ac5f-42bf453f1309.jpg?v=1722064043&width=800")
    const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/files/104_c57d9f09-e660-4b97-88c5-59cbf36e5fea.jpg?v=1721027294&width=800")
    const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/files/84_15e628e4-cb2b-401c-999e-0e5757292cfc.jpg?v=1721033722&width=800")
    const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/products/01_49accb84-fade-4d74-8ea4-b3639bee3f06.jpg?v=1675843859&width=800")
    const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/files/06_024ef97f-5a65-4b8c-99d2-44492f85df39.jpg?v=1715238709&width=800")
    const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/files/65_6610eefb-09d3-4ee3-ae2b-775d7e4a4e3d.jpg?v=1709798145&width=800")
    const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/products/46_14.jpg?v=1657961348&width=800")
    const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/files/60_25e9c7c9-5455-4259-b1b5-aa5bd65c6db8.jpg?v=1702557646&width=800")
    const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/files/181.jpg?v=1716553243&width=800")
  
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);
  return (
    <>
    <div className='text-center ' style={{fontSize:"35px", marginTop:"170px",letterSpacing:"4px" }}>
    SPECIAL PRICES
    </div>
  <hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px",  }}/>
    <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
      <Row className='d-none d-lg-flex'>
      
  
        <Col  md={10} lg={11} style={{borderLeft:"1px solid white",padding:"12px", }}  className='text-center '>
         <span style={{fontSize:"14px",fontWeight:"bold", }}>     
        <button> 
        132 products

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
          <Accordion.Header className='mt-3'>Fabric</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className='mt-3'>Size</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
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
  onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/files/68_90eacf44-b6a9-4215-8d2a-ba4a918f317e.jpg?v=1721027015&width=800")}
  onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/files/67_ce2a812b-72b9-4a5b-a254-240c64da646c.jpg?v=1721027015&width=800")} alt='kbjsdcj' />
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
         <img 
         src={show1} 
  onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/files/196_27e77fcd-55cc-49d3-9a46-d00d96bde2f5.jpg?v=1722064042&width=800")}
  onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/files/193_bbc69318-975c-47c2-ac5f-42bf453f1309.jpg?v=1722064043&width=800")}
       alt='ncnjc ' />
  <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
         <img 
         src={show2} 
  onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/files/105_9bbd2cf5-3fb3-4e3c-8051-93693b6bd4a5.jpg?v=1721027293&width=800")}
  onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/files/104_c57d9f09-e660-4b97-88c5-59cbf36e5fea.jpg?v=1721027294&width=800")}
       alt='ncnjc /'></img>
  <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show3} 
  onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/files/85_fc7ab5f6-0bc2-4478-b867-6868ca602cdd.jpg?v=1721033722&width=800")}
  onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/files/84_15e628e4-cb2b-401c-999e-0e5757292cfc.jpg?v=1721033722&width=800")}
       alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show4} 
  onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/products/03_88bea049-5c0b-4346-bbe2-fba4b9fafd32.jpg?v=1675864085&width=800")}
  onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/products/01_49accb84-fade-4d74-8ea4-b3639bee3f06.jpg?v=1675843859&width=800")}
       alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show5} 
  onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/files/07_aad92e11-6e62-462e-a9c2-9b66c327faaa.jpg?v=1715238706&width=800")}
  onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/files/06_024ef97f-5a65-4b8c-99d2-44492f85df39.jpg?v=1715238709&width=800")}
       alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show6} 
  onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/files/66_a059b2d2-023e-43b8-ab18-1034f068a439.jpg?v=1709798148&width=800")}
  onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/files/65_6610eefb-09d3-4ee3-ae2b-775d7e4a4e3d.jpg?v=1709798145&width=800")}
       alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show7} 
  onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/products/47_15.jpg?v=1657961348&width=800")}
  onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/products/46_14.jpg?v=1657961348&width=800")}
          alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
         <img 
         src={show8} 
  onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/files/61_9a9e2238-4574-442b-8c14-3be2e191d558.jpg?v=1702557646&width=800")}
  onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/files/60_25e9c7c9-5455-4259-b1b5-aa5bd65c6db8.jpg?v=1702557646&width=800")}
          alt='ncnjc /'></img>
         <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
         <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
         <span style={{fontSize:"14px",}}>{props.value}</span>
         </div>
         
         </Col>
         <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
         <img 
         src={show9} 
  onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/files/185.jpg?v=1716553251&width=800")}
  onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/files/181.jpg?v=1716553243&width=800")}
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

export default Eightpage
