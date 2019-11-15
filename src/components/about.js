import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import '../css/about.css'

// import images
import birdie from '../pictures/birdie.jpg'
import valkyrie from '../pictures/valkyrie.jpg'
import jammy from '../pictures/jammy.JPG'

class About extends React.Component {
	render() {
		return (
			<div className='content'> 
				<p> I'm Carleen and this is my page! </p>
                <p>A recent Cognitive Science and Linguistic graduate from University of Toronto (June 2019). 
                Currently located in Toronto, Canada. </p>
                <p>I have always enjoyed different things, as will be evidenced by the things I do in my spare time.
                Something UX
                </p>
				<p>In my spare time, while there's a bunch of interest, <em>some things never change</em>. Here's the top 3 things that hasn't changed in a long time:</p>
                
                <container className='bird-container'>
                    <img className='birds' src={birdie}/>
                    <img className='birds' src={valkyrie}/>
                    <img className='birds' src={jammy} />
                    <p className='bird-p'>Birdie. Very original name, I know. Troublemaker.</p>
                    <p className='bird-p'>Valkyrie. <em>My</em> shoulder bird. A dog in disguise.</p>
                    <p className='bird-p'>Jammy. Won't leave you alone. Ever.</p>
                </container>
                <p> </p>

                <p>1. Hanging out with my birds. When it's not cold, you might even catch Valkyrie and I going for walks downtown!</p>
                <p>2. Plants. I'm a huge plant collector. Currently with at least 130 different species.</p>
                <p>3. Something crafty. It could be crocheting one day, and maybe building a bird play gym another</p>
                    
            </div>
		);
	}
}
export default About