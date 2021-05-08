import "./style.css";
import Header from './header';
const Homepage = () => {
    return (
        <div>
            <div className="main-container">
                <Header />
                <div className="child-container" >
                    <div style={{ display: "flex", flexDirection: "column" ,textAlign:"center"}}>
                        <span className="content1">Unlimited movies, TV </span>
                        <span className="content1">shows and more.</span>
                        <span className="content2">Watch anywhere. Cancel anytime.</span><br />
                        <span className="content3">Ready to watch? Enter your email to create or restart your membership.</span>
                    </div><br/>
                    <div style={{ display: "flex", justifyContent: "center", top: "50%" }}>
                        <input type="text" className="email-text" />
                        <a href="www.google.com" className="get-started-button">Get Started </a>
                    </div>
                </div>
                {/* <div className="child-container" >
                    <div className="sub-container">
                        <span className="content1">Unlimited movies, TV </span>
                        <span className="content1">shows and more.</span>
                        <span className="content2">Watch anywhere. Cancel anytime.</span><br />
                        <span className="content3">Ready to watch? Enter your email to create or restart your membership.</span>
                    </div><br />
                    <div style={{ display: "flex", justifyContent: "center", top: "50%" }}>
                        <input type="text" className="email-text" />
                        <a href="www.google.com" className="get-started-button">Get Started </a>
                    </div>
                </div> */}
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
        </div>
    );
}

export default Homepage;
