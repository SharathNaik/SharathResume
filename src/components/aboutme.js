import React,{Component} from 'react';

//import { Grid, Cell } from 'react-mdl';

import SampleComponent from './sampleComponent'

class AboutMe extends Component {
    render(){
        return (
            <div style={{width:'100%',margin:'auto',position:'relative'}} className="aboutme-grid">               
                <SampleComponent />
            </div>
        )
    }
}

export default AboutMe;
