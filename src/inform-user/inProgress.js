import React from 'react'
import forbidden from '../pictures/forbidden.svg'
class inProgress extends React.Component {    
	render() {
		return (
			<div className='in-progress'>
                <img className='profile' src={forbidden} alt="I'm hugging a tree"/>    
			</div>
		);
	}
}
export default inProgress