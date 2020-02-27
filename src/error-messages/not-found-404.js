import React from 'react'
import notFound from '../pictures/404.svg'
import '../css/error.css'
class NotFound extends React.Component {   
	render() {
		return (
			<div className='not-found'>
                <img className='img-error' src={notFound} alt="Error 404: Page Not Found"/>   
					<div className="error-404-button">
                    <button >
					<a className="email-me-404"
					href = "mailto:test@example.com?subject=Found a 404!&body=I found an error on [page] while [what led you here]!">Help Bot</a>
		
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </button>
					</div>
            </div>
		);
	}
}
export default NotFound