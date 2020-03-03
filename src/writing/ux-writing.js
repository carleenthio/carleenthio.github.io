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
                <span>
                    <h4>UX Writing Challenge: Day 1</h4>
                    <p>
                        Scenario: A traveler is in an airport waiting for the last leg of a flight home when their flight gets abruptly canceled due to bad weather.
                        <br /> 
                        Challenge: Write a message from the airline app notifying them of the cancellation and what they need to do next.
                        <br /> 
                        Headline: 45 characters [43 chars used]
                        <br /> 
                        Body: 175 characters max [155 chars used]
                        <br /> 
                        Button(s): 25 characters max [25 chars used]
                    </p>
                    <hr></hr>
                    <p>
                        Notice: Flight Cancelled Due to Bad Weather
                        <br /> 
                        <br/>
                        {/* Thank you for flying with us. Sadly we had to cancel your flight due to bad weather.
                        <br /> 
                        But don't worry! We found a few flights that will take you to your destination.  */}
                        Thank you for flying with us. Sadly we had to cancel your flight due to bad weather. 
                        <br /> 
                        But don't worry! We found the next flight to your destination for you.
                        <br /> 
                        <br/>
                        Book flight 
                        <br/>
                        Other options
                    </p>
                    <hr></hr>
                    <p>
                        When a traveller is flying, they are likely to be tired and the one thing on their mind is to get home. 
                        So, I felt it is important to just provide them with the first flight out of there. 
                        This eliminates the need for them to think about choices, which is a mentally exhausting task. 
                        They are still free to browse alternative flight if they wish to though.
                    </p>
                </span>
               
                <span>
                    <h4>UX Writing Challenge: Day 2</h4>
                    <p>Scenario: A user is a working parent, and a big sports fan, in the midst of their favorite sports season who can no longer attend games.
                    <br/>
                    Challenge: Write a promotional screen for an app that lets a user choose teams, sends game reminders, real-time score updates and highlight videos.
                    <br/>
                    Headline: 40 characters max [30 chars used]
                    <br/>
                    Body: 175 characters max [168 chars used]
                    <br/>
                    Button(s): 25 characters max [18 chars used]
                    </p>
                    <hr></hr>
                    <p>
                    Get Your Head in the Game 24/7!
                    <br/>
                    <br/>
                    Stay updated with your favourite team wherever you are. 
                    <br/>
                    We'll send you game reminders so you never have to miss a game! 
                    <br/>
                    With real-time scores and highlight videos 24/7.
                    <br/>
                    <br/>
                    Pick my team 
                    <br/>
                    Later
                    </p>
                    <hr></hr>
                </span>
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