import React from 'react'
import '../css/writing.css'
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button'

function Writing() {
    return(
        <div className='writing'>
            <h2>Writing</h2>
            <h5 className="sub-heading">Alongside my portfolio writings, here are a few more!</h5>
            <div className="writing-project-left">
                <LinkContainer to="/ux-writing" className="title-container"> 
                <h4 className="title">UX Writings [WIP]</h4>
                </LinkContainer>
                <p>
                    Error messages? Confirmation pages? Updates for your shipped package?
                    Buttons?!?
                    <br></br>
                    Someone wrote those. It's not always perfect 
                    but that's where UX writers come in. 
                    <br></br>
                    User research + Empathy + Conciseness
                </p>
                <LinkContainer to="/ux-writing" className="button-container">     
                    <p className="writing-button">
                    Explore
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </p>
                </LinkContainer> 
            </div>
            <div className="writing-project-right">
                <LinkContainer to="/ostara" className="title-container"> 
                    <h4 className="title">Ostara: The Devil</h4>
                </LinkContainer>
                <p>
                    An image prompt from the Ostara Tarot deck
                    <br></br>
                    Started out as a project to write a background story for the 78 cards in the deck 
                    <br></br>
                    Short Story + Fiction + Creative
                </p>
                <LinkContainer to="/ostara" className="button-container">     
                    <p className="writing-button">
                    Explore
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </p>
                </LinkContainer> 
            </div>
            <div className="writing-project-left">
                <LinkContainer to="/thesisdd" className="title-container"> 
                    <h4 className="title">Can Brainless Jellyfish Or Ants Be Self-Aware?</h4>
                </LinkContainer>
                <p>
                    A look into animal consciousness and self-awareness
                    <br></br>
                    Small excerpt from the 3500 word (excluding cover page and bibiliography) thesis
                    <br></br>
                    Thesis + Academic + APA Style
                </p>
                <LinkContainer to="/thesis" className="button-container">     
                    <p className="writing-button">
                    Explore
                    {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
                    </p>
                </LinkContainer> 
            </div>
        </div>
    )
}

export default Writing;