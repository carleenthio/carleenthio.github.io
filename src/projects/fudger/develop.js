import React from 'react'
import '../../css/projects.css'

function Develop() {
    return(
        <div className='develop'>
            <p>
                Since this project concentrated on the design process, we did not go 
                deep into the development stage as this would require the prototype 
                to be built. However, we did not ignore it completely. We briefly 
                ran through what would happen at this stage and worked on the 
                heuristic review.
            </p>
                
            {/* <p>
                This stage involved identifying problems at each screen and
                assigning a severity rating of the heuristic it failed to meet, 
                as well as providing recommendations to fix it.
            </p> */}
            <p>
                For this project, we used Nielsen's usability heuristics.
                The most violation was found in the homepage and grocery page.
            </p>
            {/* <p>
                It included problems such as:
                <br></br>
                - Adding new list button while creating a new list can be confused as adding item to current list.
                <br></br>
                -
            </p> */}
            {/* <p>
                We did the heuristic evaluation individually first before combining it
                into one. We found the most violation in the homepage and grocery page.
            </p> */}
        </div>
    )
}

 
export default Develop