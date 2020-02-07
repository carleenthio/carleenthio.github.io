import React from 'react'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useState } from 'react'
import '../../css/projects.css'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Discover from './discover.js'
import Define from './define.js'
import Design from './design.js'
import Develop from './develop.js'

import f1  from '../../pictures/final-screen.png'
import design from '../../pictures/design-process.png'
import diamond from '../../pictures/diamond-design.png'

class Fudger extends React.Component {
	render() {
		return (
			<div className="fudger">
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Füdger</Breadcrumb.Item>
                    </Breadcrumb>
                <Container>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    {/* <h2>What better way to help the environment than individually reduce food waste?</h2> */}
                    <br></br>
                    <p>
                        Food waste is a global issue that has plagued modern society. It doesn't happen because of a 
                        decision at the kitchen bin, but rather throughout the stages of food 
                        provisioning - including planning, shopping, storage, food preparation, cooking, 
                        gardening, dealing with leftovers, and cleaning up.
                    </p>
                    <p> 
                        The goal of our research is to better understand and distinguish those different stages 
                         and create a solution that could help mitigate food waste.
                    </p>
                    

                    <h2>Objective</h2>
                    <hr/>
                    <p>Design a digital experience that helps users streamline their grocery shopping 
                        experience by allowing them to track their food inventory, 
                        effectively mitigating the over-purchasing of food items. </p>
                    
                    <h4>My Role</h4>
                    <p>This project was done with a team of 6 students from varying backgrounds. 
                        We all participated at every stage of the process. 
                        However, I was personally responsible for:
                        <ul>
                            <li> Conducting field-study research</li>
                            <li> Integrating and writing most of the information in the usability study report, 
                                specifically for the method, findings and implications section</li>
                            <li> Editing majority of the reports to ensure conformity, flow, and readability</li>
                            <li> Ensuring conformity in the prototype by checking alignments, fonts, and colours</li>
                        </ul>
                    </p>
                    <h2>Result</h2>
                    <hr/>
                    <p>
                        <a href="https://fqqihb.axshare.com/#g=1&p=home&c=1" target="_blank" rel="noopener noreferrer"> Our prototype</a> was built using Axure RP 9.
                    
                        <img className='design-process' alt='final fudger screen' style={{paddingTop:"5px"}} src={f1} width="100%"/>
                        There are three main screens:
                        <ol> 
                            <li>
                                Homepage: Food expiration tracker
                                <p> Feature -> Gamification, tips and tricks</p>
                            </li>
                            <li>
                                Inventory: Keep track of what you have at home
                                <p>Feature -> Search by category, add item, expiration colour legend</p>

                            </li>
                            <li>
                                Grocery: A grocery list
                                <p>Feature -> Creates a list, ability to move bought item into inventory (no need for manual addition)</p>

                            </li>
                        </ol>
                    </p>
                   
                    

                    <h3> Scope and Constraints</h3>
                    <p>Due to this project being done concurrently with class, there wasn’t much time 
                        to find a variety of users. So most of our participants were students, 
                         particularly STEM majors. This could be a problem as that demographic 
                        is more tech-savvy. 
                    </p>
                    <p>Since we had limited time to explore Axure, we also ran into a couple bugs that 
                        affected user flow and had a few functions hard-coded in the prototype. At certain
                         times, there were server issues that caused the pages to 
                         load improperly or very slowly. This resulted in some user confusion.</p>
                    
                    <h2>Design Process</h2>
                    <hr/>
                    {/* <div display="block" text-align="center"> */}
                        <img className='design-process' alt='double diamond process' src={diamond} width="60%"/>
                    {/* </div> */}
                    <p> We used the <strong> Double Diamond </strong> design process on this project. 
                        This design process consists of diverging and converging ideas to get 
                        to a solution at four stages: discover, define, develop, and deliver. 
                        Below are the methods we used at each stage.</p>

                        <img className='design-process' alt='In-depth four stage double diamon process' src={design} width="90%"/>
                       
                     {/* <ControlledTabs /> */}
                    {/* <hr/> */}
                </Container>
                <h3>1. Discover Stage</h3>
                <Discover/>
                <h3>2. Define Stage</h3>
                <Define/>
                <h3>3. Design Stage</h3>
                <Design/>
                <h3>4. Develop Stage</h3>
                <Develop/> 
			</div>
		);
	}
}

// function ControlledTabs() {
//     const [key, setKey] = useState('discover');
  
//     return (
//       <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
//         <Tab eventKey="discover" title="Discover">
//             <Discover/>
//         </Tab>
//         <Tab eventKey="define" title="Define">
//             <Define/>
//         </Tab>
//         <Tab eventKey="design" title="Design">
//             <Design/>
//         </Tab>
//         <Tab eventKey="develop" title="Develop">
//             <Develop/>
//         </Tab>
//       </Tabs>
//     );
//   }
  
 
export default Fudger