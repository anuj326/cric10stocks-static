import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    Cric10Stocks
                </Link>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/stocks">Stocks</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/vision">Vision</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;