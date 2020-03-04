import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/writing.css'
import { Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import forbidden from '../pictures/forbidden.svg'
import notFound from '../pictures/404.svg'
import d1 from '../pictures/ux-writing/day1.svg'
import d2 from '../pictures/ux-writing/day2.svg'
class UxWriting extends React.Component {    
	render() {
		return (
			<div className='ux-writing'>
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
                <p>Below will take you to actual error pages on this website.</p>
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
                <img className='design-process' alt='double diamond process' src={d1} width="100%"/>
                <img className='design-process' alt='double diamond process' src={d2} width="100%"/>
                <span>
                    <h4>UX Writing Challenge: Day 3</h4>
                    <p> 
                        Scenario: The user entered the wrong email address to sign in to their account.
                        <br/>
                        Challenge: Tell the user to enter the right email.
                        <br/>
                        40 characters max [33 chars used]
                    </p>
                    <hr></hr>
                    <p>
                        Oops, email not found! Try again. 
                    </p>
                    <hr></hr>
                    <p>
                        Sidenote: For security purposes, I would've changed it to "Oops, something's not right! Try again."
                        <br/>
                        However, this could lead to user frustration as they won't know whether it's due to incorrect email or password. 
                    </p>
                </span>
                <span>
                    <h4>UX Writing Challenge: Day 4</h4>
                    <p>
                        Scenario: A user is in their favorite supermarket. They open the supermarket’s app on their phone to see what’s on sale and are greeted by a promotion.
                        <br/>
                        Challenge: Write a promotional home screen for a subscription service that delivers groceries to the user once-a-month for a flat fee.
                        <br/>
                        Headline: 45 characters max [34 chars used]
                        <br/>
                        Body: 175 characters max [173 chars used]
                        <br/>
                        Button(s): 25 characters max [25 chars used]
                    </p>
                    <hr></hr>
                    <p className="answer">
                        New: Get your Groceries Delivered! 
                        <br/>
                        <br/>
                        Stay indoors in pyjamas and have your grocery needs delivered straight to your door. 
                        <br/>
                        For a flat $15 monthly fee, you no longer have to brave the cold winters or hot summers! 
                        <br/>
                        <br/>
                        Subscribe
                        <br/>
                        More info 
                        <br/>
                        Later
                    </p>
                    <hr></hr>
                </span>
                {/* <span>
                <h4>UX Writing Challenge: Day 5</h4>
                <p>
                    Scenario: The user works in graphic design. While critiquing a design in a mobile app, their phone abruptly turns off. When they restart the phone, they reopen the app.
                    <br/>
                    Challenge: Write a message that the user will read immediately upon opening the app. What do they need to know? What steps (if any) do they need to take to recover their content? What if they can't recover the content? 
                    <br/>
                    Headline: 40 characters max [33 chars used]
                    <br/>
                    Body: 140 characters max
                    <br/>
                    Button(s): 20 characters max
                </p>
                <hr/>
                <p>
                    Whoops! There was an interruption

                </p>
                <hr/>
                </span> */}
                </Container>
			</div>
		);
	}
}
export default UxWriting