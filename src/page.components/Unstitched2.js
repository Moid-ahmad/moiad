import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import { IoPricetagOutline } from "react-icons/io5";
import { BsFillBoxFill } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { ImSpinner11 } from "react-icons/im";
import { IoLeafOutline } from "react-icons/io5";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer2 from '../Footer2';
import Navi from '../Navi';
function Unstitched2() {
    const [count, setCount] = useState(1);

  const add = () => {
    setCount(add => add + 1);
  };
  const mins = () => {
    setCount(prevCount => prevCount - 1);
  };
  const [show, setShow] = useState("https://baroque.pk/cdn/shop/files/28_c15fafdc-13de-49fd-bebf-4a5b465cece2.jpg?v=1727772765&width=800")
  const [show1, setShow1] = useState("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")
  const [show2, setShow2] = useState("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")
  const [show3, setShow3] = useState("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")


  const [show12, setShow12] = useState(false);

  const handleClose1 = () => setShow12(false);
  const handleShow1 = () => setShow12(true);

  
  const [show13, setShow13] = useState(false);

  const handleClose2 = () => setShow13(false);
  const handleShow2 = () => setShow13(true);
  return (
<>
    <Navi />
      <Container style={{ border: "px solid black" }}>
        <Row  >
          <Col md={1} lg={1} style={{ marginTop: "90px", marginLeft: "0px", }} className='d-none d-lg-block' >
            <img src='https://baroque.pk/cdn/shop/files/40_7e419b63-a1a7-47e6-b6a2-97753f137fa1.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/43_cda2a25a-c1e9-4692-a069-c65ed9c2bb48.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/41_f2473bff-c835-4e3d-aaa7-cf5f28328166.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <div style={{ position: "sticky", top: "60px" }}>
              <img src='https://baroque.pk/cdn/shop/files/42_465b3fb9-33d3-4632-831f-a9d266cda37c.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
              <img src='https://baroque.pk/cdn/shop/files/39_4e13bfb0-f125-4870-9046-8d8d86416ed9.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
              <img src='https://baroque.pk/cdn/shop/files/44_db24c414-5134-434d-bc4b-17ba36e88c77.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
              <img src='https://baroque.pk/cdn/shop/files/45_8659bbac-6681-4741-b005-9ec7a97c63c3.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
              <img src='https://baroque.pk/cdn/shop/files/46_c0585dec-7fec-46e0-a979-f9ae9765dbc9.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            </div>
          </Col>
          <Col md={5} lg={6} style={{ marginTop: "90px", marginLeft: "30px" }} className='d-none d-lg-block' >
            <img src='https://baroque.pk/cdn/shop/files/40_7e419b63-a1a7-47e6-b6a2-97753f137fa1.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/43_cda2a25a-c1e9-4692-a069-c65ed9c2bb48.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/41_f2473bff-c835-4e3d-aaa7-cf5f28328166.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/42_465b3fb9-33d3-4632-831f-a9d266cda37c.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/39_4e13bfb0-f125-4870-9046-8d8d86416ed9.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/44_db24c414-5134-434d-bc4b-17ba36e88c77.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/45_8659bbac-6681-4741-b005-9ec7a97c63c3.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />
            <img src='https://baroque.pk/cdn/shop/files/46_c0585dec-7fec-46e0-a979-f9ae9765dbc9.jpg?v=1728642191&width=800' className='mt-3' alt='ncnjc /' />

          </Col>
          <Col sm={12} style={{ marginTop: "90px", }} className='d-lg-none d-block' >
            <Carousel>
              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/40_7e419b63-a1a7-47e6-b6a2-97753f137fa1.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src='https://baroque.pk/cdn/shop/files/43_cda2a25a-c1e9-4692-a069-c65ed9c2bb48.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="Second slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src='https://baroque.pk/cdn/shop/files/41_f2473bff-c835-4e3d-aaa7-cf5f28328166.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/42_465b3fb9-33d3-4632-831f-a9d266cda37c.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/39_4e13bfb0-f125-4870-9046-8d8d86416ed9.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/44_db24c414-5134-434d-bc4b-17ba36e88c77.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/45_8659bbac-6681-4741-b005-9ec7a97c63c3.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='https://baroque.pk/cdn/shop/files/46_c0585dec-7fec-46e0-a979-f9ae9765dbc9.jpg?v=1728642191&width=800' className='mt-2' alt='ncnjc /' />

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>







          </Col>


          <Col md={4} lg={4} style={{ marginTop: "100px", marginLeft: "40px", }} className='d-none d-lg-block' >

            <p style={{ color: "gray", letterSpacing: "4px", marginTop: "5px" }}>EMBROIDERED VELVET UF-751</p>
            <p className='mt-2'>PKR 24,990.00</p>
            <p style={{ color: "gray", letterSpacing: "2px", marginTop: "5px" }}>SKU: BQU-UF-D751-00</p>
            <p style={{ color: "gray", letterSpacing: "4px", marginTop: "5px" }}>COLOR: Blue | 3 PIECE</p>
            <hr className='mt-4' />

            <div style={{ position: "sticky", top: "80px" }}>

              <div style={{ border: "1px solid gray", width: "120px", height: '50px', marginTop: "40px", padding: "10px", gap: "5px", display: "flex", justifyContent: "space-around", fontSize: "20px", }}>
                <button onClick={mins}  ><h1>-</h1></button>
                <span >{count}</span>
                <button onClick={add}>+</button>
              </div>


              <div className="mt-4">

                <button onClick={handleShow2} className="  mt-4  py-2" style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid black",
                  transition: "background-color 0.40s ease",
                  letterSpacing: "2px"
                }}
                  onMouseEnter={(a) => {
                    a.currentTarget.style.backgroundColor = "transparent";
                    a.currentTarget.style.color = "black"
                  }}
                  onMouseLeave={(a) => {
                    a.currentTarget.style.backgroundColor = "black";
                    a.currentTarget.style.color = "white"
                  }}
                >   Add TO CART</button>
              <Offcanvas
                show={show13}
                onHide={handleClose2}

                placement='end'
                backdrop
                className='h-[2000px] w-full'  // Add Tailwind classes
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title > CART</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body className='flex flex-col items-center '>
                  <div  style={{marginTop:"440px", width:"100%"}}> {/* Space between buttons */}
                 <Link to="/Form1"> <button onClick={handleShow2} className="  mt-4  py-2" style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid black",
                  transition: "background-color 0.40s ease",
                  letterSpacing: "2px"
                }}
                  onMouseEnter={(a) => {
                    a.currentTarget.style.backgroundColor = "transparent";
                    a.currentTarget.style.color = "black"
                  }}
                  onMouseLeave={(a) => {
                    a.currentTarget.style.backgroundColor = "black";
                    a.currentTarget.style.color = "white"
                  }}
                >   Check out</button></Link>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>



              </div>






              {/* ----------------------------------------------------------------------- */}
              <hr className='mt-4' />
              <Accordion defaultActiveKey="0" flush style={{}}>
                <Accordion.Item eventKey="">
                  <Accordion.Header className='mt-3' >
                    <div style={{ display: "flex", gap: "20px" }}>
                      < IoPricetagOutline />
                      DESCRIPTION
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    This luxurious hand-embroidered shawl is crafted from premium velvet, offering a rich texture and smooth drape. Adorned with gold floral motifs, the shawl features intricate artistry on deep maroon fabric. The densely packed borders and patterns all over the shawl showcase multi-layered golden zari, dabka and sequin work, adding texture and depth to the design.

                    Note: *Outfit and Shawl are sold separately & actual color may slightly vary from the image shown*

                    Fashion Tip:

                    Pair this elegant shawl with traditional attire for formal occasions. Complement the gold accents with matching jewellery and keep your hair in a sleek bun to highlight the detailed embroidery.

                    Product Details

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < BsFillBoxFill />
                      PRODUCT DETAILS
                    </div>



                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < GiCommercialAirplane />
                      DELIVERY
                    </div>


                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < ImSpinner11 />
                      RETRURNS AND EXCHANGE
                    </div>

                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < IoLeafOutline />
                      CARE ISNTRUCTION
                    </div>

                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>
            </div>



          </Col>



          <Col md={4} lg={4} style={{ marginTop: "40px", marginLeft: "0px", }} className='d-block d-lg-none' >

            <p style={{ color: "gray", letterSpacing: "4px", marginTop: "5px" }}>  EMBROIDERED VELVET UF-751            </p>
            <p className='mt-2'>  PKR 24,990.00            </p>
            <p style={{ color: "gray", letterSpacing: "2px", marginTop: "5px" }}>SKU: BQU-UF-D751-00            </p>
            <p style={{ color: "gray", letterSpacing: "4px", marginTop: "5px" }}>COLOR: Blue | 3 PIECE</p>
            <hr className='mt-4' />


            <div style={{ border: "1px solid gray", width: "120px", height: '50px', marginTop: "40px", padding: "10px", gap: "5px", display: "flex", justifyContent: "space-around", fontSize: "20px", }}>
              <button onClick={mins}  ><h1>-</h1></button>
              <span >{count}</span>
              <button onClick={add}>+</button>
            </div>


            <div className="mt-4" style={{}}>

              <button onClick={handleShow1} className="  mt-4  py-2" style={{
                width: "100%",
                backgroundColor: "black",
                color: "white",
                border: "1px solid black",
                transition: "background-color 0.40s ease",
                letterSpacing: "2px"
              }}
                onMouseEnter={(a) => {
                  a.currentTarget.style.backgroundColor = "transparent";
                  a.currentTarget.style.color = "black"
                }}
                onMouseLeave={(a) => {
                  a.currentTarget.style.backgroundColor = "black";
                  a.currentTarget.style.color = "white"
                }}
              >   Add TO CART</button>
              <Offcanvas
                show={show12}
                onHide={handleClose1}

                placement='end'
                backdrop
                className='h-[2000px] w-full'  // Add Tailwind classes
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title > CART</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body className='flex flex-col items-center '>
                  
                <div  style={{marginTop:"440px", width:"100%"}}> {/* Space between buttons */}
                 <Link to="/Form1"> <button onClick={handleShow2} className="  mt-4  py-2" style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid black",
                  transition: "background-color 0.40s ease",
                  letterSpacing: "2px"
                }}
                  onMouseEnter={(a) => {
                    a.currentTarget.style.backgroundColor = "transparent";
                    a.currentTarget.style.color = "black"
                  }}
                  onMouseLeave={(a) => {
                    a.currentTarget.style.backgroundColor = "black";
                    a.currentTarget.style.color = "white"
                  }}
                >   Check out</button></Link>
                  </div>

                </Offcanvas.Body>
              </Offcanvas>





              {/* ------------------------------------------------------------------------- */}
              <hr className='mt-4' />
              <Accordion defaultActiveKey="0" flush style={{}}>
                <Accordion.Item eventKey="">
                  <Accordion.Header className='mt-3' >
                    <div style={{ display: "flex", gap: "20px" }}>
                      < IoPricetagOutline />
                      DESCRIPTION
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    This luxurious hand-embroidered shawl is crafted from premium velvet, offering a rich texture and smooth drape. Adorned with gold floral motifs, the shawl features intricate artistry on deep maroon fabric. The densely packed borders and patterns all over the shawl showcase multi-layered golden zari, dabka and sequin work, adding texture and depth to the design.

                    Note: *Outfit and Shawl are sold separately & actual color may slightly vary from the image shown*

                    Fashion Tip:

                    Pair this elegant shawl with traditional attire for formal occasions. Complement the gold accents with matching jewellery and keep your hair in a sleek bun to highlight the detailed embroidery.

                    Product Details

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < BsFillBoxFill />
                      PRODUCT DETAILS
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < GiCommercialAirplane />
                      DELIVERY
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < ImSpinner11 />
                      RETRURNS AND EXCHANGE
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className='mt-3'>
                    <div style={{ display: "flex", gap: "20px" }}>
                      < IoLeafOutline />
                      CARE ISNTRUCTION
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </div>




          </Col>
        </Row>
      </Container>



      {/* ----------------------------------------------------------------------------------------------------------------- */}


      <hr className='mt-5 mb-5' />
      <div style={{ textAlign: "center", letterSpacing: "3px", fontSize: "37px", marginTop: "20px" }} className='d-none d-lg-block'><h1>RELATED PRODUCT</h1></div>
      <div style={{ textAlign: "center", letterSpacing: "3px", fontSize: "25px", marginTop: "10px" }} className='d-block d-lg-none'>
        <h1>RELATED PRODUCT</h1></div>

      <Container style={{ border: "px solid black", marginTop: "40px" }}>
        <Row  >

          <Col sm={12} md={3} lg={3} className='mt-3 text-center'>
            <img src={show}
              onMouseEnter={() => setShow("https://baroque.pk/cdn/shop/files/29_816aa1b5-d546-468e-b654-34e137ad189c.jpg?v=1727772765&width=800")}
              onMouseLeave={() => setShow("https://baroque.pk/cdn/shop/files/28_c15fafdc-13de-49fd-bebf-4a5b465cece2.jpg?v=1727772765&width=800")}
              alt='hahvs' />
            <p className='mt-4' style={{ letterSpacing: "3px" }}>SOLID VELVET SUIT PR-1009</p>
            <p className='mt-1' style={{ letterSpacing: "2px", fontWeight: "bold" }} >PKR 14,990.00</p>
            <p className='mt-1' style={{ letterSpacing: "2px" }}>PRET WINTER</p>


          </Col>
          <Col sm={12} md={3} lg={3} className='mt-3 text-center'>

            <img src={show1}
              onMouseEnter={() => setShow1("https://baroque.pk/cdn/shop/files/42_cc75483a-0a30-4024-818d-353dee390cb7.jpg?v=1727772505&width=800")}
              onMouseLeave={() => setShow1("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")}
              alt='' />
            <p className='mt-4 ' style={{ letterSpacing: "2px" }}>EMBROIDERED VELVET SHAWL VS-54 </p>
            <p className='mt-1' style={{ letterSpacing: "2px", fontWeight: "bold" }}>PKR 19,990.00</p>
            <p className='mt-1' style={{ letterSpacing: "2px" }}>SHAWLS</p>
          </Col>
          <Col sm={12} md={3} lg={3} className='mt-3 text-center'>

            <img src={show2}
              onMouseEnter={() => setShow2("https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=800")}
              onMouseLeave={() => setShow2("https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=800")}
              alt='' />
            <p className='mt-4 ' style={{ letterSpacing: "2px" }}>EMBROIDERED VELVET SHAWL VS-54 </p>
            <p className='mt-1' style={{ letterSpacing: "2px", fontWeight: "bold" }}>PKR 19,990.00</p>
            <p className='mt-1' style={{ letterSpacing: "2px" }}>SHAWLS</p>
          </Col>
          <Col sm={12} md={3} lg={3} className='mt-3 text-center'>

            <img src={show3}
              onMouseEnter={() => setShow3("https://baroque.pk/cdn/shop/files/96_ab1a28e9-4dc3-46af-88c2-e2c4e7c9bf5b.jpg?v=1727772400&width=500")}
              onMouseLeave={() => setShow3("https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=800")}
              alt='' />
            <p className='mt-4  ' style={{ letterSpacing: "2px" }}>EMBROIDERED VELVET SHAWL VS-54 </p>
            <p className='mt-1' style={{ letterSpacing: "2px", fontWeight: "bold" }}>PKR 19,990.00</p>
            <p className='mt-1' style={{ letterSpacing: "2px" }}>SHAWLS</p>
          </Col>

        </Row>
      </Container>
      <hr className='mt-5 mb-5' />
<Footer2 />
    </>
  )
}

export default Unstitched2
