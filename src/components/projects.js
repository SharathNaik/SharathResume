import React,{Component} from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
          
          return(
            
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Resume ReactJS</CardTitle>
                <CardText>
                  This website is built using ReactJS.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Bootstrap Website</CardTitle>
                <CardText>
                  This website is built using Bootstrap 4.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>    
          )

        } else if(this.state.activeTab === 1) {

          return (
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >UrgeBlood</CardTitle>
                <CardText>
                  This website is built using Ionic-Cordova for Android.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Mind Reader</CardTitle>
                <CardText>
                  This website is built using pure Java Native code.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
          )

        } else if(this.state.activeTab === 2) {
          return (
            <div><h1>This is VueJS</h1></div>
          )
        }
    
      }

    render(){
        return (
            <div className="category-tabs">
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab>Web</Tab>
                    <Tab>Android</Tab>
                    <Tab>Windows</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;