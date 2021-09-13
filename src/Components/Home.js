import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { IoRibbonOutline, IoAnalyticsOutline, IoGlobeOutline } from 'react-icons/io5'
import { FiSettings, FiTv } from 'react-icons/fi'
import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import { AiOutlineTeam, AiOutlineAndroid, AiOutlineApple, AiOutlinePhone } from 'react-icons/ai'
import { MdImportantDevices } from 'react-icons/md'
import { CgAppleWatch } from 'react-icons/cg'
import { VscPreview } from 'react-icons/vsc'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import animespin from '../assets/animespin.png'
import { HiOutlineLocationMarker, HiOutlineMailOpen } from 'react-icons/hi'
import pattern1 from '../assets/pattern1.png'
import { PortfolioGallary } from './PortfolioGallary'

function Home() {
  const [connect, setConnect] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [item, setItem] = useState(PortfolioGallary);
  const filterItem = (catItem) =>{
    const updateItem = PortfolioGallary.filter( data =>{
      return data.category === catItem
    })
    setItem(updateItem);
    
  }
  return (
    <>
      <div className='slider' id='home'>
        <Container className='slider-inner'>

          <h2 style={{ fontSize: '30px' }}>IT BUSINESS CONSULTING</h2>
          <h1 style={{ fontSize: '60px' }}>Our Agency Provides<br />Best IT Solutions.</h1>
          <p style={{ fontSize: '20px' }}>We are 100+ professional software engineers <br />with more than 10 years of experience in delivering superior products.</p>

        </Container>
      </div>
      <div className='abouthome' id='about'>
        <Container className='abouthome-inner'>
          <Row>
            <Col md={6} sm={12}>
              <h4 style={{ color: '#ef3033' }}>ABOUT US</h4>
              <br />
              <h1>We Have Creative Team To<br />Build Your Website Better.</h1>
              <br />
              <p>Atom Web Solution is a fast-growing organization that provides web development services, responsive website development, custom website design services, and professional web page design. We are a privately held and funded organization, specializing in ITES and software development. We are a team of professionals, who specialize in innovative twenty-first-century data solutions ideal for the global market.</p>
              <br />
              <h4><IoRibbonOutline style={{ color: '#ef3033', width: '60px', height: '60px' }} />Experience</h4>
              <p>Our great team of more than 1400 software experts.</p>
              <h4><FiSettings style={{ color: '#ef3033', width: '60px', height: '60px' }} />Quick Support</h4>
              <p>We’ll help you test bold new ideas while sharing your.</p>
            </Col>
            <Col md={6} sm={12} className='spin-outer'>

              <img className='spin' alt='spin' src={animespin} />
              <img src={about1} alt='about1' className='spin-icon1' />
              <img src={about2} alt='about2' className='spin-icon2' />
              <img src={about3} alt='about3' className='spin-icon3' />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='admin-work' id='services'>
        <Container>
          <Row >
            <center>
              <div id='admin-work-header' style={{ background: '#ef3033', borderRadius: '30px' }}>
                <img className='work-icon1' src={icon2} alt='icon1' />
                <img className='work-icon2' src={icon1} alt='icon2' />
                <img className='work-icon3' src={icon3} alt='icon3' />
                <h5 className='text-white'>WHO ARE WE</h5>
                <h2 className='text-white'>We deal with the aspects of <br />professional IT Services</h2>
              </div>
            </center>
          </Row>
          <Row>

            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-1'>
                <Card.Text><FaLaptopCode className='icon-work' style={{ color: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  We carry more than just good coding skills. Our experience makes us stand out from other web development.
                </Card.Text>


              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-1'>
                <Card.Text><FaMobileAlt className='icon-work' style={{ color: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>Mobile Development</Card.Title>
                <Card.Text>
                  Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                </Card.Text>


              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-1 card-work-hover'>
                <Card.Text><MdImportantDevices className='icon-work' style={{ color: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Build the product you need on time with an experienced team that uses a clear and effective design process.
                </Card.Text>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-2 card-work-hover'>
                <Card.Text><IoAnalyticsOutline className='icon-work' style={{ color: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>QA and Testing</Card.Title>
                <Card.Text>
                  Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.
                </Card.Text>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-2 card-work-hover'>
                <Card.Text><VscPreview className='icon-work' style={{ color: '#ef3033', fill: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>IT Consultancy</Card.Title>
                <Card.Text>
                  Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.
                </Card.Text>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='card-work-2 card-work-hover'>
                <Card.Text><AiOutlineTeam className='icon-work' style={{ color: '#ef3033', width: '60px', height: '60px' }} /></Card.Text>
                <Card.Title>Dedicated Team</Card.Title>
                <Card.Text>
                  Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
        <hr style={{ color: '#ef3033' }} />
      </div>

      <div className='portfolio-home' id='portfolio'>
        <Container>
          <h3 style={{ color: '#ef3033' }}>Our Portfolio</h3>
          <br />
          <Button variant='light' className="mx-5 my-3 pbtn" onClick={()=> setItem(PortfolioGallary)}>All</Button>
          <Button variant='light' className="mx-5 my-3 pbtn" onClick={()=> filterItem('beauty')}>Beauty/Salon</Button>
          <Button variant='light' className="mx-5 my-3 pbtn" onClick={()=> filterItem('baby')}>Baby</Button>
          <Button variant='light' className="mx-5 my-3 pbtn" onClick={()=> filterItem('bakery')}>Bakery</Button>
          <Button variant='light' className="mx-5 my-3 pbtn" onClick={()=> filterItem('tailor')}>Taloring</Button>

          <Row>
          {item && item.map( data => {
            return(
              <Col id={data.id} lg={4} md={6} sm={12}>
                <hr/>
                <h4 style={{color: '#ef3033'}}>{data.desc}</h4>
              
              <a href={data.link} target="_blank" ><img className='portfolio-url' src={data.image} alt={data.alt} />
              </a>
              <hr style={{color: '#ef3033'}}/>
            </Col>
            )
          }

          )}
          </Row>
        </Container>
      </div>
      <div className='portfolio-home'>
        <img className='portf-pattern' src={pattern1} alt='pattern' />
        <div className='portfolio-home-inner'>
          <h2>Preparing For Your Business</h2>
          <h2>Success With IT Solution Meet With Us</h2>
        </div>
        <Row className='portfolio-home-inner2'>

          <Col md={3} sm={12}>
            <h5>TECHNOLOGY INDEX</h5>
            <h1>We Deliver Solutions with the Goal of Trusting Workships</h1>
          </Col>
          <Col md={9} sm={12}>
            <Row>
              <Col>
                <Card className='portf-card'><center><FaLaptopCode style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>WEB</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className='portf-card'><center><AiOutlineAndroid style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>ANDROID</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className='portf-card'><center><AiOutlineApple style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>IOS</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className='portf-card'><center><IoGlobeOutline style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>IOT</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className='portf-card'><center><FiTv style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>TV</Card.Text>
                </Card>
              </Col>

              <Col>
                <Card className='portf-card'><center><CgAppleWatch style={{ color: '#ef3033', width: '60px', height: '60px' }} /></center>
                  <Card.Text>WEARABLES</Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className='contact' id='contact'>
        <Row>
          <Col className='contact-form' md={8} sm={12}>
            <h2 className='text-white'>Got an !dea?</h2>
            <h5>Drop a message below and allow us to get back to you!!!</h5>
            <br />
            <p className='form-main'>Hi! I am&nbsp; 
              <input type='text' placeholder='Your Name' value={connect.name} onChange={e => setConnect({ ...connect, name: e.target.value })} />
              & got an idea to discuss. Kindly contact me. My email address is&nbsp;
              <input type='email' placeholder='Email' value={connect.email} onChange={e => setConnect({ ...connect, email: e.target.value })} />
              and my phone number is&nbsp; 
              <input type='text' placeholder='Number' value={connect.phone} onChange={e => setConnect({ ...connect, phone: e.target.value })} />.
              <br />
              Message : &nbsp; 
              <input as="textarea" placeholder='Your idea!' onChange={e => setConnect({ ...connect, message: e.target.value })} />.
            </p>
            <br />
            <Button className='my-3' variant='outline-light' size='lg' style={{ color: '#ef3033' }}>Send</Button>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='contact-card'>
              <Card.Title><HiOutlineLocationMarker style={{ color: '#fff', width: '60px', height: '60px' }} />Address</Card.Title>
              <Card.Text>13225 Lantern Hill Court, Silver Spring, Maryland 20906</Card.Text>
            </Card>
            <br />
            <Card className='contact-card'>
              <Card.Title><AiOutlinePhone style={{ color: '#fff', width: '60px', height: '60px' }} />Phone</Card.Title>
              <Card.Text>+17149126132(US) , (IND)</Card.Text>
            </Card>
            <br />
            <Card className='contact-card'>
              <Card.Title><HiOutlineMailOpen style={{ color: '#fff', width: '60px', height: '60px' }} />Email</Card.Title>
              <Card.Text><a href='mailto:atomwebsolutions2020@gmail.com'>atomwebsolutions2020@gmail.com</a></Card.Text>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
