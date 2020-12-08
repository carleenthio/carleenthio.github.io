import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import { Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class BrickBreaker extends React.Component {    
	render() {
		return (
			<div className='brick-breaker'>
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Brick Breaker</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container>
                    <h1>Block Breaker: A Shot at Game Development</h1>
                    <Table className='info-sheet'>
                        <th>
                            Quick Info Sheet
                            
                        </th>
                        <tr>
                            <td>
                                <ul>
                                    <li>Bulk of the work was done in June 2016 with minor updates in 2018 and 2019.</li>
                                    <li>Built using Unity version 2018.3.12f1. Currently hosted by SIMMER.io.</li>
                                    <li>Coded in C#.</li>
                                </ul>
                            </td>
                        </tr>
                    </Table>
            
                    <div>
                        <p>
                            BlockBreaker is my second project in Unity. 
                            It was used to deepen my knowledge beyond my first attempt 
                            - a turn-based text adventure.</p>
                    
                        <p>It was never meant to be a full game, but instead <span> a proof of concept. </span>
                             Therefore, it lacks certain features, which are not limited to:
                            <ul>
                                <li>An introduction/explanation of the game</li>
                                <li>Brick colour and texture change to indicate breaking progress</li>
                                <li>A mute option (apart from clicking away from the game)</li>
                                <li>A level selector (i.e. a progress saver)</li>
                                <li>More than 3 levels</li>
                                <li>Flavour features such as power-ups</li>
                                <li>A scoreboard</li>
                            </ul>
                            These are definitely features that could be implemented in the future if the itch for game development returns.
                        </p>
                    </div>
                    <div className='game-div'> 
                        <p>Feel free to try it out! </p>
                        <p>
                        And <a href = "mailto: carleen.thio@gmail.com"> email me </a> if you passed all the levels!
                        </p>
                        <iframe src="https://i.simmer.io/@games3211/brick-breaker" className='game' title="Brick Breaker" allowFullScreen> </iframe>                  
                    </div>
                    
                    </Container>
			</div>
		);
	}
}
export default BrickBreaker