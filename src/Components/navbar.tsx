import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpenModel, setIsModalOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/team', label: 'Team' },
        { path: '/programs', label: 'Programs' },
        { path: '/global-presence', label: 'Global Presence' },
        { path: '/join', label: 'Join' },
    ];

    return (
        <>
            <nav className="navbar inner_padding">
                <Link to="/" className="logo">
                    <div className="logo">Sovereo</div>
                </Link>
                <ul className="nav-links">
                    {navLinks.map(({ path, label }) => (
                        <li key={path} className={location.pathname === path ? 'active' : ''}>
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="shedule_btn_wrp">
                    <button className="schedule-btn">Schedule 1:1</button>
                </div>
                <div
                    className={`d-lg-none menu_bar ${isOpenModel ? "active" : ""}`}
                    onClick={() => { setIsModalOpen(true) }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>

            {isOpenModel && (
                <div className="mobile_modal">
                    <div className="mobile_cont">
                        <Link to="/" className="logo">
                            <div className="logo">Sovereo</div>
                        </Link>
                        <button
                            className="btn_close"
                            onClick={() => setIsModalOpen(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <ul className="mobile-nav-links">
                            {navLinks.map(({ path, label }) => (
                                <li key={path} onClick={() => setIsModalOpen(false)}>
                                    <Link to={path}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
