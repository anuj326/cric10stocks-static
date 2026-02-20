import SEO from "../components/SEO";

const Stocks = () => {
  return (
    <div className="container py-5">
        <SEO
        title="Fantasy Stocks | Cric10Stocks Educational Platform"
        description="Explore fantasy stocks inspired by cricket teams and learn how stock values react to demand and performance."
        keywords="fantasy stocks, cricket stocks, stock simulation learning"
        url="https://www.cric10stocks.com/stocks"
      />
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-4">Stocks Overview</h2>

          <div className="card mb-3 p-3 shadow-sm">
            <h5>What Are Stocks?</h5>
            <p>
              Stocks represent ownership in a company. When you buy a stock,
              you own a small portion of that company.
            </p>
          </div>

          <div className="card mb-3 p-3 shadow-sm">
            <h5>Why Learn Stocks?</h5>
            <p>
              Learning stocks helps build financial awareness, long-term
              planning, and smart investment habits.
            </p>
          </div>

          <div className="card p-3 shadow-sm">
            <h5>Fantasy Stock Concept</h5>
            <p>
              Fantasy stocks allow users to learn without financial risk by
              simulating market scenarios.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stocks;