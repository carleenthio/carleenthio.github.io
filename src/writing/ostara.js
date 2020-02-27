import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/writing.css'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import card from '../pictures/ostara.jpg'

class Ostara extends React.Component {    
	render() {
		return (
			<div className='ostara'>
                <Breadcrumb>
                    <LinkContainer to="/writing">
                        <Breadcrumb.Item>Writing</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Ostara: The Devil</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container className="writing-content">
                <img className='ostara-img' src={card} alt="The Ostara card for the devil"/>
                <h1 className="writing-title"> Ostara: The Devil</h1>
                <p>“Specimen 19732…” he murmured softly under his breath, wings fluttering ever so lightly.</p>
                <p>He walked slowly to an empty spot on the shelf, looked closely at the two humans he had caught,  feeling of a wave of sadness and pity slowly swallowing him. It has taken him 3 long years to understand how to obtain them. A cloud of dust whooshed around as he set them down. He waved his hands around but the dust just passed through them.</p>
                <p>He stopped. Sighed. And looked around. The place has become a lot brighter than when he first arrived. Every specimen jar lit up as they are placed on the shelf. The yellow light emitting from them bounced off the dark green walls; it was bright and yet still so dark, and so dull, he thought to himself.</p>
                <p>Looking up the corridor, it seemed like a never-ending passage, he’s been here long enough to know that was not the case, but even so, at times it seems true. Slowly, he made his way back out, glancing at all the other specimens he had caught; a spider, a rabbit, some fireflies, mermaids. All of them banging the walls of their glass enclosure, desperate and hopeful to get out. He just shook his head, looked down at his feet and continued on his way.
                </p>            
                <p>With every step he took, a gust of dust stirred up and yet it also passes through him. He’s gotten numb from the weird feeling he gets when they pass through him. It used to bother him, but time made him feel indifferent. 
                </p>
                <p>“The exit is near,”  he thought to himself. He only knew because the mockingbird, the bat, the dragon and fairies are sitting quietly in their enclosure, motionless. Their wings have been clipped and they’ve given up long ago. Curious about their well-being, he moved closer.</p>
                <p>He tapped the dragon’s enclosure. It lifted its head ever so slightly before laying it back down, uninterested and unmotivated. He sighed, feeling defeated. As he moved away, his arm coat brushed against the dusty shelf and unsettled the dust. He looked wistfully at the dust particles permeating through his bones and freely floating away before breaking away his gaze and moving on.</p>
                <p>As he looked up, he saw the exit. There stood the shadow, always waiting, watching, and following from a distance. </p>
                <p>“Hello, Devil. You have failed once again. For your failure, a pegasus is required.” the shadow rasped.</p>
                <p>He looked at the shadow and gave a small nod, acknowledging his understanding of the task.</p>
                <p>“This is your last chance to try to catch dust of your remains and past. Fail this and you are done for good. I will see to that”</p>
                <p>Defeated, the Devil trudged past the shadow, took another glass enclosure and went on his way, watching the dust unsettle under his feet. </p>
                
                
                </Container>
			</div>
		);
	}
}
export default Ostara