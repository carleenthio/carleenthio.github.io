import React from 'react'
import '../../css/projects.css'
import ReactPlayer from 'react-player'
// images
import home  from '../../pictures/fudger/homepage.png'
import grocery  from '../../pictures/fudger/fudger-grocery.png'
import inventory  from '../../pictures/fudger/fudger-inventory.png'
import additional  from '../../pictures/fudger/fudger-additionals.png'
import paperAdd  from '../../pictures/fudger/paper-add.JPG'
import paperGrocery  from '../../pictures/fudger/paper-grocery.JPG'
import paperInventory  from '../../pictures/fudger/paper-inventory.JPG'
function Design() {
    return(
        <div className='design'>
            <p> This stage took the bulk of our effort, consisting of a low fidelity (paper) prototype and a high fidelity prototype (with 3 iterations). 
            Each prototype was followed by a usability test to help us gain a 
            deeper understanding through both qualitative and quantitative 
            analysis, which included: observing, receiving feedback, 
            and timing task completion.</p>

           
                
                <h2> Design I: Low-Fidelity Paper Prototype</h2>
                
                <p>
                    While there are several necessary features we decided on. 
                    I added a couple more in my low-fidelity prototype such as: 
                    <ul>
                        <li><p><strong>Automatic data entry</strong> by taking a picture of the receipt to combat busyness or laziness</p></li>
                        <li><p><strong>Recipe finder</strong> that automatically removes used inventory items based on the recipe </p></li>
                        <li><p><strong>Targeted recipe finder</strong> to find recipes containing the expiring product</p></li>
                        <li><p><strong>Allow grocery sublists</strong> to reduce cognitive load and organize cooking ideas </p></li>
                        <li><p><strong>Generate approximate expiry dates</strong> to combat laziness and allow gentle reminders to use products </p></li>
                        <li><p><strong>Fact of the Day</strong> to bring awareness to shopping habits and business tricks which leads to over-purchasing </p></li>
                    
                    </ul>
                </p>
                <img className='design-process' alt="The Inventory page of the paper prototype" src={paperInventory} width="70%"/>
                <img className='design-process' alt="How to add items through the app" src={paperAdd} width="70%"/>
                <img className='design-process' alt="The grocery page of the paper prototype" src={paperGrocery} width="70%"/>
                
                <h4>Result</h4>
                <p>
                    Below is one of the recorded test sessions.
                </p>
                <span className='wrapper'>
                    <ReactPlayer className='player' width="80%" height="400px" url='https://youtu.be/lnwCgkgHoTg' />
                </span>
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
                
         
            <h2>Design II: High-fidelity Prototype</h2>
            <p>
                At the end of the converging stage of the prototype, where the team looked at
                what features to include, we designed the <strong>wireframe</strong>. And from there
                we built the first version of our high-fidelity prototype.
            </p>
            <p>
                After version 1.0, we ran a usability 
                test with a few UX experts and fellow classmates and updated the prototype from their feedback. 
            </p>
            <h5>Result</h5>
                    <p>
                        There are three main screens:
                        <ol> 
                            <li>
                                Homepage: Food expiration tracker
                                <p> Feature -> Gamification, tips and tricks</p>
                            </li>
                            <li>
                                Inventory: Keep track of what you have at home
                                <p>Feature -> Search by category, add item, expiration colour legend</p>

                            </li>
                            <li>
                                Grocery: A grocery list
                                <p>Feature -> Creates a list, ability to move bought item into inventory (no need for manual addition)</p>

                            </li>
                        </ol>
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