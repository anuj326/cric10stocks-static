// import IplTeam from "../assests/team-group.png";
const About = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="fw-bold mb-3">About Cric10Stocks</h2>
                    <p>
                        Cric10Stocks was created to bridge the gap between sports enthusiasm and financial awareness.
                        By combining the excitement of cricket with simplified market concepts, we make learning both fun and accessible.
                    </p>

                    <p>
                        Many beginners find the stock market complex, risky, and difficult to understand.
                        Cric10Stocks simplifies these concepts using fantasy-style simulations inspired by popular cricket leagues,
                        allowing users to learn without fear of financial loss.
                    </p>

                    <p>
                        Our platform helps users understand core ideas like demand and supply, price fluctuations,
                        and performance-based valuation — all through real-time match scenarios.
                        Every contest is designed to mirror real market behavior in a simple and engaging way.
                    </p>

                    <p>
                        Whether you are a student, a cricket fan, or someone curious about investing,
                        Cric10Stocks offers a safe environment to build confidence, analytical thinking,
                        and strategic decision-making skills.
                    </p>

                    <p>
                        This platform is purely informational and does not involve real-money trading or provide investment advice.
                        Our goal is to promote financial literacy through interactive learning and responsible gaming experiences.
                    </p>

                    <p>
                        At Cric10Stocks, we believe learning should be enjoyable.
                        Join our growing community and turn your passion for cricket into a powerful learning journey.
                    </p>
                </div>

                <div style={{ paddingTop: '10px' }} className="col-md-8">
                    <p><b> Who is this for?</b></p>
                    <p>Students learning finance basics</p>
                    <p>Beginners curious about stock markets</p>
                    <p>Sports fans interested in market concepts</p>
                </div>
                {/* <div>
            <img style={{width:"90%",height:"50%"}} src={IplTeam} alt="Group Team image"/>
        </div> */}

            </div>
        </div>
    );
};

export default About;