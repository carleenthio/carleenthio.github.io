import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import '../../css/projects.css'
import ReactPlayer from 'react-player'


import { Player } from 'video-react';
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

        </div>
    )
}

export default Design;