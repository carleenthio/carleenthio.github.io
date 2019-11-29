import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/breadcrumb.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useState } from 'react'
import '../css/projects.css'

import design from '../pictures/design-process.png'
class Fudger extends React.Component {
	render() {
		return (
			<div className="fudger">
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Füdger</li>
                    </ol>
                </nav>

                <Container>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    <h2>What better way to help the environment than individually reduce food waste?</h2>
                    <p>Some backgroound story maybe?</p>

                    <h2>Objective</h2>
                    <hr></hr>
                    <p>Design a digital intervention that helps users streamline their grocery shopping 
                        experience by allowing users to be able to look up what food they have, 
                        effectively helping to mitigate over-purchasing food items. </p>

                    <h2>Result</h2>
                    <hr/>
                    <p>Our prototype was built using Axure RP 9 and can be accessed
                         <a href="https://fqqihb.axshare.com/"> here</a>.</p>

                    <h2>My Role</h2>
                    <p>This project was done with a team of 6 students from varying backgrounds. 
                        We all participated at every stage of the process. 
                        However, I was personally responsible for:
                        <ul>
                            <li> Conducting field-study research</li>
                            <li> Integrating and writing most of the information in the usability study report, 
                                specifically for the method, findings and implications section</li>
                            <li> Editing majority of reports to ensure conformity, flow, and ease of read</li>
                            <li> Ensuring conformity in the prototype by checking alignments, fonts and colours</li>
                        </ul>
                    </p>

                    <h2> Scope and Constraints</h2>
                    <p>Due to this project being done concurrently with class, there wasn’t much time 
                        to find a variety of people. So most of our participants were students, 
                        and specifically from STEM majors. This could be a problem as that demographic 
                        is more tech-savvy. 
                    </p>
                    <p>Since we had limited time to explore Axure, we also ran into a couple bugs that 
                        affected user flow and had a few functions hard-coded in the prototype. At certain
                         times, there were server issues that resulted in the pages not 
                         loading properly or very slowly. This resulted in some user confusion.</p>
                    
                    <h2>Design Process</h2>
                    <p> We used the double diamond design process on this project. 
                        This design process consist of diverging and converging ideas to get 
                        to a solution at four stages; discover, define, develop and deliver. 
                        Below are the methods we used at each stage.</p>

                        <img className='design-process' src={design} width="100%"/>
                        
                        <Accordion defaultActiveKey="2">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Discover
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>In the earliest stage, we did preliminary research on food waste. 
                                        While food waste occurs at every stage (production, transportation, supplier, 
                                        consumer), we decided to tackle the consumer stage. And once again,
                                         there were several stages in the consumer stage and decided that prevention 
                                        of excess food was the way to go. Therefore, we narrowed the problem 
                                        space to help reduce food waste within consumers by helping 
                                        them reduce overbuying food during their grocery runs.
                                    </p>
                                    <p>
                                        Once we identified out goal, we conducted primary user research. 
                                    </p>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Define
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>This stage was the beginning of fleshing out our design, 
                                        identifying what is required and how it should function. 
                                        In our (short form creative brief), we identified 2 key persona and 
                                        3 key scenarios, as well as outlining our objectives and key principles. 
                                        A task analysis was also created on draw.io to outline how user will 
                                        complete specific tasks. </p>
                                    <h3>Personas</h3>
                                    <p>
                                    
                                    </p>
                                    <h3> Scenarios</h3>
                                    <p></p>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Design
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p> This stage took the bulk of our effort, consisting of a paper prototype 
                                        (low fidelity), and a high fidelity prototype (with 3 iterations). 
                                        Each prototype was followed by a usability test to help us gain a 
                                        deeper understanding through both qualitative and quantitative 
                                        information as the test involves observing, and talking to the 
                                        testers afterwards, while also timing how long it took them to
                                         finish each task.></p>
                                    <h3>My Paper Prototype</h3>
                                    <h3>High-fidelity Prototype</h3>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Develop
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <p>Since this project concentrated on the design process, we did not go 
                                        deep into the development stage as this would require the prototype 
                                        to be built. However, we did not ignore it completely. We briefly 
                                        ran through what would happen at this stage and also worked on a 
                                        heuristic review of developing the product.</p>
                                    <p>This stage involved identifying problems at each screen and
                                         assigning a severity rating of the heuristic it failed to meet, 
                                         as well as providing recommendations to fix it.</p>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                       
                        <ControlledTabs />
                        <p>Bacon ipsum dolor amet cupim pork short ribs, swine pastrami chuck sausage pork loin jerky. Strip steak meatball ham alcatra meatloaf buffalo. Ham kevin tail filet mignon, strip steak tenderloin ball tip ground round turducken shoulder porchetta. Jerky short ribs buffalo ball tip chislic. Sausage t-bone shoulder andouille kielbasa alcatra.</p>
                        <p>Short ribs ribeye buffalo, t-bone ball tip ground round meatball pork belly cow strip steak alcatra tongue turducken. Tail ball tip capicola, sirloin drumstick leberkas jerky burgdoggen pork chop corned beef meatloaf. Landjaeger t-bone meatball bacon ham. Turkey beef ribs andouille pig biltong jowl swine kielbasa, cupim alcatra rump drumstick chislic landjaeger bacon.</p>
                </Container>
			</div>
		);
	}
}

function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="discover" title="Discover">
            <p>In the earliest stage, we did preliminary research on food waste. 
                While food waste occurs at every stage (production, transportation, supplier, 
                consumer), we decided to tackle the consumer stage. And once again,
                    there were several stages in the consumer stage and decided that prevention 
                of excess food was the way to go. Therefore, we narrowed the problem 
                space to help reduce food waste within consumers by helping 
                them reduce overbuying food during their grocery runs.
            </p>
            <p>
                Once we identified out goal, we conducted primary user research. 
            </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>ooop</p>
        </Tab>
      </Tabs>
    );
  }
  
 
export default Fudger