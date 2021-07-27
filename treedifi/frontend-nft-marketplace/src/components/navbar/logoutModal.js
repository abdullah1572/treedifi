
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Button } from "reactstrap";

import MuiPhoneInput from 'material-ui-phone-number';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import countries from './country.json';
export default class SignUpModal extends Component{
    
    constructor(props){
        super(props);
    }

    render(){

        return(
                <div>
                        <Modal isOpen={this.props.isLogout} toggle={this.props.toggleLogoutModal} className="register-modal logout-modal">
                            <ModalBody className="modal-body" >
                                <ModalHeader toggle={this.props.toggleLogoutModal}></ModalHeader>
                                <div className="icon-area-modal-pur">
                                    {/* <img src={require("../../static/images/landing/modal-logo.png")} alt="" /> */}
                                </div>
                                <div className="container modal-upper-pad">
                                    <div className="text-center form-modal-landing-nft">
                                        <div className="copy-address"><p>{this.props.address}</p></div>
                                    </div>
                                    <div className="modal-btn">
                                        <CopyToClipboard text={this.props.address} onCopy={this.props.copied}>
                                            <button>Copy <span><i class="fa fa-files-o" aria-hidden="true"></i></span></button>
                                        </CopyToClipboard>
                                        <button onClick={this.props.logoutWallet}>Logout <span><i class="fa fa-sign-out" aria-hidden="true"></i></span></button>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>


                </div>
        );
    }

}
