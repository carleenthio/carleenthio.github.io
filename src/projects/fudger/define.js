import React from 'react'
import '../../css/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie,faUserNurse, faHourglassHalf} from "@fortawesome/pro-duotone-svg-icons"
import {faBook,faRunning} from "@fortawesome/pro-light-svg-icons"
function Define() {
    return(
			<div className='define'>
                <p>This stage was the beginning of fleshing out our design, 
                identifying what is required, and how it should function. 
                In our short form creative brief we identified 2 key persona and 
                3 key scenarios, as well as outlining our objectives and key principles. 
                A task analysis hierarchy was also created on <a href="https://www.draw.io" target="_blank" rel="noopener noreferrer">draw.io</a> 
                &nbsp;to outline how a user would 
                complete specific tasks. </p>

                <h4>Personas</h4>
                <p>
                    Our prototype was designed with the following hypothetical representation of our users in mind. 
                </p>
                <table className="personas">
                    <tr>
                        <td className="persona-img">
                          <FontAwesomeIcon className="define-icon" icon={faUserNurse}/>
                        </td>
                        <td>Alice Homemaker (47 years old, main grocery shopper for a family of 5) 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td> 
                            <ul>
                                <li> Works a 9 to 5 job </li>
                                <li>Lives with her domestic partner, mother, 
                                    and 2 children (aged 17 and 22)</li>
                                <li> Busy schedule; goes to gym 3 times a week and spends time 
                                     amongst her various hobbies</li>
                                <li> Very conscious of how much food her family is wasting and 
                                feels guilty when food ends up in the bin
                                </li>
                                <li>
                                Tries to prepare meals for her family, but 
                                occasionally unsure of how much food to buy or 
                                make as her eldest child eats out during the week sporadically
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <table className="personas">
                    <tr>
                        <td className="persona-img">
                        <FontAwesomeIcon icon={faUserTie} className="define-icon"/>
                        </td>
                        <td> Conscious Chad (25 years old, bachelor, Web designer) 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td> 
                            <ul>
                                <li> The type of person who only buys what he needs </li>
                                <li> Always seems to go to the grocery store</li>
                                <li> Lives alone </li>
                                <li> Works from home  </li>
                                <li> Always cooks for his dates </li>
                                <li> Always aware of his budget</li>

                            </ul>
                        </td>
                    </tr>
                </table>
                

                <h4> Scenarios</h4>
                <p>
                    The scenarios created for this project were used to help the team
                    keep in mind what goals we are trying to achieve. It provides us
                    with an idea of what might motivate the user when 
                    they interact with our product.
                </p>
                <div className="div-scene">
                    <FontAwesomeIcon icon={faHourglassHalf} className="define-scene"/>
                    <p className="odd-one">
                    Alice is going home from work, but the store closes in an hour 
                    and she forgot her grocery list at home.  
                    </p>
                </div>

                <div className="div-scene">
                    <FontAwesomeIcon icon={faBook} className="define-scene"/>
                    <p>
                    Chad isn’t sure what to make for his date this week. 
                    He wants to try a new recipe to really impress her with his cooking skills
                    and show her he is a renaissance man. Chad knows he’ll have to do
                    some grocery shopping to get ingredients, but he doesn’t want to buy 
                    a lot of unnecessary ingredients on top of the food he already has at home. 
                    </p>
                </div>

                <div className="div-scene">
                    <FontAwesomeIcon icon={faRunning} className="define-scene"/>
                    <p>
                    Chad is in a rush and just went out to the grocery store to buy some
                    ingredients, but midway through cooking, he realizes he forgot something.
                    So he goes back to the store to pick up the item and saw another item he 
                    needed, but is unsure if he already bought it earlier.
                    </p>
                </div>
                
			</div>
    )
}

export default Define;