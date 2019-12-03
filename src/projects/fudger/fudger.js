import React from 'react'
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useState } from 'react'
import '../../css/projects.css'

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
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a  className="bread-crumb-a" href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Füdger</li>
                    </ol>
                </nav>

                <Container>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    {/* <h2>What better way to help the environment than individually reduce food waste?</h2> */}
                    <p>
                        Food waste is a global issue that has plagued modern society. It doesn't happen because of a 
                        decision at the kitchen bin, rather throughout the stages of food 
                        provisioning - including planning, shopping, storage, food preparation, cooking, 
                        gardening, dealing with leftovers and clearing up.
                    </p>
                    <p> 
                        The goal of our research is to better understand and distinguish those factors 
                        that cause individuals to waste food and create a solution that could help mitigate food waste.
                    </p>
                    

                    <h2>Objective</h2>
                    <hr/>
                    <p>Design a digital intervention that helps users streamline their grocery shopping 
                        experience by allowing users to be able to look up what food they have, 
                        effectively helping to mitigate over-purchasing food items. </p>

                    <h2>Result</h2>
                    <hr/>
                    <p>
                        Our prototype was built using Axure RP 9 and can be accessed
                        <a href="https://fqqihb.axshare.com/"> here</a>.
                        <img className='design-process' src={f1} width="100%"/>
                        There are three main pages:
                        <ol> 
                            <li>
                                Homepage : An overview of food user has the most
                                <p> Feature -> Gamification, tips and tricks</p>
                            </li>
                            <li>
                                Inventory: Keep track of what you have at home
                                <p>Feature -> Search by category, add item, info icon to understand what the colours mean</p>

                            </li>
                            <li>
                                Grocery: A grocery list
                                <p>Feature -> Creates a list, ability to move bought item into inventory (no need for manual addition)</p>

                            </li>
                        </ol>
                    </p>
                   
                    <h3>My Role</h3>
                    <p>This project was done with a team of 6 students from varying backgrounds. 
                        We all participated at every stage of the process. 
                        However, I was personally responsible for:
                        <ul>
                            <li> Conducting field-study research</li>
                            <li> Integrating and writing most of the information in the usability study report, 
                                specifically for the method, findings and implications section</li>
                            <li> Editing majority of the reports to ensure conformity, flow, and ease of read</li>
                            <li> Ensuring conformity in the prototype by checking alignments, fonts and colours</li>
                        </ul>
                    </p>

                    <h3> Scope and Constraints</h3>
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
                    <hr/>
                    {/* <div display="block" text-align="center"> */}
                        <img className='design-process' src={diamond} width="60%"/>
                    {/* </div> */}
                    <p> We used the <strong> Double Diamond design process</strong> on this project. 
                        This design process consist of diverging and converging ideas to get 
                        to a solution at four stages; discover, define, develop and deliver. 
                        Below are the methods we used at each stage.</p>

                        <img className='design-process' src={design} width="90%"/>
                       
                     <ControlledTabs />
                    <hr/>
                </Container>
			</div>
		);
	}
}

function ControlledTabs() {
    const [key, setKey] = useState('design');
  
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="discover" title="Discover">
            <Discover/>
        </Tab>
        <Tab eventKey="define" title="Define">
            <Define/>
        </Tab>
        <Tab eventKey="design" title="Design">
            <Design/>
        </Tab>
        <Tab eventKey="develop" title="Develop">
            <Develop/>
        </Tab>
      </Tabs>
    );
  }
  
 
export default Fudger