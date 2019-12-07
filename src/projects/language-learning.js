import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import lang from '../pictures/lang-result.jpg'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink} from "@fortawesome/pro-duotone-svg-icons"

class LanguageLearning extends React.Component {
	render() {
		return (
			<div className="language-learning">
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Language Learning</Breadcrumb.Item>
                </Breadcrumb>
                {/* page content */}
                <Container>
                    <h3>
                        <a href='https://drive.google.com/file/d/1CCIr4wBdrV7q_IgaY9wVkWt0chnfk4Os/view' target="_blank" rel='noopener'> 
                        Language Learning Strategized
                        <FontAwesomeIcon style={{paddingLeft:"5px"}} className="define-icon" icon={faLink}/>
                        </a>
                    </h3>

                    <h5>Problem</h5>
                    <p>Vocabulary expansion is difficult (learners often fail to retrieve words), 
                        mostly due to a mismatch of the learner to learning strategy.
                        So we aim to help develop a physical solution with cognitive reasoning for vocabulary expansion.</p>
                    
                    <h5>Justification</h5>
                    <p>
                        <ol>
                            <li>Eliminate barriers to language learning that carry serious consequences for many groups of people. </li>
                            <li>The inability to communicate across fields results in loss of information, hurting the field's developement.</li>
                            <li>Reduce the overall time needed to study a language in order to enter 
                                the workforce is beneficial for many multicultural communities, 
                                which include large numbers of immigrants. </li>
                        </ol>
                    </p>

                    <h5>Solution</h5>
                    <p>Our proposed solution involves matching an efficient learning strategy, based on cognitive processes,
                        to the different levels of language learners. 
                     </p>
                     <p> For example, teaching a beginner more vocabulary by placing the 
                         new words in complex sentences makes it harder to learn the word, 
                         as it results in a higher cognitive load from trying to parse the 
                         meaning of the sentence. This makes it an inefficient learning
                          strategy, but only for beginners. For more proficient learners, this 
                          could be more helpful by providing a more specific example of the environment 
                          this word could occur in.
                    </p>
                    <p>
                        Here are the results we compiled:
                        <img src={lang} alt="Chart of main strategies used to recall words
                        " width='80%'>
                        </img>
                    </p>

                    <h5>Method and Research</h5>
                    <p>
                        These are the three methods we used to gather data:
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Field Study</th>
                                <th>Interview (Informal)</th>
                                <th>Survey</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Done in language cafes</p>
                                        <p>
                                            Notes taken on learner’s behaviour and environment
                                        </p>
                                        <p>
                                            6 hours of observation was collected of multiple languages
                                            <ul>
                                                <li>Chinese </li>
                                                <li> Spanish</li>
                                                <li>French </li>
                                                <li> Japanese</li>
                                                <li> German</li>
                                                <li>English </li>
                                            </ul>
                                        </p>
                                    </td>
                                    <td>
                                    <p>Describe techniques used</p>
                                        <p>
                                            What they found challenging about 
                                            word-recollection
                                        </p>
                                    </td>
                                    <td>
                                    <p>10 questions</p>
                                    <p>
                                        Given out in the language cafes, Language Exchange 
                                        facebook groups
                                    </p>
                                    <p>
                                        Gauge learners’ demographic profiles and inquire about 
                                        their personal techniques for remembering words
                                    </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h6><strong>Environmental Scan</strong></h6>
                    <p> Apps that attempt to solve the issue:
                        <ul>
                            <li>Duolingo</li>
                            <li>Busuu</li>
                            <li>Drop</li>
                            <li>Tinycards</li>
                        </ul>
                        Most of these apps are backed by research and do well.
                        And while they have overlapping strategies, there is a difference in how they try to make language learning more efficient. 
                        For example, Drop concentrates on vocabulary learning using flashcards. 
                        Duolingo and Tinycard introduce basic words and build up the learner’s word bank. 
                        Busuu has a strategy closely aligned to our original proposed approach of context-based learning. 
                        Sadly, it might have a very steep learning curve for beginners, which could intimidate new learners.
                    </p>
                    </p>

                    <h5>Problems and Pitfalls</h5>
                    <p>
                        <ul>
                            <li>No good distinction of language learning proficiencies.
                                One can be good at reading, but not speaking</li>
                            <li>People still have different individual learning style that might 
                                not be accommodated by the solution </li>
                            <li>How much attention and cognitive load they were able to allocate during the session </li>
                            <li>Translating word by word causes slow word retrieval</li>
                        </ul>
                    </p>
                    <p> <strong>Notes:</strong> This project was also highlighting the correlation between our cognitive activity,
                          setting, and  system. It mainly covers the process of problem-solving
                         which involves an initial state (having no vocabulary) and a goal state (successful word retrieval), 
                         and the actual process of going through 
                         the search space.
                    </p>

                </Container>
			</div>
		);
	}
}
export default LanguageLearning