import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LuTimer } from "react-icons/lu";
import { FaClipboardUser } from "react-icons/fa6";
import { GiSewingMachine } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
    return (
        <>
            <Container >
                <Row className='grid'>
                    <Col sm={12} md={12} lg={12}>


                        <div className='mt-5 text-center tracking-wider '>
                            <snap  >SUBSCRIBE FOR NEWSLETTER </snap>
                        </div >
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='flex justify-center items-center mt-5  text-center '>
                            <input type='text' placeholder='Email' className="mt-2 w-64 h-80  px-2 " style={{
                                width: '250px',
                                height: "50px",
                                border: "1px solid gray"
                            }}  >

                            </input>
                            <button className="   mt-2" style={{

                                border: "1px solid black",
                                width: "200px",
                                height: "50px",
                                padding: "10px 10px",
                                fontSize: "15px",
                                letterSpacing: '2px',
                                transition: "background-color 0.20s ease",
                                backgroundColor: "black",
                                marginLeft: "8px",
                                color: "white",
                                alignContent: "center",



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
                                SUBSCRIBE </button>


                        </div>

                    </Col>
                </Row >
            </Container>

            <Container>
                <Row className='mt-4 py-3 text-center gap-'>


                    <Col sm={12} md={3} lg={3} className='text-center'>
                        <p className='text-center text-5lg mb-2 d-none d-lg-block' style={{
                            fontSize: "30px",
                            marginLeft: "110px",


                        }} >
                            <LuTimer />
                        </p>
                        <p className='d-lg-none d-sm-block  ' style={{
                            fontSize: "30px",
                            marginLeft: "210px",


                        }} >
                            <LuTimer />
                        </p>


                        <div className='text-center mt-4 mx-auto  '>

                            <p className='text-center  '>


                                Priority Stitching
                                <br></br>

                                Receive your stitched orders more<br></br>
                                quickly in a timeline of 2weeks</p>
                        </div>

                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <p className='text-center text-5lg  mb-2 d-none d-lg-block ' style={{
                            fontSize: "30px",
                            marginLeft: "110px"
                        }}  >
                            <GiSewingMachine />
                        </p>
                        <p className='d-lg-none d-block  ' style={{
                            fontSize: "30px",
                            marginLeft: "210px",


                        }} >
                            <GiSewingMachine />
                        </p>

                        <div className='trxt-center mt-4'>

                            <p className='text-center'>
                                Custom SIze<br></br>

                                Get your outfit tailored to  <br></br>
                                perfection as per your desired  <br></br>
                                measurements
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <p className='text-center text-5lg mb-2 d-none d-lg-block  ' style={{
                            fontSize: "30px",
                            marginLeft: "110px"
                        }}  >
                            <FiTruck />
                        </p>
                        <p className='d-lg-none d-block ' style={{
                            fontSize: "30px",
                            marginLeft: "210px",


                        }} >
                            <FiTruck />
                        </p>


                        <div className='trxt-center mt-4'>

                            <p className='text-center'>
                                Free Shipping <br></br>

                                We provide free shipping all across
                                <br></br>Pakistan on all of our orders
                            </p>

                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <p className='text-center text-5lg  mb-2 d-none d-lg-block   ' style={{
                            fontSize: "30px",
                            marginLeft: "110px"
                        }}  >
                            <FaClipboardUser />
                        </p>
                        <p className='d-lg-none d-sm-block  mt-4 ' style={{
                            fontSize: "30px",
                            marginLeft: "210px",


                        }} >
                            <FaClipboardUser />
                        </p>
                       


                        <div className='trxt-center mt-4'>

                            <p className='text-center'>
                                ORDER EXCHANGE <br></br>

                                For a hassle free exchange service,<br></br> fill
                                out the exchange form
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <hr className='mt-5  ' />

            <Container>

                <Row className='mt-5   ' >


                    <Col md={3} lg={3} className=' text-gray d-lg-block d-none'>
                        <b className=''> ABOUT</b>
                        <br></br>

                        <p >
                            Who We Are
                            <br></br>
                            Our Responsibility
                            <br></br>
                            Servec We Provide
                            <br></br>
                            Careers
                            <br></br>
                            Legal
                        </p>
                    </Col>


                    <Col sm={12} md={2} lg={2}>

                    </Col>

                    <Col md={3} lg={3} style={{}} className=' text-gray  d-lg-block d-none '>
                        <b > CUSTOMER SERVICE</b>
                        <br></br>

                        <p >
                            Contact us
                            <br></br>
                            Dispatch Timeline
                            <br></br>
                            Exchange & Refund
                            <br></br>
                            call: +92423564736
                            <br></br>
                            Wathsapp: +92423564736
                        </p>

                    </Col>

                    <Col sm={12} md={2} lg={2}>

                    </Col>

                    <Col md={2} lg={2} className=' text-gray d-lg-block d-none'>
                        <b>POLICIES </b>
                        <br></br>
                        <p >
                            Privacy policy
                            <br></br>
                            Refund policy
                            <br></br>
                            Shipping policy
                            <br></br>
                            Terms of service
                            <br></br>
                            Exchange & Refund
                        </p>
                    </Col>
                    <Col sm={12} className='   d-lg-none d-sm-block mt-2'>
                        <Accordion defaultActiveKey={['']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> ABOUT
                                    <br></br>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p >
                                        Who We Are
                                        <br></br>
                                        Our Responsibility
                                        <br></br>
                                        Servec We Provide
                                        <br></br>
                                        Careers
                                        <br></br>
                                        Legal
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>  CUSTOMER SERVICE
                                    <br></br>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p >
                                        Contact us
                                        <br></br>
                                        Dispatch Timeline
                                        <br></br>
                                        Exchange & Refund
                                        <br></br>
                                        call: +92423564736
                                        <br></br>
                                        Wathsapp: +92423564736
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>POLICIES
                                    <br></br>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p >
                                        Privacy policy
                                        <br></br>
                                        Refund policy
                                        <br></br>
                                        Shipping policy
                                        <br></br>
                                        Terms of service
                                        <br></br>
                                        Exchange & Refund
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                </Row>
            </Container>
            <Container>

                <Row className="mt-5  " >


                    <Col  md={12} lg={12}>
                        <div className="   d-lg-flex  gap-5 d-none " style={{  fontSize: "25px" }}>
                            <FaFacebookF />
                            <AiOutlineInstagram />
                            <ImYoutube />
                            <FaSnapchatGhost />
                            <IoLogoWhatsapp />
                            <AiOutlineTikTok />

                        </div>
                        

                        <div className="text-start d-lg-none d-sm-block " style={{ display: "flex", gap:"37px", fontSize: "20px" }}>
                            <FaFacebookF />
                            <AiOutlineInstagram />
                            <ImYoutube />
                            <FaSnapchatGhost />
                            <IoLogoWhatsapp />
                            <AiOutlineTikTok />

                        </div>
                        <div>
                       
                        <span className="text-start mt-5 d-none d-lg-block ">Pakistan</span>

                        <p className="text-center mt-3 d-lg-none d-sm-block">Pakistan</p>
                
                        <span className="text-end  mt- d-none d-lg-block" >
                                © 2024 - BAROQUE
                         </span>
                        <div className=" text-center mt-3 d-lg-none d-sm-block" >
                              © 2024 - BAROQUE
                        </div>
                       </div>




                    </Col>
                   
                    


                </Row>
            </Container>




        </>
    )
}

export default Footer
