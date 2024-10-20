import React,{useState} from 'react'
import { Container, Row ,Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Sixpage(props) {
    const [show0,setShow0]=useState("https://baroque.pk/cdn/shop/products/930A2022_-_Skin.jpg?v=1570117940&width=800")
  const [show1,setShow1]=useState("https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=800")
  const [show2,setShow2]=useState("https://baroque.pk/cdn/shop/products/930A2022.jpg?v=1570090943&width=800")
  const [show3,setShow3]=useState("https://baroque.pk/cdn/shop/products/07_76dc5eef-ef76-4430-a5ae-2a53f394e555.jpg?v=1641196171&width=800")
  const [show4,setShow4]=useState("https://baroque.pk/cdn/shop/products/11_35a3035d-eef5-444f-8725-791eee3897ed.jpg?v=1641196354&width=800")
  const [show5,setShow5]=useState("https://baroque.pk/cdn/shop/products/319A0076.jpg?v=1570117833&width=800")
  const [show6,setShow6]=useState("https://baroque.pk/cdn/shop/products/01_15ce5dbf-1ad3-4417-b8d8-0ddb9d83f822.jpg?v=1641195866&width=800")
  const [show7,setShow7]=useState("https://baroque.pk/cdn/shop/products/04_9c35cc6a-27bb-4166-b057-1f21f4d0ec08.jpg?v=1644665663&width=800")
  const [show8,setShow8]=useState("https://baroque.pk/cdn/shop/products/t3.jpg?v=1650793220&width=500")
  const [show9,setShow9]=useState("https://baroque.pk/cdn/shop/products/t2.jpg?v=1644667670&width=800")

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);
  return (
    <div>
       <>
  <div className='text-center ' style={{fontSize:"35px", marginTop:"170px",letterSpacing:"4px" }}>
  BOTTOMS
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
onMouseEnter={()=>setShow0("https://baroque.pk/cdn/shop/products/930A2023_-_Skin.jpg?v=1570117940&width=500")}
onMouseLeave={()=>setShow0("https://baroque.pk/cdn/shop/products/930A2022_-_Skin.jpg?v=1570117940&width=800")} alt='kbjsdcj' />
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",fontFamil:""}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
       src={show1} 
onMouseEnter={()=>setShow1("https://baroque.pk/cdn/shop/products/930A2095.jpg?v=1580707818&width=500")}
onMouseLeave={()=>setShow1("https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=800")}
     alt='ncnjc ' />
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3'>
       <img 
       src={show2} 
onMouseEnter={()=>setShow2("https://baroque.pk/cdn/shop/products/930A2026.jpg?v=1570090943&width=500")}
onMouseLeave={()=>setShow2("https://baroque.pk/cdn/shop/products/930A2022.jpg?v=1570090943&width=800")}
     alt='ncnjc /'></img>
<div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show3} 
onMouseEnter={()=>setShow3("https://baroque.pk/cdn/shop/products/08_30e5e675-3a1a-4154-b196-035ae09e907d.jpg?v=1641196171&width=500")}
onMouseLeave={()=>setShow3("https://baroque.pk/cdn/shop/products/07_76dc5eef-ef76-4430-a5ae-2a53f394e555.jpg?v=1641196171&width=800")}
     alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show4} 
onMouseEnter={()=>setShow4("https://baroque.pk/cdn/shop/products/12_61a4b73c-79f3-4201-8aa3-ea3b1bd86249.jpg?v=1641196570&width=500")}
onMouseLeave={()=>setShow4("https://baroque.pk/cdn/shop/products/11_35a3035d-eef5-444f-8725-791eee3897ed.jpg?v=1641196354&width=800")}
     alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show5} 
onMouseEnter={()=>setShow5("https://baroque.pk/cdn/shop/products/319A0072.jpg?v=1570117833&width=500")}
onMouseLeave={()=>setShow5("https://baroque.pk/cdn/shop/products/319A0076.jpg?v=1570117833&width=800")}
     alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show6} 
onMouseEnter={()=>setShow6("https://baroque.pk/cdn/shop/products/03_64ca96d0-a79e-4023-937e-f0d7ae0dbaa9.jpg?v=1641195866&width=500")}
onMouseLeave={()=>setShow6("https://baroque.pk/cdn/shop/products/01_15ce5dbf-1ad3-4417-b8d8-0ddb9d83f822.jpg?v=1641195866&width=800")}
     alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show7} 
onMouseEnter={()=>setShow7("https://baroque.pk/cdn/shop/products/05_efa610dc-b43e-489e-9de6-4e6733261fc9.jpg?v=1644665663&width=800")}
onMouseLeave={()=>setShow7("https://baroque.pk/cdn/shop/products/04_9c35cc6a-27bb-4166-b057-1f21f4d0ec08.jpg?v=1644665663&width=800")}
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6} className='mt-3' >
       <img 
       src={show8} 
onMouseEnter={()=>setShow8("https://baroque.pk/cdn/shop/products/t4.jpg?v=1650793220&width=800")}
onMouseLeave={()=>setShow8("https://baroque.pk/cdn/shop/products/t3.jpg?v=1650793220&width=500")}
        alt='ncnjc /'></img>
       <div className='text-center mt-5 mb-3'><span style={{fontSize:"18px",}}>{props.title}</span><br />
       <span style={{fontSize:"13px",fontWeight:"bold"}}>{props.price}</span><br />
       <span style={{fontSize:"14px",}}>{props.value}</span>
       </div>
       
       </Col>
       <Col sm={12} xs={12} md={6} lg={6}className='mt-3' >
       <img 
       src={show9} 
onMouseEnter={()=>setShow9("https://baroque.pk/cdn/shop/products/t1.jpg?v=1644667670&width=800")}
onMouseLeave={()=>setShow9("https://baroque.pk/cdn/shop/products/t2.jpg?v=1644667670&width=800")}
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

export default Sixpage
