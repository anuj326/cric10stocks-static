import Graph from "../assests/laptop-graph.jpg"

const Home = () => {
    return (
        <div className="section fade-in">
            <div className="container text-center">
                <h1 className="fw-bold mb-3">
                    Fantasy Meets Stock Market Learning
                </h1>
                <p className="lead mb-5">
                    Cric10Stocks is an educational fantasy platform that helps users understand
                    stock market concepts through a cricket-inspired experience.

                    Instead of real money, users explore how market demand, performance,
                    and trends affect asset value using familiar IPL-style teams.

                    Our goal is to make financial learning engaging, simple, and risk-free.
                </p>

                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card p-4 h-100 white-text">
                            <p><b>Why Cric10Stocks?</b></p>
                            <p>Learn stock market fundamentals without real money</p>
                            <p>Understand demand & supply through team performance</p>
                            <p>Ideal for beginners exploring financial literacy</p>
                            <p>Experience real-time market behavior in a fun, risk-free way</p>
                            <p>Build analytical thinking using live match data and trends</p>
                            <p>Practice smart decision-making before entering real markets</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div>
                                <img src={"https://png.pngtree.com/recommend-works/png-clipart/20241012/ourmid/pngtree-green-graph-moving-up-chart-stock-market-transparent-png-image_14078212.png"} alt="Graph image" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card p-4 h-100 white-text">
                            <h5>📈 Learn by Playing</h5>
                            <p>
                                Track team-based stocks and understand market movement without
                                financial risk.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 h-100">
                            <h5>🏏 Sports Inspired</h5>
                            <p>
                                Inspired by cricket leagues, teams act as assets with dynamic
                                value changes.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 h-100">
                            <h5>🔐 Risk-Free Learning</h5>
                            <p>
                                No real money involved. Purely educational and informational.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src={"https://media4.giphy.com/media/FeBamTuuPUTnFrqfx0/giphy.gif"}
                    alt="Stock Graph"
                    className="img-fluid rounded shadow"
                />
                <div style={{ fontSize: '18px' }} className="mt-5">
                    <p><b>Join the Contest & Start Winning!</b></p>
                    <p>Step into the excitement of live cricket contests where your knowledge turns into rewards.</p>
                    <p>Analyze team performance, make smart picks, and compete with other players.</p>
                    <p>The better your strategy, the higher your chances to climb the leaderboard and win big!</p>
                    <p>Don’t just watch the game — be a part of it and turn every match into an opportunity.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;