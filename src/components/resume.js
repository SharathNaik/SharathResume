import React,{Component} from 'react';

import { Grid, Cell} from 'react-mdl';

import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center',paddingTop:'4em'}}>
                        <img
                            src="https://sharathnaik.github.io/SharathResume/images/sharathM.JPG"
                            alt="avatar"
                            style={{height: '200px',borderRadius:'20%'}}
                        />
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Sharath M</h2>
                        <h4 style={{color: 'grey'}}>Sharepoint Designer and Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Myself Sharath, I have been working in IT industry for around 5 years. My professional expertise lies in the Sharepoint domain. I have been exploring Mobile App development as well as Web Application development.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>B.Channasandra, Bangalore</p>
                        <h5>Phone</h5>
                        <p>8123314294</p>
                        <h5>Email</h5>
                        <p>nayak.sharathm@gmail.com</p>
                        <h5>Web</h5>
                        <p>iamsharu.ml</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    
                    <Cell className="resume-right-col" col={8}>


                        <h2>Experience</h2>

                        <Experience
                            startYear={2013}
                            endYear={2016}
                            jobName="Technical Associate, Unisys India"
                            jobDescription="Got Oporunity to work on Server Side OM(SSOM), Client Side OM(CSOM), JavaScript OM(JSOM), Jquery, Sharepoint Designer"
                        />

                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName="Associate Consultant, Cognizant India"
                            jobDescription="Got Oporunity to work on SharePoint Hosted App, JSOM , Page and Master Page customization using SP Designer"
                        />

                        <Experience
                            startYear={2018}
                            endYear={'Till'}
                            jobName="Consultant B2, Capgemini India"
                            jobDescription="Got Oporunity to work on SPFx, SharePoint Hosted App, Console Applications"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Education</h2>
                        

                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="P E S College of Engineering, Mandya"
                            schoolDescription="Bachulors of Engineering in Computer Science"
                        />

                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="Govinda Dasa College, Surathkal, Mangalore"
                            schoolDescription="I have completed from 12th Grade(PUC) in PCMB"
                        />

                        <Education
                            startYear={2006}
                            endYear={2007}
                            schoolName="Vidyadayini High School, Surathkal, Magalore"
                            schoolDescription="I have completed from 10th Grade(SSLC) in Science"
                        />


                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        
                        <Skills
                            skill="SPFx"
                            progress={70}
                        />
                        
                        <Skills
                            skill="JSOM"
                            progress={80}
                        />
                        <Skills
                            skill="REST API"
                            progress={70}
                        />
                        
                        <Skills
                            skill="React"
                            progress={60}
                        />

                        <Skills
                            skill="JQurey"
                            progress={90}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;