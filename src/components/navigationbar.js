import React from 'react'
import { BrowserRouter as Router, Link} from "react-router-dom"
import  {Navbar, Nav} from 'react-bootstrap'
import '../css/navigationbar.css'


class Navigationbar extends React.Component {
  	render() {
		return (
		<Navbar bg="transparent" expand="md" >
			<Navbar.Brand className="brand" href="/mainpage">Sharene Carleen Thio</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" >
				<Nav className="ml-auto">
					<Link to=" /mainpage" className="nav-links">About Me </Link>
					<Link to="/projects" className="nav-links">Projects</Link>
					<Link to="/Hobbies" className="nav-links">Hobbies</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>	
		
	
		);
	}
}

export default Navigationbar