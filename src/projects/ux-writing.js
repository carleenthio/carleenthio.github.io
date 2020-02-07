import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import { Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class UxWriting extends React.Component {    
	render() {
		return (
			<div className='brick-breaker'>
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>UX Writings</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container>
                <h1> UX Writings</h1>
                <span>
                    <h3>UX Writing Challenge: Day 1</h3>
                    <p>
                        Scenario: A traveler is in an airport waiting for the last leg of a flight home when their flight gets abruptly canceled due to bad weather.

                        Challenge: Write a message from the airline app notifying them of the cancellation and what they need to do next.

                        Headline: 45 characters
                        Body: 175 characters max
                        Button(s): 25 characters max
                    </p>
                    <p>
                    Headline:
                    Notice: Flight Cancelled Due to Bad Weather [43 character]
                    Body & Button 1:
                    Thank you for flying with us. Sadly we have to cancel your flight due to bad weather. 
                    But don't worry! Our team will be able to assist and find you another flight! [163 characters]

                    Find my next flight [19 character]
                    </p>
                </span>
                </Container>
			</div>
		);
	}
}
export default UxWriting