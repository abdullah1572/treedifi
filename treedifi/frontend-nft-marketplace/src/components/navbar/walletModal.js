
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Button } from "reactstrap";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MuiPhoneInput from 'material-ui-phone-number';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import countries from './country.json';
export default class SignUpModal extends Component{
    
    constructor(props){
        super(props);
    }

    render(){

        return(
                <div>
                        <Modal isOpen={this.props.isWallet} toggle={this.props.toggleConnect} className="register-modal logout-modal">
                                            <ModalBody className="modal-body" >
                                                <ModalHeader toggle={this.props.toggleConnect}></ModalHeader>
                                                <div className="icon-area-modal-pur">
                                                    {/* <img src={require("../../static/images/landing/modal-logo.png")} alt="" /> */}
                                                </div>
                                                <div className="container modal-upper-pad">
                                                    <div className="text-center form-modal-landing-nft">
                                                        <div className="copy-address"><p>Please install MetaMask</p></div>
                                                    </div>
                                                    <div className="modal-btn">
                                                        {/* <CopyToClipboard text={this.props.address} onCopy={this.props.copied}>
                                                            <button>Copy <span><i class="fa fa-files-o" aria-hidden="true"></i></span></button>
                                                        </CopyToClipboard> */}
                                                        {/* <button onClick={this.props.connectWallet}>Connect Wallet <span></span></button> */}
                                                    <button onClick={this.props.toggleConnect}> Close <span></span></button>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>

                </div>
        );
    }

}
