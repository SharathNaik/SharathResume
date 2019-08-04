import React,{Component} from 'react';

import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        className="avatar-img"/>

                        <div className="banner-text">
                            <h1>SharePoint Designer & Developer</h1>

                            <hr/>

                            <p>SPFx | JSOM | REST API | React |  JQurey | HTML/CSS </p>



                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sharath-m-62a2444b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/SharathNaik" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UCS7MBE2icG9GvT-oAUWY8xw" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                                </div>
                            </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;