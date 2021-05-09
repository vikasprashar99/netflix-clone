import "./style.css";
import Header from './header';
import React, { Component } from 'react';

class Homepage extends Component {

    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
            open: false,
            faq: [
                { heading: "something", content: "something" },
                { heading: "something", content: "something" },
                { heading: "something", content: "something" },
                { heading: "something", content: "something" }
            ],
            content: ""
        };
        this.togglePanel = this.togglePanel.bind(this);

    }
    togglePanel(e, x) {
        console.log(typeof(x))
        this.setState({ open: !this.state.open })
        this.setState({ content: x.content })
    }
    render() {
        return (
            <div>

                <div className="main-container">
                    <Header />
                    <div className="child-container" >
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                            <span className="content1">Unlimited movies, TV </span>
                            <span className="content1">shows and more.</span>
                            <span className="content2">Watch anywhere. Cancel anytime.</span><br />
                            <span className="content3">Ready to watch? Enter your email to create or restart your membership.</span>
                        </div><br />
                        <div style={{ display: "flex", justifyContent: "center", top: "50%" }}>
                            <input type="text" className="email-text" placeholder="Enter address" />
                            <a href="www.google.com" className="get-started-button">Get Started </a>
                        </div>
                    </div>
                </div>
                <div className="child-card-container" >
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center center" }}>
                        <span className="content1">Enjoy on your TV.</span>
                        <span className="content2">Watch on smart TVs, PlayStation, Xbox,</span>
                        <span className="content2">Chromecast, Apple TV, Blu-ray players and</span>
                        <span className="content2">and more.</span>
                    </div>
                    <span className="card-image"></span>
                </div>
                <div className="child-card-container" >
                    <span className="card-image1"></span>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center center" }}>
                        <span className="content1">Download your shows</span>
                        <span className="content1">to watch offline.</span>
                        <span className="content2">save your favourites easily and always have</span>
                        <span className="content2">something to watch.</span>
                    </div>
                </div>
                <div className="child-card-container" >
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center center" }}>
                        <span className="content1">Watch everywhere.</span>
                        <span className="content2">Stream unlimited movies and TV shows on</span>
                        <span className="content2">your phone, tablet, laptop, and TV.</span>
                    </div>
                    <span className="card-image"></span>
                </div>
                <div className="child-card-container" >
                    <span className="card-image1"></span>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center center" }}>
                        <span className="content1">Create profiles for kids.</span>
                        <span className="content2">Send kids on adventures with their favourite</span>
                        <span className="content2">characters in a space made just for them—</span>
                        <span className="content2">free with your membership.</span>
                    </div>
                </div>
                <div className="faq-container">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center center" }}>
                        <span className="content1">Frequently Asked Questions</span><br /><br />
                        {this.state.faq.map((x) => {
                            return (
                                <div onClick={(e) => this.togglePanel(e, x)} className="header">
                                    <span className="content2">{x.heading}</span></div>
                            )
                        })}
                        {this.state.open ? (
                            <div className="content">
                                {this.state.content}
                            </div>
                        ) : null}
                        <span className="content3">Ready to watch? Enter your email to create or restart your membership.</span><br />
                        <div style={{ display: "flex", justifyContent: "center", top: "50%" }}>
                            <input type="text" className="email-text" placeholder="Enter address" />
                            <a href="www.google.com" className="get-started-button">Get Started </a>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="footer-container" >
                    <div className="footertext1-container">
                        <span className="footer-line1">Questions? Call 000-800-040-1843</span>
                    </div>
                    <div className="footertext2-container">
                        <span className="footertext2-subcontainer">Questions? Call 000-800-040-1843</span>
                        <span className="footertext2-subcontainer">Questions? Call 000-800-040-1843</span>

                    </div>
                    <div className="footertext3-container">
                        <span className="footer-line1">Questions? Call 000-800-040-1843</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;