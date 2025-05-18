import { useEffect } from 'react';
import BannerImage from '../assets/Images/aboutbottom.png'
import JoinNow from '../Components/JoinNow'
import TeamPage from '../Components/Team'

const OurTeam = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="about_banner">
                <section className="team-intro">
                    <div className="team-intro__content">
                        <h2>The Leadership Behind the Mission</h2>
                        <h4>At Sovero, we don't build through titles</h4>
                        <p>
                            We build through alignment. Our structure is not corporate or
                            hierarchical. It’s a values-driven network of visionary stewards,
                            regional directors, and system architects, united by a shared mission
                            of identity transformation and sovereign living. Each leader serves
                            independently, bringing deep cultural understanding, legacy thinking,
                            and structural intelligence to every layer of our work. We prioritize
                            self-mastery, local relevance, and high-trust collaboration—not
                            payrolls, titles, or contracts.
                        </p>
                    </div>

                    <div className="team-intro__side">
                        <p className="team-intro__side-note">
                            Sovero Team Page – Leadership Bios<br />
                            PMA Compliant & Professionally Formatted
                        </p>
                        <img
                            src={BannerImage}
                            alt="Team illustration"
                            className="team-intro__image"
                        />
                    </div>
                </section>
            </div>
            <TeamPage />
            {/* <section className="legal-notice">
                <div className="legal-label">Legal Notice*</div>
                <div className="legal-text">
                    Sovero operates as a Values-Based Private Membership Association. All directors and collaborators serve within private capacity, under voluntary alignment—not employment contracts. Participation in Sovero operations is governed by private jurisdiction, member use agreements, and non-public association standards.
                </div>
            </section> */}
            <div className="team_join">
                <JoinNow />
            </div>

        </>
    )
}

export default OurTeam
