import React,{Component} from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Sharath M</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a Sharepoint Developer by Profession but love to work on new technologies and share my little knowledge wherever required.</p>

                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                        <ListItemContent className="custListItem" style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square iItem" aria-hidden="true" />
                            <span className="contact-list-content">(91) 8123314294</span>
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent className="custListItem" style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope iItem" aria-hidden="true" />
                            <span className="contact-list-content">nayak.sharathm@gmail.com</span>
                        </ListItemContent>
                        </ListItem>

                    </List>
                    </div>

                    <h2>Get In Touch</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                        <ListItemContent className="custListItem" style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-facebook-official iItem" aria-hidden="true" />
                            <a href="https://www.facebook.com/nayak.sharathm" rel="noopener noreferrer" target="_blank">Sharath Nayak</a>
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent className="custListItem" style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-twitter iItem" aria-hidden="true" />
                            <a href="https://twitter.com/sharu" rel="noopener noreferrer" target="_blank">@sharu</a>
                        </ListItemContent>
                        </ListItem>

                    </List>
                    </div>


                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;