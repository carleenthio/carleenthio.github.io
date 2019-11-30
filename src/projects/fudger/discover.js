import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../../css/breadcrumb.css'
import '../../css/projects.css'

function Discover() {
    return(
        <div className='discover'>
            <p>In the earliest stage, we did preliminary research on food waste. 
                While food waste occurs at every stage (production, transportation, supplier, 
                consumer), we decided to tackle the consumer stage. And once again,
                    there were several stages in the consumer stage and decided that prevention 
                of excess food was the way to go. Therefore, we narrowed the problem 
                space to help reduce food waste within consumers by helping 
                them reduce overbuying food during their grocery runs.
            </p>
            <p>
                Once we identified out goal, we conducted primary user research. 
            </p>
            <p> This included the field research, interview and questionnaire. 
                For each of these, two members were in charge but we prepped
                 the questions together as a team.
            </p>
        </div>
    )
}

 
export default Discover