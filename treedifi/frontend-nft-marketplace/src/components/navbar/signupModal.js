
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Button } from "reactstrap";

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
                     <Modal isOpen={this.props.isSignup} toggle={this.props.toggleSignup} className="register-modal signup-modal">
                    <ModalBody className="modal-body">
                        <ModalHeader toggle={this.props.toggleSignup}>
                        </ModalHeader>
                        <div className="icon-area-modal-pur">
                            {/* <img src={require("../../static/images/landing/modal-logo.png")} alt="" /> */}
                        </div>
                        <div className="container modal-upper-pad">
                            <div className="form-modal-landing-nft">
                                <div className="input-feild-button">
                                    {!this.props.isSignupInfo
                                        ? <ValidatorForm className="row validator-form my-4" onSubmit={this.props.submitSignupInfo}>
                                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 offset-0 text-feild-modal">
                                                <TextValidator
                                                    className="login-input-fields col-lg-12"
                                                    type="text"
                                                    name="name"
                                                    label={`Name *`}
                                                    margin="dense"
                                                    variant="outlined"
                                                    onChange={this.props.handleChange}
                                                    value={this.props.formData['name']}
                                                    validators={['required']}
                                                    errorMessages={['Please enter the Name']}
                                                />
                                                <TextValidator
                                                    className="login-input-fields col-lg-12"
                                                    type="email"
                                                    name="email"
                                                    label="Email *"
                                                    margin="dense"
                                                    variant="outlined"
                                                    onChange={this.props.handleChange}
                                                    value={this.props.formData['email']}
                                                    validators={['required', 'isEmail']}
                                                    errorMessages={['Please enter the Email', 'email is not valid']}
                                                />
                                                <Autocomplete
                                                    fullWidth
                                                    id="country-select-demo"
                                                    className="autocomplete-field"
                                                    options={countries}
                                                    getOptionLabel={(option) => option.label}
                                                    onChange={(event, newValue) => this.props.selectedCountry(event, newValue)}
                                                    onClick
                                                    renderOption={(option) => (
                                                        <React.Fragment>
                                                            <span>{this.props.countryToFlag(option.code)}</span>
                                                        &nbsp;&nbsp; {option.label} ({option.code})
                                                        </React.Fragment>
                                                    )}
                                                    renderInput={(params) => (
                                                        <TextValidator
                                                            {...params}
                                                            label='Country'
                                                            margin="dense"
                                                            variant="outlined"
                                                            className="login-input-fields col-lg-12"
                                                            inputProps={{
                                                                ...params.inputProps,
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <MuiPhoneInput
                                                    fullWidth
                                                    name="phone"
                                                    margin="dense"
                                                    variant="outlined"
                                                    autoFormat={false}
                                                    label='Phone Number'
                                                    id='standard-full-width'
                                                    value={this.props.formData['phone']}
                                                    defaultCountry={this.props.countryCode}
                                                    className="login-input-fields col-lg-12 "
                                                    onChange={(number) => this.props.setPhoneNumber(number)}
                                                />
                                            </div>
                                            <div className='col-12 pt-2 text-center'>
                                                <Button type="Submit" className='button-form-modal text-center text-black login-btn'>Next</Button>
                                            </div>
                                        </ValidatorForm>
                                        : <div className='col-12 pt-2 text-center text-paragraph-connect-wallet'>
                                            <div className="connect-wallat-signup">
                                                <div className="meta-icon-imag-text ">
                                                    <div className="flex-display-wrapping">
                                                        <Link >
                                                            {/* <img src={require("../../static/images/landing/01.png")} className="img-trust-wallet" alt="" /> */}
                                                        </Link>
                                                        <Link onClick={this.props.submitSignup}>
                                                            {/* <img src={require("../../static/images/landing/03.png")} alt="" /> */}
                                                        </Link>
                                                    </div>

                                                    <div className="text-meta-mask-signup">
                                                        <h2>How to setup Metamask?<span><a className='learn-meta-signup' target='_blank' href='https://levelup.gitconnected.com/how-to-use-metamask-a-step-by-step-guide-f380a3943fb1'>Learn More</a></span></h2>
                                                        <h5 className="text-white sheild-icon-siz"><span>
                                                            {/* <img src={require("../../static/images/landing/sheild-icon.png")} alt="" /> */}
                                                            </span>Non-custodial & Secure</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>We do not own your private keys and cannot access your funds <br></br>without your confirmation</p>
                                            <Button onClick={this.props.submitSignup} className='button-form-modals text-center text-black login-btn'>
                                                Connect Wallet
                                        </Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                </div>
        );
    }

}
