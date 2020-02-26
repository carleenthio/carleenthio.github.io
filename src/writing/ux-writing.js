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
                    <LinkContainer to="/writing">
                        <Breadcrumb.Item>Writing</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>UX Writings</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container>
                <h1 className="writing-title"> UX Writings</h1>
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
                        Notice: Flight Cancelled Due to Bad Weather [43 character]
                    
                        Thank you for flying with us. Sadly we have to cancel your flight due to bad weather.
                        But don't worry! We found a few flights that will take you to your destination. 
                        [167 characters]

                        Book my next flight [19 character]
                    </p>
                </span>
                <span>
                    <h3>UX Writing Challenge: Day 2</h3>
                    <p>Scenario: A user is a working parent, and a big sports fan, in the midst of their favorite sports season who can no longer attend games.

                    Challenge: Write a promotional screen for an app that lets a user choose teams, sends game reminders, real-time score updates and highlight videos.
                    
                    Headline: 40 characters max
                    Body: 175 characters max
                    Button(s): 25 characters max
                    </p>
                </span>
                </Container>
			</div>
		);
	}
}
export default UxWriting