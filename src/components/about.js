import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import '../css/about.css'

// import images
import birdie from '../pictures/birdie.jpg'
import valkyrie from '../pictures/valkyrie.jpg'
import jammy from '../pictures/jammy.JPG'
import p1 from '../pictures/p1.JPG'
import p2 from '../pictures/p2.jpg'
import p3 from '../pictures/p3.JPG'
import p4 from '../pictures/p4.jpg'
import p5 from '../pictures/p5.JPG'
import p6 from '../pictures/p6.JPG'
import p7 from '../pictures/p7.JPG'
import p8 from '../pictures/p8.JPG'
import p9 from '../pictures/p9.JPG'
import p10 from '../pictures/p10.JPG'

class About extends React.Component {
	render() {
		return (
			<div className='content'> 
                <h3>Who am I?</h3>
                <p>A recent Cognitive Science and Linguistic graduate from University of Toronto, 
                    who has always enjoys doing and trying out different things
                
                </p>
                <h3>Where am I?</h3>
                <p>Currently located in Toronto, Canada </p>
                <h3>How am I?</h3>
                <p>???</p>
                <h3>What else do I do?</h3>
				<p>In my spare time, I enjoy doing a lot of different things. Here's the top 3 things that I have been enjoying:</p>
                    <ol>
                        <li>        
                            <p>My birds. They hang out with me outside the cage. 
                                And when it's not cold, you might even catch Valkyrie and I going for walks downtown!
                                Sometimes I'm building them new toys, creating a new meal plan for them, or teaching them new tricks.
                            </p>
                            <container className='bird-container'>
                                <img className='birds' src={birdie}/>
                                <img className='birds' src={valkyrie}/>
                                <img className='birds' src={jammy} />
                                <p className='bird-p'>Birdie. Troublemaker. Broody.</p>
                                <p className='bird-p'>Valkyrie. <em>My</em> shoulder bird. Dog in disguise.</p>
                                <p className='bird-p'>Jammy. Won't leave you alone. Ever.</p>
                            </container>
                        </li>
                        <li>
                            <p> Plants. I'm a huge plant collector. Currently with at least 130 different species.
                                The last picture alone had around 18 plants in it (which has now increased to 25). 
                                An extensive amount of research has gone through meeting each plants requirements, 
                                as well as finding a soil-free medium to grow them in 
                                (in order to eliminate bug problems). 
                            </p>
                            <p> At the moment, they're in a semi-hydroponic setup using LECA (light expanded clay aggregate)
                                 as my medium, and three solution additives to ensure they meet the water parameters and
                                 get all the nutrients needed to stay healthy. Or four if I'm acclimating them to the new setup.
                            </p>
                            <container className='bird-container'>
                                <img className='plant' src={p1}/>
                                <img className='plant' src={p4}/>
                                <img className='plant' src={p2} />
                                <img className='plant' src={p3} />
                                <img className='plant' src={p5} />
                                <img className='plant' src={p6} />
                                <img className='plant' src={p7} />
                                <img className='plant' src={p8} />
                                <img className='plant' src={p10} />
                                <img className='plant' src={p9} />
                            </container>
                        </li>
                        <li>
                        <p> Something crafty. It could be crocheting one day, and maybe building a paludarium another</p>
        
                        </li>
                    </ol>
                <p>But there is also environment/season dependent activities, like hiking, and boardgames </p>
            </div>
		);
	}
}
export default About