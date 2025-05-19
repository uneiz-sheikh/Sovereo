import { useEffect } from 'react';
import BannerImage from '../assets/Images/bannermap.png'
import WorldMap from '../assets/Images/map.png'
import JoinNow from '../Components/JoinNow'

const GlobalPresence = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="about about_banner">
                <section className="team-intro">
                    <div className="team-intro__content">
                        <p style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "500" }}>
                            We are redefining human potential worldwide.
                        </p>
                        <h2 style={{ marginBottom: '12px' }}>
                            Our Global Footprint
                        </h2>
                        <p>
                            With a strong presence across <strong> Latin America, North America, South America, and South Asia.</strong>
                        </p>
                    </div>

                    <div className="team-intro__side" style={{overflow: "hidden"}}>
                        <img
                            src={BannerImage}
                            alt="Team illustration"
                            className="team-intro__image"
                            style={{bottom: "-13px", width: "260px", height: "auto", left: "25%"}}
                        />
                    </div>
                </section>
            </div>

            <div className="map_wrp">
                <img src={WorldMap} loading='lazy' />
            </div>

            <div className="team_join">
                <JoinNow />
            </div>
        </>
    )
}

export default GlobalPresence
