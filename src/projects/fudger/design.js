import React from 'react'
import '../../css/projects.css'
import ReactPlayer from 'react-player'
// images
import home  from '../../pictures/homepage.png'
import grocery  from '../../pictures/fudger-grocery.png'
import inventory  from '../../pictures/fudger-inventory.png'
import additional  from '../../pictures/fudger-additionals.png'
import paperAdd  from '../../pictures/paper-add.JPG'
import paperGrocery  from '../../pictures/paper-grocery.JPG'
import paperInventory  from '../../pictures/paper-inventory.JPG'
function Design() {
    return(
        <div className='design'>
            <p> This stage took the bulk of our effort, consisting of a low fidelity (paper) prototype and a high fidelity prototype (with 3 iterations). 
            Each prototype was followed by a usability test to help us gain a 
            deeper understanding through both qualitative and quantitative 
            analysis, which included: observing, receiving feedback, 
            and timing task completion.</p>

            <h3> My Low-Fidelity Paper Prototype</h3>
                <hr></hr>
                <h5>The Paper Prototype</h5>
                <p>
                    While there are several necessary features we decided on. 
                    I added a couple more in my low-fidelity prototype such as: 
                    <ul>
                        <li>
                            Taking a picture of a receipt and have the bought items entered automatically into the inventory
                            <div>
                                <b>Reason:</b> Some people are too busy and/or lazy to input what they bought, especially if it’s a long list
                            </div>
                        </li>
                        <li>
                            Introduce a recipe finder that automatically removes used items from the inventory based on the recipe
                            <div>
                                <b>Reason:</b> Combat forgetfulness or laziness
                            </div>
                        </li>
                        <li>
                            Allow recipe finder to be used on specified products
                            <div>
                                <b>Reason:</b> Help use up expiring products
                            </div>
                        </li>
                        <li>
                            Allow grocery list to be organized into sublists
                            <div>
                                <b>Reason:</b> To reduce cognitive load and organize cooking ideas
                            </div>
                        </li>
                        <li>
                            Generate approximate dates for product expiration
                        </li>
                        <li>
                            Fact of the Day
                            <div>
                                <b>Reason:</b> Bring awareness of shopping habits and business tricks which
                                usually lead to over-purchasing
                            </div>
                        </li>
                    </ul>
                </p>
                <img className='design-process' alt="The Inventory page of the paper prototype" src={paperInventory} width="70%"/>
                <img className='design-process' alt="How to add items through the app" src={paperAdd} width="70%"/>
                <img className='design-process' alt="The grocery page of the paper prototype" src={paperGrocery} width="70%"/>
                
                <h5>Result</h5>
                <p>
                    Below is one of the recorded test sessions.
                </p>
                <ReactPlayer url='https://youtu.be/lnwCgkgHoTg'/>
                <p>User feedback and observations:
                    <ul>
                        <li>
                            Search bar needs to be more obvious
                        </li>
                        <li>
                            Require an indicator whether a change has been saved
                        </li>
                        <li>
                            Tooltip. Planned but not implemented in paper prototype
                        </li>
                        <li>
                            Quantity of item left for liquids such as milk (full, 3/4 left, half full, etc)
                        </li>
                        <li>
                            Allow item barcode to be scanned 
                        </li>
                        <li>
                            "Use at own risk” notice for the generated expiry dates
                        </li>
                        <li>
                            Users knew how to move the grocery items around and swipe left to completely delete them
                        </li>
                    </ul>
                </p>
                
            <h3>High-fidelity Prototype</h3>
            <hr/>
            <p>
                At the end of the converging stage of the prototype, where the team looked at
                what features to include, we designed the <strong>wireframe</strong>. And from there
                we built the first version of our high-fidelity prototype.
            </p>
            <p>
                After version 1.0, we ran a usability 
                test with a few UX experts and fellow classmates and updated the prototype from their feedback. 
            </p>
            <p>
                Below is the progression of changes made in the hi-fi prototype
                based on feedback and observations.
            </p>
            <img className='design-process' alt="Changes made in homepage" src={home} width="100%"/>
            <p>
                Motivation and Changes in the Homepage
                <ol>
                    <li>
                        Colours in the table were confusing 
                        -> Remove the colours
                    </li>
                    <li>
                        Too many items in the table 
                        -> Only show the items that need to be used up soon 
                    </li>
                    <li>
                        Unclear which page they are on 
                        -> Highlight the active tab  
                    </li>
                    <li>
                        Added gamification (expanded later on)
                    </li>
                </ol>
            </p>

            <img className='design-process' alt="Changes made in inventory" src={inventory} width="100%"/>
            <p>
                Motivation and Changes in the Inventory 
                <ol>
                    <li> 
                        "Add item" button was hard to find
                        -> Make it a different shape and colour than the general scheme of the app
                    </li>
                    <li>
                        High possibility to accidentally add/subtract item amount 
                        -> Have to click image to change quantity
                    </li>
                    <li>
                        Search bar unclear 
                        -> Add placeholder text
                    </li>
                </ol>
            </p>

            <img className='design-process' alt="Changes made in grocery page" src={grocery} width="100%"/>
            <p>
                Motivation and Changes in the Grocery
                <ol>
                    <li>
                        Users confused on what to input 
                        -> Changed placeholder text (From “List name” to “Title”)
                    </li>
                    <li>
                        Make list was primary task, not a secondary task 
                        -> Add the option somewhere less distracting
                    </li>
                </ol>
            </p>

            <img className='design-process' alt="Changes made for additional features" src={additional} width="100%"/>
            <p>
                Additional Changes
                <ol>
                    <li>
                    Tooltip:
                        <p>
                        Ensured new users will not get confused. 
                        Decreased word count
                        </p>
                    </li>
                    <li>
                    Gamification:
                    <p>
                        Gave users basic rewards to redeem on gift cards
                    </p>
                    </li>
                </ol>
            </p>
        </div>
    )
}

export default Design;