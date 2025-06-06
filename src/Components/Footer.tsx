import { Link } from "react-router-dom";
import SocialIcon1 from "../assets/Images/social_icon1.svg";
import SocialIcon2 from "../assets/Images/social_icon2.svg";
import SocialIcon3 from "../assets/Images/social_icon3.svg";
import SocialIcon4 from "../assets/Images/youtube.svg";
import { useState } from "react";
import DownloadModal from "./modal";
import SuccessModal from "./successModel";


export default function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        setIsSuccessOpen(true);

        const link = document.createElement("a");
        link.href = "/identity-reset-guide.pdf"; // Correct, absolute public path
        link.download = "Self-Mastery-Blueprint.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsSuccessOpen(false), 5000);
    };

    return (
        <>
            <footer className="footer-wrapper">
                <div className="footer_cont">

                    <div className="footer-top">
                        <div className="footer-contact">
                            <div className="add_wrp">
                                <div className="hero-tags text-white mb-3">
                                    <span>Power</span>
                                    <span>✦</span>
                                    <span>Prestige</span>
                                    <span>✦</span>
                                    <span>Precision</span>
                                </div>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <h3 className="brand" style={{ marginTop: "-4px" }}>Sovereo</h3>
                                </Link>
                                <p className="tagline">
                                    The Science of Self-Mastery,<br />
                                    Rebuild Your Identity. Reclaim Your Power.
                                </p>
                                <ul className="contact-info">
                                    <li>(440) 462-9346</li>
                                    <li>contact@sovereo.global</li>
                                    <li>
                                        1821 CENTRAL AVE #8444<br />
                                        CHEYENNE, WY 82001
                                    </li>
                                </ul>
                            </div>

                            <div className="social-icons">
                                <div className="icon_wrp">
                                    <a href="https://www.instagram.com/todd_allyn/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <img src={SocialIcon1} loading="lazy" />
                                    </a>
                                </div>
                                <div className="icon_wrp">
                                    <a href="https://www.linkedin.com/in/toddallyn/" target="_blank" rel="noopener noreferrer">
                                        <img src={SocialIcon2} loading="lazy" />
                                    </a>
                                </div>
                                <div className="icon_wrp">
                                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Ftodd_allyn" target="_blank" rel="noopener noreferrer">
                                        <img src={SocialIcon3} loading="lazy" />
                                    </a>
                                </div>
                                <div className="icon_wrp">
                                    <a href="https://www.youtube.com/@Howtobehappytv" target="_blank" rel="noopener noreferrer">
                                        <img src={SocialIcon4} loading="lazy" />
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="footer-links ps-lg-5">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to='/about' >
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/faq'>
                                        FAQ
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to={'/blogs'}>
                                        Blogs
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <Link to='/programs'>
                                        Program Comparison
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/documentation'>
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/glossary'>
                                        Glossary
                                    </Link>
                                </li>

                                <li
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Download
                                </li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Terms</h4>
                            <ul>
                                {/* <li>Terms & Condition</li>
                                <li>Privacy & Policy</li>
                                <li>Partners</li> */}
                                <li>
                                    <Link to='/disclaimer'>
                                        Disclaimer
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-middle">
                        <p className="mb-3">
                            A Values-Based Private Membership Association. All content, systems, and offerings are made available exclusively to private members and are not offered to the public. Participation is governed by member user agreements and private jurisdiction. This site does not offer legal, financial, or public commercial services.
                        </p>
                        <p>
                            This website and its materials are intended solely for participants operating within a private association. Access is by alignment and private agreement only.
                        </p>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom d-flex justify-content-center">
                <p>© Copyrights 2025 Sovereo All rights reserved.</p>
            </div>
            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
            {isSuccessOpen && (
                <SuccessModal onClose={() => setIsSuccessOpen(false)} />
            )}
        </>

    );
}

