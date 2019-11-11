import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
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

                <Container className='grid-container'>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                    <p>This is project fudger</p>
                </Container>
			</Container>
		);
	}
}
export default Fudger