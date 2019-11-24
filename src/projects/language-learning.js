import React from 'react'
import Table from 'react-bootstrap/Table'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/breadcrumb.css'
import lang from '../pictures/lang-result.jpg'

class LanguageLearning extends React.Component {
	render() {
		return (
			<div>
                <nav aria-label="breadcrumb" color='white'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Language Learning</li>
                    </ol>
                </nav>

                {/* page content */}
                <Container>
                    <h3>Language Learning Strategized</h3>
                    <p>A team of 4.</p>

                    <h5>Problem</h5>
                    <p>Vocabulary expansion is difficult (learners often fail to retrieve words), 
                        mostly due to a mismatch of learner to learning strategy.
                        So our aim is to help develop a physical solution with cognitive reasoning for vocabulary expansion.</p>
                    
                    <h5>Justification</h5>
                    <p>
                        <ol>
                            <li>The elimination of barriers to language learning that carry serious consequences for many groups of people. </li>
                            <li>The supported development of many fields which suffer from relevant and new information due to the need to accommodate 
                                and teach workers in those field new words to describe new phenomena.</li>
                            <li>The reduction of overall time needed to study a language before being able to enter 
                                the workforce for many multicultural communities, 
                                which include large numbers of immigrants. </li>
                        </ol>
                    </p>

                    <h5>Solution</h5>
                    <p>Our proposed solution involves matching an efficient learning strategy 
                        to the different levels of learners. Learning a new word involves out 
                        cognitive processes, therefore, we matched strategies to learners based 
                        on their cognitive processes.
                     </p>
                     <p> For example, teaching a beginner more vocabulary by placing the 
                         new words in complex sentences makes it harder to learn the word, 
                         as it results in a higher cognitive load from trying to parse the 
                         meaning of the sentence out. This makes it an inefficient learning
                          strategy, but only for beginners. For more proficient learners, this 
                          could be more helpful by providing an example of the environtment 
                          this word would occur at.
                    </p>
                    <p>
                        Here are the results we compiled:
                        <img src={lang} width='80%'></img>
                    </p>

                    <h5>Method and Research</h5>
                    <p>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Field Study</th>
                                <th>Interview (Informal)</th>
                                <th>Survey</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Done in language cafes</td>
                                    <td>Describe techniques used</td>
                                    <td>10 questions</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Notes taken on learner’s behaviour and environment
                                    </td>
                                    <td>What they found challenging about word-recollection</td>
                                    <td>Gauge learners’ demographic profiles and inquire about their personal techniques for remembering words.
</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>6 hours of observation was collected of multiple languages
                                        <ul>
                                            <li>Chinese </li>
                                            <li> Spanish</li>
                                            <li>French </li>
                                            <li> Japanese</li>
                                            <li> German</li>
                                            <li>English </li>
                                        </ul>
                                    </td>
                                    <td> </td>
                                    <td>Given out in the language cafes, Language Exchange facebook groups</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h6>Environmental Scan</h6>
                    <p> Apps that attempt to solve the issue:
                        <ul>
                            <li>Duolingo</li>
                            <li>Busuu</li>
                            <li>Drop</li>
                            <li>Tinycards</li>
                        </ul>
                        Most of these apps are backed by research and does very well for the most part.
                        And while they have overlapping strategies, there is a difference in how they try to make language learning more efficient. 
                        For example, Drop concentrates on vocabulary learning using flashcards, etc. 
                        Duolingo and Tinycard introduces basic words and build on to the learner’s word bank. 
                        Busuu has a strategy closely aligned to our original proposed approach of context-based learning. 
                        Sadly, it might have a very steep learning curve for beginners, which could intimidate new learners.
                    </p>
                    </p>

                    <h5>Problems and Pitfalls</h5>
                    <p>
                        <ul>
                            <li>No good distinction for categories of language learning levels.
                                One can be good at reading, but not speaking</li>
                            <li>People still have a different individual learning styles that might 
                                not be accommodated by the solution. </li>
                            <li>How much attention and cognitive load they were able to allocate during the session </li>
                            <li>Too self-conscious/ translating word by word causes slow word retrieval</li>
                        </ul>
                    </p>
                    <p>Notes: This project was also highlighting the effect/impact/symbiosis between our cognitive activity,
                         the setting, and system. It mainly covers the process of problem solving; 
                         which involves an initial and a goal state, which in this case if having no 
                         vocabulary and successful word retrieval, and the actual process of going through 
                         the search space. If you're interested in reading more about it, you can read it in 
                         the pdf linked. Or ___other resources___.
                    </p>
                    <p>You can read the full paper <a href='https://drive.google.com/file/d/1CCIr4wBdrV7q_IgaY9wVkWt0chnfk4Os/view'>here</a></p>
                    

                </Container>
			</div>
		);
	}
}
export default LanguageLearning