import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar inner_padding">
            <div className="logo">Sovereo</div>
            <ul className="nav-links">
                <li className="active">
                    <Link to='/' >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' >
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/team' >
                        Team
                    </Link>
                </li>

                <li>
                    <Link to='/programs'>
                        Programs
                    </Link>
                </li>
                <li>
                    <Link to='/global-presence'>
                        Global Presence
                    </Link>
                </li>
                <li>
                    <Link to='/join'>
                        Join
                    </Link>
                </li>
            </ul>
            <div className="shedule_btn_wrp">
                <button className="schedule-btn">Schedule 1:1</button>
            </div>
        </nav>
    );
};

export default Navbar;
