import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/breadcrumb.css'
import '../css/projects.css'
import { Table } from 'react-bootstrap'

class BrickBreaker extends React.Component {    
	render() {
		return (
			<div className='brick-breaker'>
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Brick Breaker</li>
                    </ol>
                </nav>

                {/* page content */}
                <Container>
                    <h3>Brick Breaker: A Shot at Game Development</h3>
                    <Table className='info-sheet'>
                        <th>
                            Quick Info Sheet
                            
                        </th>
                        <tr>
                            <td>
                                <ul>
                                    <li>Started on June 2016. Ended that June too (with minor updates in 2018 and 2019).</li>
                                    <li>Built using Unity version 2018.3.12f1. Currently hosted by SIMMER.io. </li>
                                    <li>Coded in C#.</li>
                                </ul>
                            </td>
                        </tr>
                    </Table>
            
                    <div>
                        <p>This was not the first game I created in Unity. The first was a little text-based adventure, just to get acquainted with Unity.
                            After that, this game was made for the purpose of exploring Unity deeper. Unfortunately, it's as far as I have explored in Unity. 
                        </p>
                        {/* <p>I also spent too much time on the visual, before giving up after selecting font and colour of the title page.
                        </p> */}
                        <p>It was never meant to be a full game, but instead <span> a proof of concept.</span>
                            Therefore, it lacks certain features, which is not limited to:
                            <ul>
                                <li>An introduction/explanation of the game</li>
                                <li>Bricks changing colour/texture to signify how close it is to being destroyed</li>
                                <li>A mute option (apart from clicking away from the game)</li>
                                <li>A level selector. i.e. a progress saver</li>
                                <li>More than 3 levels</li>
                                <li>Anything that would make it more interesting, like a power-up</li>
                                <li>A scoreboard</li>
                            </ul>
                            These are definitely features that could be implemented in the future if the itch for game dev returns.
                        </p>
                    </div>
                    <div className='game-div'> 
                        <p>Feel free to try it out!</p>
                        <iframe src="https://i.simmer.io/@games3211/brick-breaker" className='game'></iframe>                  
                    </div>
                    
                    </Container>
			</div>
		);
	}
}
export default BrickBreaker