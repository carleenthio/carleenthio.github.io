import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import '../../css/projects.css'

function Design() {
    return(
        <div className='design'>
            <p> This stage took the bulk of our effort, consisting of a paper prototype 
            (low fidelity), and a high fidelity prototype (with 3 iterations). 
            Each prototype was followed by a usability test to help us gain a 
            deeper understanding through both qualitative and quantitative 
            information as the test involves observing, and talking to the 
            testers afterwards, while also timing how long it took them to
            finish each task.></p>
            <h3>My Paper Prototype</h3>
            <h3>High-fidelity Prototype</h3>
        </div>
    )
}

export default Design;