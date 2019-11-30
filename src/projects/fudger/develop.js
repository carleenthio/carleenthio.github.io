import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import '../../css/projects.css'

function Develop() {
    return(
        <div className='develop'>
            <p>Since this project concentrated on the design process, we did not go 
                deep into the development stage as this would require the prototype 
                to be built. However, we did not ignore it completely. We briefly 
                ran through what would happen at this stage and also worked on a 
                heuristic review of developing the product.</p>
                
            <p>This stage involved identifying problems at each screen and
                    assigning a severity rating of the heuristic it failed to meet, 
                    as well as providing recommendations to fix it.</p>
        </div>
    )
}

 
export default Develop