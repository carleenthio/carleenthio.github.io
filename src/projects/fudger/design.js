import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import '../../css/projects.css'
import ReactPlayer from 'react-player'
import { Player } from 'video-react';

// images
import home  from '../../pictures/homepage.png'
import grocery  from '../../pictures/fudger-grocery.png'
import inventory  from '../../pictures/fudger-inventory.png'
import additional  from '../../pictures/fudger-additionals.png'

function Design() {
    return(
        <div className='design'>
            <p> This stage took the bulk of our effort, consisting of a paper prototype 
            (low fidelity), and a high fidelity prototype (with 3 iterations). 
            Each prototype was followed by a usability test to help us gain a 
            deeper understanding through both qualitative and quantitative 
            information as the test involves observing, and talking to the 
            testers afterwards, while also timing how long it took them to
            finish each task.</p>

            <h3> My Low-Fidelity Paper Prototype</h3>
                <hr></hr>
                <ReactPlayer url='https://youtu.be/lnwCgkgHoTg'/>
                <p>
                    While there are several necessary tasks/details we have decided on. 
                    I added a couple more in my low-fidelity prototype such as: 
                    <ul>
                        <li>
                            Taking a picture of a receipt and items placed automatically in inventory.
                            <div>
                                Reason: Some people are too busy to input what they got, especially if it’s a long list.
                            </div>
                        </li>
                        <li>
                        Introduce a recipe finder that automatically reduce the amount of ingredients from inventory
                            <div>
                            Reason: Combat forgetfulness or laziness. Help use up expiring products
                            </div>             
                        </li>
                        <li>
                            Allow grocery list to be organized into sublist
                            <div>
                            Reason: allow memory chunking, this will help users with
                            their cognitive load to keep in mind why and how much ingredients 
                            they need
                            </div>
                        </li>
                        <li>
                            Expiry date generator. Creates an approximate date it should be bad
                            based on the item and average longevity
                        </li>
                        <li>
                            Fact of the Day
                            <div>
                            Reason: bring awareness to shopping habits and business tricks which
                            usually leads to an individual to over purchase
                            </div>
                        </li>
                    </ul>
                </p>
                <h4>Result</h4>
                <p>These were inputs gathered from the participants or from watching </p>
                <ul>
                    <li>
                        Search bar needs to be more obvious
                    </li>
                    <li>
                        Require an indicator whether a change has been saved or 
                        if they need to manually click save
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
                        Use at own risk” notice for the generated expiry dates
                    </li>
                    <li>
                    Knew to swipe the grocery items around and that they 
                    could swipe left to completely delete it
                    </li>
                </ul>
            
            <h3>High-fidelity Prototype</h3>
            <hr/>
            <p>
                After the version 1.0 of the prototype was created, we ran a usability 
                test with a few UX experts and fellow classmates, and updated the prototype accordingly. 
                While generally some screens goes through one iterations, some has gone through three.
            </p>
            <p>
                These are the progression of changes made in the hi-fi prototype
                based on feedback and observations 
            </p>
            <img className='design-process' src={home} width="100%"/>
            <p>
                Motivation and Changes in the Homepage
                <ol>
                    <li>
                        Colours in the table were confusing 
                        -> Remove the colours
                    </li>
                    <li>
                        Too many items on the table 
                        -> Only show the items they needs to be used up soon 
                    </li>
                    <li>
                        Unclear which page they are on 
                        -> Highlighted which tab/page is active 
                        (this goes for the entire app, i.e all the other pages too)
                    </li>
                    <li>
                        Added gamification (expanded later on)
                    </li>
                </ol>
            </p>

            <img className='design-process' src={inventory} width="100%"/>
            <p>
                Motivation and Changes in the Inventory 
                <ol>
                    <li> 
                        Add item button was invisible (experts had difficulty finding it) 
                        -> Make it a different shape and colour than the general scheme of the app (rounded)
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

            <img className='design-process' src={grocery} width="100%"/>
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

            <img className='design-process' src={additional} width="100%"/>
            <p>
                Additional Changes
                <ol>
                    <li>
                    Tooltip: We added a tooltip to ensure new users will not get confused. 
                        <p>
                            At first, too many words. So now less words.
                        </p>
                    </li>
                    <li>
                    Gamification:
                    <p>
                        Gave users basic rewards such as Tim hortons card and Walmart gift card
                    </p>
                    </li>
                </ol>
            </p>
        </div>
    )
}

export default Design;