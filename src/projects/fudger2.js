import React from 'react'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import '../css/projects.css'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { HashLink as Link } from 'react-router-hash-link';
import Define from './fudger/define.js'
import ReactPlayer from 'react-player'
import Carousel from '../components/carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import design from '../pictures/fudger/design-process.png'
import diamond from '../pictures/fudger/diamond-design.png'
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons"
  
class Fudger extends React.Component {
	render() {
		return (
			<div className="fudger" id="fudger">
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Füdger</Breadcrumb.Item>
                </Breadcrumb>
                <Container>
                    
                    <Link to="/fudger#fudger">
                        <FontAwesomeIcon className="back-up" icon={faArrowAltCircleUp}/>
                    </Link>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    <br></br>
                    <h2>Project Snapshot</h2>
                    
                    <div className="row">
                        <div className="column"><h4>The Problem</h4>
                            <p>How can we help solve food waste problem at a consumer level?</p>
                            <p>
                            While we have waste disposal systems in place, there must be 
                            a reason why we have so much waste in the first place.
                            </p>
                            
                            <h4>The Solution</h4>
                            <p>
                            A digital experience that helps users streamline their grocery 
                            shopping experience by allowing them to track their food inventory 
                            and grocery list.
                            </p>

                            <h4>Project Tidbit</h4>
                            <p>Axure RP</p>
                            <p>3.5 months</p>
                            <p>6 members</p>

                            <h4>My Role</h4>
                            <p>UX research</p>
                            <p>Prototyping</p>
                            <p>Usability testing</p>
                            <p>QA/Editor</p>
                            
                            <strong>Applied Skills</strong>
                            <p>
                            REQUIREMENTS GATHERING, DESIGN THINKING, UX RESEARCH, 
                            USER INTERVIEWS, USER JOURNEY MAPPING, USER STORIES, 
                            INFORMATION ARCHITECTURE, WIREFRAMING, RAPID PROTOTYPING, 
                            USABILITY TESTING, EDITING.
                            </p>
                        </div>
                        <div className="column2">  
                            <Carousel/>
                        </div>
                    </div>
                    <hr/>

                    <h2>How did I get there?</h2>
                    <span className='wrapper'>
                    <ReactPlayer className='player' width="80%" height="400px" url='https://youtu.be/lnwCgkgHoTg' />
                </span>

                    <p> But let's rewind a bit...</p>
                    <h2>Discovery</h2>
                    <p>7 field studies, 5 user interviews, 55 user surveys.</p>
                    <p className="quotes">Some quptes from the project</p>

                    <h2>Define</h2>
                    <Define/>
                    <h4>Task Flow</h4>
                    <h4>User Journey</h4>

                    <h2>Design I: Paper Prototype</h2>
                    <p><strong>Automatic data entry</strong> by taking a picture of the receipt to combat busyness or laziness</p>
                    <p><strong>Recipe finder</strong> that automatically removes used inventory items based on the recipe </p>
                    <p><strong>Targeted recipe finder</strong> to find recipes containing the expiring product</p>
                    <p><strong>Allow grocery sublists</strong> to reduce cognitive load and organize cooking ideas </p>
                    <p><strong>Generate approximate expiry dates</strong> to combat laziness and allow gentle reminders to use products </p>
                    <p><strong>Fact of the Day</strong> to bring awareness to shopping habits and business tricks which leads to over-purchasing </p>
                    
                    <h4>Results</h4>
                    <p>Gathered feedback and observations from usability tests...</p>
                    <p>Search bar needs to be more obvious </p>
                    <p>Tooltip. Planned but not implemented in paper prototype</p>
                    <p>Use at own risk” notice for the generated expiry dates</p>
                    
                    <h2>Design II: High-fidelity Prototype</h2>
                    <p>
                        At the end of the paper prototype stage, the team looked 
                        at what features to include, and designed the wireframe.
                    </p>
                    <p>
                        And then built the first version of our high-fidelity prototype, 
                        which was tested by a few UX experts and fellow classmates.
                        The prototype was updated based on their feedback.

                    </p>
                    <h4> Results</h4>

                </Container>
			</div>
		);
	}
} 
export default Fudger