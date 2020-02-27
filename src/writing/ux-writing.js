import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/writing.css'
import { Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import forbidden from '../pictures/forbidden.svg'
import notFound from '../pictures/404.svg'
class UxWriting extends React.Component {    
	render() {
		return (
			<div className='brick-breaker'>
                <Breadcrumb>
                    <LinkContainer to="/writing">
                        <Breadcrumb.Item>Writing</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>UX Writings</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container className="writing-content">
                <h1 className="writing-title"> UX Writings [WIP]</h1>
                <h3>Error Messages</h3>
                <p>Below will take you to the actual error pages.</p>
                <p>Explore away!</p>
                <LinkContainer to="/forbidden">
                    <span>
                    <button className="write-error-button">
                    Error 403: Forbidden
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </button>
                    </span>
                </LinkContainer> 
                <LinkContainer to="/404">
                    <span>
                    <button className="write-error-button">
                    Error 404: Page Not Found
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </button>
                    </span>
                </LinkContainer> 
                <br/>

                <h3>Writing Challenges</h3>
                <span>
                    <h4>UX Writing Challenge: Day 1</h4>
                    <p>
                        Scenario: A traveler is in an airport waiting for the last leg of a flight home when their flight gets abruptly canceled due to bad weather.
                        <br /> 
                        Challenge: Write a message from the airline app notifying them of the cancellation and what they need to do next.
                        <br /> 
                        Headline: 45 characters<br /> 
                        Body: 175 characters max<br /> 
                        Button(s): 25 characters max
                    </p>
                    <p>
                        Notice: Flight Cancelled Due to Bad Weather [43 character]
                        <br /> 
                        Thank you for flying with us. Sadly we have to cancel your flight due to bad weather.
                        <br /> 
                        But don't worry! We found a few flights that will take you to your destination. 
                        [167 characters]
                        <br /> <br /> 
                        Book my next flight [19 character]
                    </p>
                </span>
               
                {/* <span>
                    <h4>UX Writing Challenge: Day 2</h4>
                    <p>Scenario: A user is a working parent, and a big sports fan, in the midst of their favorite sports season who can no longer attend games.

                    Challenge: Write a promotional screen for an app that lets a user choose teams, sends game reminders, real-time score updates and highlight videos.
                    
                    Headline: 40 characters max
                    Body: 175 characters max
                    Button(s): 25 characters max
                    </p>
                </span> */}
                </Container>
			</div>
		);
	}
}
export default UxWriting