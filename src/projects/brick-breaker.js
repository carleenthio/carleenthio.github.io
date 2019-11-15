import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/breadcrumb.css'

class BrickBreaker extends React.Component {
	render() {
		return (
			<Container>
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Brick Breaker</li>
                    </ol>
                </nav>

                <Container>
                    <h3>Brick Breaker: A Shot in Game Development</h3>
                    <p>Project started on June 2016</p>
                    <p>Ended that June too. With minor updates in 2018 and 2019.</p>
                    <p></p>                    
                </Container>
			</Container>
		);
	}
}
export default BrickBreaker