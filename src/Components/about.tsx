import BannerImage from '../assets/Images/hands.png'
import JoinNow from './JoinNow'
import Invitation from '../assets/Images/Collaboration.png'
import Collab from '../assets/Images/collab.png'

const About = () => {
    return (
        <>
            <div className="about about_banner">
                <section className="team-intro">
                    <div className="team-intro__content">
                        <h2>Empowering Private
                            Transformation Through
                            Sovereign Structure
                        </h2>
                        <h4>Sovereo is not a company — it’s a movement.</h4>
                        <p>
                            We deliver private transformation systems that combine elite leadership training, identity rebuilding, and high-impact human development. Operating outside conventional corporate and governmental frameworks, we believe transformation should be guided by purpose, not profits.
                        </p>
                    </div>

                    <div className="team-intro__side">
                        <p className="team-intro__side-note ps-5 w-xl-75">
                            Our flagship system, The Science of Self-Mastery™ (TSOSM), is a private, invitation-only framework designed to help individuals rebuild identity, restructure decision-making, and reclaim sovereignty across all areas of life.
                        </p>
                        <img
                            src={BannerImage}
                            alt="Team illustration"
                            className="team-intro__image"
                        />
                    </div>
                </section>
            </div>
            <section className="invitation-wrapper">
                <div className="invitation-top">
                    <div className="invitation-graphic">
                        <img src={Collab} alt="Handshake Graphic" />
                        <p>
                            All programs, leadership appointments, and member interactions are
                            conducted through a “non-commercial, lawful, and private framework”.
                            We do not operate as a business or service provider in the public
                            domain.
                        </p>
                    </div>
                    <div className="invitation-message">
                        <h2>
                            Sovero serves as a public-facing <br /> platform supporting a private
                            network of transformational systems.
                        </h2>
                        <p>
                            All programs, leadership appointments, and member interactions are
                            conducted through a “non-commercial, lawful, and private framework”.
                            We do not operate as a business or service provider in the public
                            domain.
                        </p>
                    </div>
                </div>
            </section>
            <div className="invitation_sec">
                <div className="inti_conta">
                    <h2>By Invitation Only</h2>
                    <p>
                        TSOSM and its affiliated systems are not for sale to the public. Access is granted only to members who resonate with the mission and are accepted through our private application process. We are not open for business. We are open for alignment.
                    </p>
                </div>
                <div className="invi_img_sec">
                    <img src={Invitation} loading='lazy' />
                    <p>
                        To request consideration, you may submit a private inquiry through our contact portal.
                    </p>
                </div>
            </div>
            {/* <section className="legal-notice" style={{ backgroundColor: "#1A1917" }}>
                <div className="legal-label text-white border-white" style={{ minWidth: "350px" }} >
                    LEGAL AUTHORITY<br />
                    FOOTER (site-wide)
                </div>
                <div className="legal-text text-white">
                    Sovereo operates as the public interface for private transformational systems administered under lawful private jurisdiction. All engagements are governed by ecclesiastical and private trust principles. We do not operate as a public business, and no part of this site constitutes commercial solicitation or public offer. Participation is by private membership and by invitation only.
                </div>
            </section> */}

            <JoinNow />

        </>
    )
}

export default About
