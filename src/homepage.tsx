import "./style.css";
import Header from './header';
const Homepage = () => {
    return (
        <div className="main-container">
            <Header />
            <div className="sub-container">
                <span className="content1">Unlimited movies, TV </span>
                <span className="content1">shows and more.</span>
                <span className="content2">Watch anywhere. Cancel anytime.</span><br />
                <span className="content3">Ready to watch? Enter your email to create or restart your membership.</span>
            </div><br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="text" className="email-text" />
                <a href="www.google.com" className="get-started-button">Get Started </a>
            </div>
        </div>
    );
}

export default Homepage;
