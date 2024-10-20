import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Video() {
  return (

    <Container fluid>
      <Row>
        {/* First Video */}
        <Col sm={12} md={4}>
          <div className='video-container mt-5 ' style={{ position: 'relative', textAlign: '' }}>
            <video width="100% " height={"600"} w-full muted autoPlay style={{ position: 'relative', display: "flex", justifyContent: "center" }} >
              <source src='https://baroque.pk/cdn/shop/videos/c/vp/7b9638aa43024780ae37d95fbe8f9ae3/7b9638aa43024780ae37d95fbe8f9ae3.HD-1080p-7.2Mbps-35438556.mp4?v=0' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Link to="/Celeberity">   <button className="  " style={{
              position: 'absolute',
              border: "2px solid black",
              width: "180px",
              padding: "10px 10px",
              fontSize: "15px",
              letterSpacing: '2px',
              transition: "background-color 0.3s ease",
              backgroundColor: "black",
              bottom: "40px",
              left: "225px",
              color: "white",
              transform: "translateX(-50%)",
            }}
              onMouseEnter={(a) => {
                a.currentTarget.style.backgroundColor = "transparent";
                a.currentTarget.style.color = "black"
              }}
              onMouseLeave={(a) => {
                a.currentTarget.style.backgroundColor = "black";
                a.currentTarget.style.color = "white"
              }}
            >
              CLIENT LOVE </button></Link>
          </div>
        </Col>

        {/* Second Video */}
        <Col sm={12} md={4}>
          <div className='video-container mute mt-5' style={{ position: 'relative', textAlign: '' }} >
            <video width="100%" height={"600"} w-full muted autoPlay   >
              <source src='https://baroque.pk/cdn/shop/videos/c/vp/41081bac92e14717a80c9e1b787f2439/41081bac92e14717a80c9e1b787f2439.HD-1080p-3.3Mbps-27199292.mp4?v=0' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
       <Link to="/Celeberity">
       <button className="  " style={{
              position: 'absolute',
              border: "1px solid black",
              width: "180px",
              padding: "10px 10px",
              fontSize: "15px",
              letterSpacing: '2px',
              transition: "background-color 0.3s ease",
              backgroundColor: "black",
              bottom: "40px",
              left: "135px",
              color: "white",
              // transform: "translateX(-50%)",
            }}

              onMouseEnter={(a) => {
                a.currentTarget.style.backgroundColor = "transparent";
                a.currentTarget.style.color = "black"
              }}
              onMouseLeave={(a) => {
                a.currentTarget.style.backgroundColor = "black";
                a.currentTarget.style.color = "white"
              }}
            >
              CELEBRITY STYLE </button></Link>
          </div>
        </Col>
        {/* Third Video */}
        <Col sm={12} md={4}>
          <div className='video-container mt-5' style={{ position: 'relative', textAlign: 'center' }}>
            <video width="100%" height={"600"} w-full muted autoPlay>
              <source src='https://baroque.pk/cdn/shop/videos/c/vp/ba13ad9e060648fe9643eb40473110a8/ba13ad9e060648fe9643eb40473110a8.HD-1080p-7.2Mbps-35438644.mp4?v=0' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <Link to="/Styleposted">  <button className="  " style={{
              position: 'absolute',
              border: "1px solid black",
              width: "180px",
              padding: "10px 10px",
              fontSize: "15px",
              letterSpacing: '2px',
              transition: "background-color 0.3s ease",
              backgroundColor: "black",
              bottom: "40px",
              left: "135px",
              color: "white",
              // transform: "translateX(-50%)",
            }}

              onMouseEnter={(a) => {
                a.currentTarget.style.backgroundColor = "transparent";
                a.currentTarget.style.color = "black"
              }}
              onMouseLeave={(a) => {
                a.currentTarget.style.backgroundColor = "black";
                a.currentTarget.style.color = "white"
              }}
            >
              STYLE POSTTED</button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Video
