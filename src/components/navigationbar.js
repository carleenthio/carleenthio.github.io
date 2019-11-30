import React from 'react'
import { BrowserRouter as Router, Link} from "react-router-dom"
import  {Navbar, Nav} from 'react-bootstrap'
import '../css/navigationbar.css'


class Navigationbar extends React.Component {
  	render() {
		return (
		<Navbar style={{ width : "100%"}} bg="transparent" expand="md" collapseOnSelect>
			<Navbar.Brand className="brand" href="/mainpage">Sharene Carleen Thio</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" >
				<Nav className="ml-auto" >
						<Nav.Link eventKey="1" as={Link} to="/projects" className="nav-links"><i class="fas fa-camera"></i>Projects</Nav.Link>
						<Nav.Link eventKey="2" as={Link} to="/about" className="nav-links">Resume </Nav.Link>
						<Nav.Link eventKey="3" as={Link} to="/about" className="nav-links">About Me </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>	
		);

	}
}
// ('.navbar-collapse a').click(function(){
//     (".navbar-collapse").collapse('hide');
// });
export default Navigationbar