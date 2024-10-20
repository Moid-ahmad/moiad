import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap'

function Footer2() {
  return (
    <div>
            {/* <hr className='mt-5  ' /> */}

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

    </div>
  )
}

export default Footer2
