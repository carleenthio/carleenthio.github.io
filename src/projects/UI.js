import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import { Row, Col } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import betterFood from '../pictures/Better-Food.png'
import creditCard from '../pictures/credit-card.png'
import two from '../pictures/banner-twobytwo.jpg'
import small from '../pictures/banner-small.jpg'
import square from '../pictures/banner-square.png'
import fridaycafe from '../pictures/UXfridays.png'
class UIcompilation extends React.Component {    
	render() {
		return (
			<div className='brick-breaker'>
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>UI/UX Compilation</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container>
                    <h1>UI/UX Compilation</h1>
                    
                    <div>
                        <h3>
                            Banner Ads
                        </h3>
                        <p>This project was done as a challenge presented to me.</p>
                        <p>
                            It had the following instruction:
                            <ul>
                                <li>
                                Design a banner ad to be used within the Google Ads Network and 
                                build out into a full set (22 sizes). 
                                These types of ads would be served on any AdSense approved site.
                                </li>
                            </ul>
                        </p>
                        <p>These are just three of them. The other banner designs are on Figma.</p>
                        <img className='ux-img' alt='Better Food homepage prototype' src={two}/>
                        <img className='ux-img' alt='Better Food homepage prototype' src={small}/>
                        <img className='ux-img' alt='Better Food homepage prototype' src={square}/>
                        <p>
                            <a 
                                className="project-button-a" 
                                href="https://www.figma.com/file/YV8Aabvm3T8MfTy65Z6VdI/Banner-Ads?node-id=0%3A1" 
                                target="_blank" 
                                rel="noopener noreferrer"> 
                                <button className="ui-ux-button">
                                    Check out banners
                                </button>
                            </a>
                        </p>  
                    </div>

                    <div>
                        <h3>UI/UX Design Exercises</h3>
                        <p>A mix of web and mobile app designs.</p>
                        {/* <Row>
                            <Col xs={12} md={6}> */}
                                <img className='ux-img' alt='Better Food homepage prototype' src={betterFood}/>
                            {/* </Col>
                            <Col xs={12} md={6}> */}
                                <img className='ux-img' alt='Credit card prototype' src={creditCard}/>
                                <img className='ux-img' alt='Working prototype for a restaurants delivery system' src={fridaycafe}/>
                            {/* </Col>
                        </Row> */}
                       
                       <p>
                        <a 
                            className="project-button-a" 
                            href="https://www.figma.com/file/J3wywQImy4FLePFdXy5J3J/Other-Designs?node-id=0%3A1" 
                            target="_blank"
                            rel="noopener noreferrer"> 
                            <button className="ui-ux-button">
                                Look at designs
                            </button>
                        </a>
                        </p>
                    </div>
                </Container>
			</div>
		);
	}
}
export default UIcompilation