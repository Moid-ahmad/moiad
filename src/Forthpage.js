import React,{useState} from 'react'
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Forthpage(props) {
  const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/files/54_5c9634e6-dedb-4fe3-85c8-c5c211932869.jpg?v=1724068815&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/files/67_7c2084cb-a1f1-4533-8211-f4d68e66b60b.jpg?v=1728045363&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201&width=800")
  const [show3,setShow3]=useState(" https://baroque.pk/cdn/shop/files/20_1fe9d83d-ae53-4b77-b78c-ed9c4c056b0a.jpg?v=1728046833&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/files/16_95fe2e3a-7dfe-4e62-a2dd-6f73523b89d0.jpg?v=1727522115&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/files/10_992b56f9-9bac-4a60-b330-fda5c39a57fb.jpg?v=1727522039&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/files/52_c346764a-d4ce-47b1-b39f-913bd6f79dc4.jpg?v=1726904703&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/files/110_0b489d7d-86ce-49ad-a5ed-6f52bc831de6.jpg?v=1726303714&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=800")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=800")

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);

  return (
    <div>
      <>
  <div className='text-center ' style={{fontSize:"35px", marginTop:"170px" }}>
  READY TO WEAR
  </div>
<hr  className='mt-5 d-none d-lg-block 'style={{ position: "sticky", top: "60px",  }}/>
  <Container className=' bg-white '  style={{ position: "sticky", top: "60px",  }}>
    <Row className='d-none d-lg-flex'>
    

      <Col  md={10} lg={11} style={{borderLeft:"1px solid white",padding:"12px", }}  className='text-center '>
       <span style={{fontSize:"14px",fontWeight:"bold", }}>     
      <button> 
      120 products
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
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500")}
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/files/54_5c9634e6-dedb-4fe3-85c8-c5c211932869.jpg?v=1724068815&width=800")}

 alt='kbjsdcj' />
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img src={show1} 
onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/files/65_981b11f5-4175-4dec-abc5-d47455ebb6f7.jpg?v=1728045364&width=500")}
onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/files/67_7c2084cb-a1f1-4533-8211-f4d68e66b60b.jpg?v=1728045363&width=800")}
 alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img src={show2} 
onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/files/09_86fb2b57-7b75-4669-bf18-cf1463bb565e.jpg?v=1724659201&width=500")}
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201&width=800")}
 alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show3} 
onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/files/23_17aa3a5d-b88f-4965-8151-ff5505f93302.jpg?v=1728046879&width=500")}
onMouseLeave={()=>setShow3(" https://baroque.pk/cdn/shop/files/20_1fe9d83d-ae53-4b77-b78c-ed9c4c056b0a.jpg?v=1728046833&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show4} 
onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/files/18_6378c8d4-df33-4afb-9993-f11d7c8f987a.jpg?v=1727522115&width=500")}
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/files/16_95fe2e3a-7dfe-4e62-a2dd-6f73523b89d0.jpg?v=1727522115&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show5} 
onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/files/13_933eb47d-53a4-4d6f-8718-3af70211b7ea.jpg?v=1727522039&width=500")}
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/files/10_992b56f9-9bac-4a60-b330-fda5c39a57fb.jpg?v=1727522039&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show6} 
onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/files/55_10736858-aa30-4f70-b1e1-c499b9379b08.jpg?v=1726904703&width=800")}
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/files/52_c346764a-d4ce-47b1-b39f-913bd6f79dc4.jpg?v=1726904703&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show7} 
onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/files/114_8bbd45dd-d481-4ce3-bdb9-56863e8891ab.jpg?v=1726303714&width=800")}
onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/files/110_0b489d7d-86ce-49ad-a5ed-6f52bc831de6.jpg?v=1726303714&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img src={show8} 
onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/files/64_26758a98-d266-4122-8692-c230135ba238.jpg?v=1726904748&width=800")}
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=800")}
 alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img src={show9} 
onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/files/42_92097e6a-6907-49ca-b04d-743405794d8d.jpg?v=1726904816&width=800")}
onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=800")}
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

export default Forthpage
