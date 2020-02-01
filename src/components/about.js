import React from 'react'
import '../css/about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faBriefcase} from "@fortawesome/free-solid-svg-icons";
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
import profile from '../pictures/me-tree.JPG'
class About extends React.Component {
	render() {
		return (
			<div className='about'> 
            <div className="about-icons">
                <h2 >
                    About Me
                    <span>
                    <a target="_blank" href="https://www.upwork.com/o/profiles/users/~0177013edc448c881d/" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/carleenthio/" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a target="_blank" href="http://github.com/carleenthio" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    </span>
                </h2>
                
            </div>
                <div class="parent">
                    <div class="div1"> 
                        <h3>Who am I?</h3>
                        <p> <span className="details">Location:</span> Toronto, Canada </p>
                        <p> <span className="details">Background:</span> A recent Cognitive Science and Linguistic graduate from the University of Toronto</p>
                        <p>
                            I've always enjoyed doing and trying out different things. This includes
                            programming projects, along with several research projects 
                            (one of them being a UX project).
                        </p>
                        <p>
                        <span className="details">Goal:</span> I would love to be responsible and create enjoyable products for people 
                            who want them. 
                        </p>
                        <p> 
                            And I find that the best way to create that experience
                            is to understand the interactions between the user and the product.
                            If I can make using a product easier or more effortless and enjoyable, 
                            I consider that a job well done.
                        </p>
                        
                    </div>
                    <div class="div2"> 
                        <img className='profile' src={profile} alt="I'm hugging a tree"/>    
                    </div>
                    <div class="div3">
                        <h3>Current Projects</h3>
                        <ul> 
                            <li>Content writing for TypeMaster, Finland <span className="note">Freelance </span></li>
                            <li>Content writing for a UX portfolio <span className="note">Freelance </span></li>
                            <li>A UX design project, targeting the plant and trade community </li>
                            <li>Web design for a blog. Building on wordpress </li>
                        </ul>
                        
                    </div>
                    <div class="div4"> 
                        <h3>What else do I do?</h3>
                        <p>In my spare time, I enjoy doing a lot of different things including hiking and boardgames.
                            Here are the top 3 things that I have been enjoying:</p>
                            <strong>Something crafty.</strong> This includes:
                                    <ul>
                                        <li>Cross stitching</li>
                                        <li>Creating toys for the birds</li>
                                        <li>Building a paludarium</li>
                                        <li>Waterscaping my fish tank</li>
                                        <li>Building moss poles for plants</li>
                                        <li>And other things</li>
                                    </ul>
                          </div>  
                        
                                <div class="div5">        
                                    <strong> My birds.</strong> They hang out with me outside the cage. 
                                        And when it's not cold, you might even catch Valkyrie and I going for walks downtown!
                                
                                    <div className='bird-container'>
                                        <img className='birds' src={birdie} alt="Blue budgie"/>
                                        <img className='birds' src={valkyrie} alt="Yellow-sided greencheek"/>
                                        <img className='birds' src={jammy} alt="Yellow budgie"/>
                                        <p className='bird-p'>Birdie. Troublemaker. Broody.</p>
                                        <p className='bird-p'>Valkyrie. Dog in disguise.</p>
                                        <p className='bird-p'>Jammy. Won't leave you alone. Ever.</p>
                                    </div>
                                    </div>
                               
                                <div class="div6"> 
                                    <container>
                        
                                    <p> <strong>Plants.</strong> I'm a huge plant collector. Currently with at least 130 different species.
                                        The last picture alone had around 18 plants in it (which has now increased to 25). 
                                        An extensive amount of research has gone through meeting each plants requirements, 
                                        as well as finding a soil-free medium to grow them in 
                                        (in order to eliminate bug problems). 
                                    </p>
                                    <p> At the moment, they're in a semi-hydroponic setup using LECA (light expanded clay aggregate)
                                        as my medium, and three solution additives to ensure they meet the water parameters and
                                        get all the nutrients needed to stay healthy. Or four if I'm acclimating them to the new setup.
                                    </p>
                                    </container>
                                    <container className='bird-container'>
                                        <img className='plant' src={p1} alt="Bearpaw plant"/>
                                        <img className='plant' src={p4} alt="Stephania erecta"/>
                                        <img className='plant' src={p2} alt="Prince of Orange"/>
                                        <img className='plant' src={p3} alt="monstera peru"/>
                                        <img className='plant' src={p5} alt="var. hindu rope"/>
                                        <img className='plant' src={p6} alt="var. alocasia odora"/>
                                        <img className='plant' src={p7} alt="Ice plant"/>
                                        <img className='plant' src={p8} alt="jewel orchid"/>
                                        <img className='plant' src={p10} alt="bunny ear succulent"/>
                                        <img className='plant' src={p9} alt="plant shelf"/>
                                    </container>
                                    </div>
                </div>
                {/* <hr align='left'/> */}
                </div>
		);
	}
}
export default About