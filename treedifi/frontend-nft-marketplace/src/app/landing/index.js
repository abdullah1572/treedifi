import EventBus from "eventing-bus";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Send, CheckCircle, Info, Error, Done, Facebook, Twitter, Instagram, LinkedIn, LiveTvRounded } from '@material-ui/icons';
import OwlCarousel from 'react-owl-carousel';
import './index.css';
import { slider } from './recentActivity';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalid: 0,
      thePosition: false,
    };
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  // onScrollStep =() => {
  //   if(window.pageYOffset === 0){
  //     clearInterval(this.state.intervalid);
  //   }
  //   window.scroll(0, window.pageYOffset - this.props.scrollStepInpx)
  // }

  // scrollToTop = () => {
  //   let intervalid = setInterval(this.onScrollStep, this.props.delayInMs);
  //   this.setState({intervalid: intervalid})
  // }

  // componentDidMount() {
  //   import('wowjs').then((WOW) => new WOW.WOW({
  //     boxClass: 'wow',           // animated element css class (default is wow)
  //     animateClass: 'animated',  // animation css class (default is animated)
  //     offset: 5,                 // distance to the element when triggering the animation (default is 0)
  //     mobile: true,              // trigger animations on mobile devices (default is true)
  //     live: true,                // act on asynchronously loaded content (default is true)
  //     callback: function (box) {
  //       // the callback is fired every time an animation is started
  //       // the argument that is passed in is the DOM node being animated
  //     },
  //     scrollContainer: null      // optional scroll container selector, otherwise use window
  //   }).init());
  // };

  render() {

    const owl_option = {
      margin: 30,
      nav: true,
      dots: true,
      dotsEach: true,
      loop: true,
      infinite: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 3,
        }
      },
    };



    return (
      <div className='landing-nft'>

        <Navbar />

        <section className="header-section" style={{ backgroundImage: `url(${require("../../static/images/landing/treedifi/banner-main-back.png")})` }}>
          <img src={require("../../static/images/landing/treedifi/menu.png")} className="menu-ab" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6 col-12">
                <div className="textheader-main">
                  <button className="new" type="button">New</button>
                  <h2>The first eco-friendly DeFi project.<img src={require("../../static/images/landing/treedifi/Rectangle.png")} className="rectangle" alt="" /></h2>
                  <p>The unique Yield Platform that aims to help the environment by planting trees. </p>
                  <div className="buttons">
                    <button type="button"><img src={require("../../static/images/landing/treedifi/banner-icon.png")} alt="" />Litepaper</button>
                    <button className="button-pad" type="button"><img src={require("../../static/images/landing/treedifi/banner-icon3.png")} alt="" />Donations</button>
                  </div>
                  <button className="single-button" type="button"><img src={require("../../static/images/landing/treedifi/banner-icon2.png")} alt="" />Launch App</button>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                <div className="imageback-header ">
                  <img src={require("../../static/images/landing/treedifi/banner-image.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1  col-md-12 offset-md-0 col-10 offset-1">
                <div className="image-wallet">
                  <img src={require("../../static/images/landing/treedifi/ima5.png")} className="margin-right" alt="" />
                  <img src={require("../../static/images/landing/treedifi/ima4.png")} alt="" />
                  <img src={require("../../static/images/landing/treedifi/ima3.png")} className="margin-right" alt="" />
                  <img src={require("../../static/images/landing/treedifi/ima2.png")} alt="" />
                  <img src={require("../../static/images/landing/treedifi/ima1.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="visitguid">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-5 col-12">
                <div className="image-difi">
                  <img src={require("../../static/images/landing/treedifi/visit-guid.png")} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-7 col-12">
                <div className="text-steps text-main">
                  <div className="step-number">
                    <h5>1</h5>
                  </div>
                  <div className="text-visit">
                    <h2>Visit app.treedefi.com</h2>
                    <p>Visit our platform at app.treedefi.com, read our documentation and study everything before joining our delicious pools.</p>
                    <h4>Farm Now</h4>
                  </div>
                </div>
                <div className="text-steps">
                  <div className="step-number">
                    <h5>2</h5>
                  </div>
                  <div className="text-visit padding-bot">
                    <h2>Stake $TREE and $SEED Tokens</h2>
                    <p>Purchase tokens from our platform and stake them in our farms and pools to receive rewards.</p>
                  </div>
                </div>
                <div className="text-steps">
                  <div className="step-number">
                    <h5>3</h5>
                  </div>
                  <div className="text-visit">
                    <h2>Help the Environment</h2>
                    <p>By holding your tokens in our farms you'll be rewarded with TREE and SEED tokens and you'll be helping the environment by planting trees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="exploremore">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-7 col-12 order-lg-first order-md-first order-sm-last order-last">
                <div className="left-side">
                  <div className="outer-div">
                    <h5><span className="color-green">New</span>The first eco-friendly DeFi platform</h5>
                  </div>
                  <h1>Fighting cryptocurrency carbon footprint</h1>
                  <p>We’re building a strong community and we’ll use 1/3 (one third) of the transaction fees to plant trees. We’re still deciding which organization to work with, but we’ve loved the efforts that TeamTrees, Trees for the Future and Treedom have shown recently so they are our main candidates.</p>
                  <h4>Explore More</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-5 col-12 order-lg-last order-sm-last order-sm-first order-first">
                <div className="right-side">
                  <img src={require("../../static/images/landing/treedifi/tree-guide.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="longrun">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-5 col-12">
                <div className="leftside">
                  <img src={require("../../static/images/landing/treedifi/long-run.png")} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-7 col-12">
                <div className="text-main">
                  <h2>We’re here for the longrun!</h2>
                  <p>We’ve locked the devs funds and initial liquidity to make sure that all of our users feel safe using TreeDefi.</p>
                  <p className="OTHER-STYLE">We are also working on Harvest Guard, a feature that will protect TREE and SEED from market manipulation created by whales.</p>
                  <h4>Farm Now</h4>
                </div>
                <div className="checked">
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Liquidity Locked</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Verified Contracts</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Migration Code Removed</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Low Presale</h4>
                  </div>
                  <h3>Initial Liquidity Locked<span>/</span>Dev funds locked</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-roadmap" style={{ backgroundImage: `url(${require("../../static/images/landing/treedifi/feature-roadmap.png")})` }}>
          <div className="container">

            <div className="upper-text-main-head">
              <h1>Features in progress<img src={require("../../static/images/landing/treedifi/rectangle1.png")} className="rectangle" alt="" /></h1>
              <p>We’ve been studying the most trusted and succesful DeFi platforms and we’ve picked the best features for our project and community. New features are coming and will be updated daily through our <span>Medium page</span></p>
            </div>
            <div className="buttons-multi">
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature1.png")} alt="" />Locked Liquidity</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature2.png")} alt="" />Harvest Guard</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature3.png")} alt="" />Non Fungible Tokens</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature4.png")} className="main-image" alt="" />Lottery</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature5.png")} alt="" />Various Audits</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature6.png")} alt="" />Crypto Games</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature7.png")} alt="" />Triple Burn System</button>
              <button className="" type="button"><img src={require("../../static/images/landing/treedifi/feature8.png")} alt="" />Planting Real Trees</button>
            </div>
            <div className="upper-text-main-heads">
              <h1>Our Roadmap<img src={require("../../static/images/landing/treedifi/rectangle2.png")} className="rectangles" alt="" /></h1>
            </div>
            <div className="tabs-head">
              <div class="row">
                <div className="nav-div">
                  <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                    <nav>
                      <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Seed🌱</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Bonsai 🎋</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tree 🌳</a>
                        <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Baobab 🌲</a>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="col-lg-10 offset-lg-1 offset-0">
                  <div className="down-town">
                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="main-button">
                          <button className="button">
                            <span>Seed</span>
                            <h5>Multi Listing</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Price Bot</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Light Audit</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Lottery</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>BSCNews Article</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Twitter Daily Updates</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Planting Real Trees</h5>
                          </button>
                          <button className="button">
                            <span>Seed</span>
                            <h5>Twitter Contest</h5>
                          </button>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="main-button">
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Multi Listing</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Price Bot</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Light Audit</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Lottery</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>BSCNews Article</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Twitter Daily Updates</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Planting Real Trees</h5>
                          </button>
                          <button className="button">
                            <span>Bonsai</span>
                            <h5>Twitter Contest</h5>
                          </button>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="main-button">
                          <button className="button">
                            <span>Tree</span>
                            <h5>Multi Listing</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Price Bot</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Light Audit</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Lottery</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>BSCNews Article</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Twitter Daily Updates</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Planting Real Trees</h5>
                          </button>
                          <button className="button">
                            <span>Tree</span>
                            <h5>Twitter Contest</h5>
                          </button>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                        <div className="main-button">
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Multi Listing</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Price Bot</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Light Audit</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Lottery</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>BSCNews Article</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Twitter Daily Updates</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Planting Real Baobabs</h5>
                          </button>
                          <button className="button">
                            <span>Baobab</span>
                            <h5>Twitter Contest</h5>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="stay-in-loop">
          <div className="container main-padd">
            <div className="upper-text-main-head">
              <h1>Stay in the loop!</h1>
              <p>Part of our team is focused on community management and communication. We find it essential since most other DeFi projects don’t communicate accordingly with their audience and it quickly creates FUD. Check our Medium page on a regular basis to be in touch with the latest news</p>
            </div>
            <div className="first-slider">
              <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={3000}  {...owl_option}>
                {slider.map(item =>
                  <div class="item">
                    <div className="card">
                      <img src={require(`../../static/images/landing/treedifi/${item.image}`)} alt="" />
                      <div className="down-trending">
                        <h4>{item.name}</h4>
                        <p>{item.desc}</p>
                        <h6>{item.date} <span className="color-jun">{item.readmore}</span></h6>
                      </div>
                    </div>
                  </div>
                )}
              </OwlCarousel>


            </div>
          </div>
        </section>

        <section className="intial-presale">
          <img src={require("../../static/images/landing/treedifi/new-image-pre.png")} className="green" alt="" />
          <img src={require("../../static/images/landing/treedifi/egg-design.png")} className="egg" alt="" />
          <img src={require("../../static/images/landing/treedifi/top-egg.png")} className="top" alt="" />
          <img src={require("../../static/images/landing/treedifi/bottom-egg.png")} className="bottom" alt="" />
          <div className="fluid-container padding-padd">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-4 col-12 order-lg-first order-md-first order-sm-last order-last">
                <div className="image-difi">
                  <img src={require("../../static/images/landing/treedifi/charts items.png")} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-8 col-12 order-lg-last order-sm-last order-sm-first order-first">
                <div className="text-head-main">
                  <h1>Initial Presale Distribution</h1>
                  <p>Here’s how we will distribute the initial supply of TREE tokens between Initial Liquidity, our Team, Marketing Costs and the portion available during the Presale</p>
                </div>
                <div className="checked">
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Low Presale Supply</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Token Burn</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Financial Plan</h4>
                  </div>
                  <div className="steps-checked">
                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                    <h4>Locked Funds</h4>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Faq">
          <div className="container main-padd">
            <div className="upper-text-main-head">
              <h1>FAQ</h1>
              <p>Here are some of the questions we receive frequently. If you have ulterior questions contact us through our Telegram channel</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="col-lg-12 categories_main_upper">

                  <h4 className="text-center text-heading22">FAQS</h4>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12" >
                <div className="accordion wow fadeInUp" data-wow-delay='100ms' id="faqExample">

                  <div className="card">
                    <div className="card-header p-2" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link button-faqs-togg" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          What is Tree Defi?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          What is yield farming?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How do I use Tree Defi?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingFour">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Is it sate to use Tree Defi?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingFive">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          What are TREE and SEED token?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingSix">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          What are yout official media channels?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header p-2" id="headingSeven">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          What are all the relevant smart contract addresses?
                          <div>
                            <i className="icon icon-green"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                            <i className="icon icon-grey"> <img src={require("../../static/images/landing/treedifi/arrorw.png")} alt="" /></i>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#faqExample">
                      <div className="card-body">
                        Once you participate in a lottery your money will be locked into an escrow account. There will be a limited number of tickets assigned on every lottery. Once the lottery gets started a winner will be picked at random and will receive 90% of the total amount accumulated from all lottery players.
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="get-in-touch text-center">
                <h1 className="">Still have unanswered questions? <span className="unanswer"> Get in touch</span></h1>
              </div>
            </div>
          </div>
        </section>

        <Footer />


        {/* <Modal isOpen={false} toggle={this.props.toggleBuyWallet} className="register-modal buy-token-modal">
          <div class="icon-area">
            <h1>6 <br></br><span>Days Left</span></h1>
          </div>
          <ModalHeader toggle={this.props.toggleBuyWallet}>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <div className="text-head-main">
              <h1>JOIN AND WIN</h1>
              <h4>Featured Lottery</h4>
              <h6>What is Featured Lottery?</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis at dui et mollis. Quisque metus lacus, vehicula id gravida ut, pharetra id ex. Maecenas ipsum lorem, imperdiet non egestas a, aliquam a est. Proin gravida neque at nunc egestas, vitae scelerisque eros ullamcorper. Phasellus congue nulla tellus, sit amet molestie velit lacinia in. Etiam malesuada placerat nibh</p>
            </div>        
          </ModalBody>
        </Modal> */}

      </div>
    );
  }
}


const mapDispatchToProps = {
};

const mapStateToProps = ({ }) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);