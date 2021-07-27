import EventBus from 'eventing-bus';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { HashLink } from 'react-router-hash-link';
import { connect } from "react-redux";
import MuiPhoneInput from 'material-ui-phone-number';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SignUpModals from './signupModal'
import WalletModal from './walletModal'
import LogoutModal from './logoutModal'

import './index.css';


import { web3 } from '../../store/web3';
import { message, networkId, explorer } from '../../store/config';

import { login, isLoggedIn, logout, toggleSignup, toggleSignupInfo, signup, toggleConnectModal, toggleSwitchModal } from "../../store/actions/Auth";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                country: '',
                phone: '',
                type: 'signup',
                publicAddress: '',
            },
            isWallet: false,
            isLogout: false,
            countryCode: 'us',
            isPhysicalAddress: false,
            publicAddress: '',
            networkError: false
        };
    }


    connectWallet = async () => {


        if (typeof window.ethereum === 'undefined') {
            this.setState({ isWallet: !this.state.isWallet })
            let { isPolicyModal } = this.props;
            if (!isPolicyModal) this.props.toggleConnectModal(true);
            return;
        }

        web3.eth.net.getId(async (err, netId) => {

            if (netId != networkId) {
                let { isPolicyModal } = this.props;
                this.setState({ networkError: true })
                if (!isPolicyModal) this.props.toggleSwitchModal(true);
                return;
            }
            let address = (await web3.currentProvider.enable())[0];
            // if(address){
            //     this.setState({isPhysicalAddress:true,publicAddress:address})
            // }
            this.props.isLoggedIn(true);
            this.props.login({ publicAddress: address, type: 'login' });
        });
    };

    copied = () => EventBus.publish("success", 'Wallet Address Copied');
    toggleConnect = () => this.setState({ isWallet: !this.state.isWallet });

    logoutWallet = () => {
        this.props.logout();
        this.setState({ isLogout: !this.state.isLogout, isPhysicalAddress: false, publicAddress: '' });
    };

    handleChange = (event) => {
        let { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    setPhoneNumber = (number) => {
        let { formData } = this.state;
        formData['phone'] = number;
        this.setState({ formData });
    };

    selectedCountry = (e, value) => {
        let { formData } = this.state;
        formData['country'] = value['label'];
        this.setState({ formData });
    };

    countryToFlag = (isoCode) => {
        return typeof String.fromCodePoint !== 'undefined'
            ? isoCode
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : isoCode;
    };

    submitSignupInfo = () => {
        let { formData } = this.state;
        if (formData['name'] == '') {
            EventBus.publish("error", 'Please enter the Name');
            return;
        }
        else if (formData['email'] == '') {
            EventBus.publish("error", 'Please enter the Email');
            return;
        }

        else if (formData['country'] == '') {
            EventBus.publish("error", 'Please select the Country');
            return;
        }

        else if (formData['phone'] == '') {
            EventBus.publish("error", 'Please enter the Phone Number');
            return;
        }

        else this.props.toggleSignupInfo();
    };

    toggleLogoutModal = () => this.setState({ isLogout: !this.state.isLogout });

    submitSignup = async () => {
        if (typeof window.ethereum === 'undefined') {
            let { isPolicyModal } = this.props;
            if (!isPolicyModal) this.props.toggleConnectModal(true);
            return;
        }
        web3.eth.net.getId(async (err, netId) => {
            if (netId != networkId) {
                let { isPolicyModal } = this.props;
                if (!isPolicyModal) this.props.toggleSwitchModal(true);
                return;
            }
            let address = (await web3.currentProvider.enable())[0];
            let { formData } = this.state;
            formData['publicAddress'] = address;
            this.setState({ formData },
                () => this.props.signup(formData));
        });
        // this.props.toggleSignup()
        // this.submitSignupInfo();
    };


    CloseErrorModal = () => {
        this.setState({ networkError: false })
    }

    componentDidMount() {
        // this.connectWallet();
        let paddress = localStorage.getItem('publicAddress');
        if (paddress) {
            this.setState({ isPhysicalAddress: true, publicAddress: paddress })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let paddress = localStorage.getItem('publicAddress')
        if (prevProps.address !== this.props.address) {
            if (this.props.address === paddress) {
                this.setState({ isPhysicalAddress: true, publicAddress: paddress })
            } else {
                this.setState({ isPhysicalAddress: false })
            }
            // this.setState({ isWallet: !this.state.isWallet })
        }
    }
    render() {
        let { isLogout, formData, countryCode, isWallet } = this.state;
        let { address, isLogin, isSignup, isSignupInfo } = this.props;
        return (
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container ">
                        <Link className="navbar-brand" href="#"><img src={require("../../static/images/landing/treedifi/logo sample.png")} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <div class="hamburger">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>
                        </button>
                        <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">ABOUT   <span className="sr-only">(current)</span></Link> */}
                                    <HashLink className='nav-link pr-lg-3' smooth to='/'>Home</HashLink>
                                </li>

                                <li className="nav-item">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">TEAM  </Link> */}
                                    <HashLink className='nav-link  pr-lg-3' smooth to='/#toptrending'>Project</HashLink>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">WHY & HOW   </Link> */}
                                    <Link className="nav-link  pr-lg-3" to="/userprofile" >Features</Link>
                                    {/* <HashLink className='nav-link  pr-lg-4' smooth to='/#userprofile'>Profile </HashLink> */}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  pr-lg-3" to="/category" >Roadmap</Link>
                                    {/* <HashLink className='nav-link  pr-lg-4' smooth to='/#recent'>Recent Activity</HashLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">TOKEN  </Link> */}
                                    <HashLink className='nav-link  pr-lg-3' smooth to='/#contact'>News</HashLink>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">TOKEN  </Link> */}
                                    <HashLink className='nav-link  pr-lg-3' smooth to='/#contact'>Faq</HashLink>
                                </li>
                                <li className="nav-item">
                                    <div class="dropdown">
                                        <button class="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={require("../../static/images/landing/treedifi/american.png")} alt="" />
                                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item launch-app">
                                    {/* <Link className="nav-link  pr-lg-4" href="#">TOKEN  </Link> */}
                                    <HashLink className='nav-link  pr-lg-3' smooth to='/#contact'>Launch App</HashLink>
                                </li>

                            </ul>

                            {/* {this.state.isPhysicalAddress === false? */}

                            <div className="button-head">
                                <button className="button-one" type="button">Lite Paper</button>
                                <button className="button-two" type="button">Launch App</button>
                            </div>


                            {/* :
                        <div className=" ml-auto button-head">
                             {address == null || address == ''
                            ? 
                             <>
                            <button onClick={this.toggleConnect}>{!isLogin
                                    ? 'Connect' :  <div className='login-loader'><i className='fa fa-spinner fa-spin fa-1x fa-fw' /></div>}</button>
                            <button onClick={this.props.toggleSignup}>Sign Up</button>
                             </>
                        
                            : <button onClick={this.toggleLogoutModal}>
                                {address && address.substring(0, 9) + '.....'}
                            </button>
                                }
                        </div> */}
                            {/* } */}

                            {/* ------------------SIGN-UP MODAL----------------- */}
                            {/* <SignUpModals 
                               isSignup={isSignup}
                               toggleSignup={this.props.toggleSignup}
                               submitSignupInfo={this.submitSignupInfo}
                               handleChange={this.handleChange}
                               selectedCountry={this.selectedCountry}
                               countryToFlag={this.countryToFlag}
                               setPhoneNumber={this.setPhoneNumber}
                               submitSignup={this.submitSignup}
                               isSignupInfo={isSignupInfo}
                               formData={formData}
                               countryCode={countryCode}
                            /> */}


                            {/* ------------------Network Error MODAL----------------- */}

                            <Modal isOpen={this.state.networkError} toggle={this.CloseErrorModal} className="register-modal logout-modal">
                                <ModalBody className="modal-body" >
                                    <ModalHeader toggle={this.CloseErrorModal}></ModalHeader>
                                    <div className="icon-area-modal-pur">
                                        {/* <img src={require("../../static/images/landing/modal-logo.png")} alt="" /> */}
                                    </div>
                                    <div className="container modal-upper-pad">
                                        <div className="text-center form-modal-landing-nft">
                                            <div className="copy-address"><p>{message}</p></div>
                                        </div>
                                        <div className="modal-btn">
                                            <button onClick={this.CloseErrorModal}> Close <span></span></button>
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>

                            {/* ------------------Wallet MODAL----------------- */}

                            <WalletModal
                                isWallet={isWallet}
                                toggleConnect={this.toggleConnect}
                                address={address}
                                copy={this.copied}
                                connectWallet={this.connectWallet}
                            />

                            {/* ------------------LOGOUT MODAL----------------- */}
                            <LogoutModal
                                isLogout={isLogout}
                                toggleLogoutModal={this.toggleLogoutModal}
                                address={address}
                                copy={this.copied}
                                logoutWallet={this.logoutWallet}
                            />

                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

const mapDispatchToProps = { login, isLoggedIn, logout, toggleSignup, toggleSignupInfo, signup, toggleConnectModal, toggleSwitchModal };

const mapStateToProps = ({ Auth }) => {
    let { isLogin, isSignup, isSignupInfo, address, isPolicyModal, loginToken, setAddress } = Auth;
    return { isLogin, isSignup, isSignupInfo, address, isPolicyModal }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);