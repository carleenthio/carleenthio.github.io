import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/breadcrumb.css'

class Fudger extends React.Component {
	render() {
		return (
			<Container>
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Füdger</li>
                    </ol>
                </nav>

                <Container>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    <h2>What better way to help the environment than individually reduce food waste?</h2>
                    
                </Container>
			</Container>
		);
	}
}
export default Fudger