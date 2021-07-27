import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Phone, Room, Email } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './index.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <footer className="main-footer" role="img" aria-label="Footer backgroud">
                <div className="container">
                    <div className="main-div">
                        <h1>© 2021 <span>Tree DeFi</span></h1>
                        <div className="socials">
                            <a href=""> <img src={require("../../static/images/landing/treedifi/shir.png")} alt="" /></a>
                            <a href=""> <img src={require("../../static/images/landing/treedifi/play.png")} alt="" /></a>
                            <a href=""> <img src={require("../../static/images/landing/treedifi/mm.png")} alt="" /></a>
                        </div>
                    </div>
                </div>
               
                    
            </footer>
        );
    }
}

export default Footer;