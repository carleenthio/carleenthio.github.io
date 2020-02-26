import React from 'react'
import notFound from '../pictures/404.svg'
class NotFound extends React.Component {   
	render() {
		return (
			<div className='not-found'>
                <img className='profile' src={notFound} alt="Error 404: Page Not Found"/>   
				<a className="email-me-404"
				href = "mailto:test@example.com?subject=Found a 404!&body=I found an error on [page] while [what led you here]!">Help Bot</a>
			</div>
		);
	}
}
export default NotFound