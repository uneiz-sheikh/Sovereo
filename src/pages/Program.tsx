import BannerImage from '../assets/Images/progmabanner.png'
import JoinNow from '../Components/JoinNow'
import Fram from '../assets/Images/newfram.png'
import ComparisonSection from '../Components/comparision'
import { useEffect } from 'react'

const Program = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="about_banner" style={{ backgroundColor: "#1A1917" }}>
                <section className="team-intro">
                    <div className="team-intro__content" style={{ borderColor: "white" }}>
                        <p style={{ color: "#FFE685", marginBottom: "8px" }}>
                            Beyond Motivation. Into Mastery.
                        </p>
                        <h2 className='text-white'>
                            Why TSOSM™ Stands <br />
                            Alone in Human<br />
                            Transformation
                        </h2>
                        <p className='text-white'>
                            While other programs touch on surface-level growth, TSOSM™ (The Science of Self-Mastery) offers a comprehensive, neuroscience-backed system designed for deep identity reconstruction, sovereign leadership, and lasting transformation.
                        </p>
                    </div>

                    <div className="team-intro__side ps-3" style={{ alignItems: "start" }}>
                        <p className="team-intro__side-note text-white ps-sm-5" style={{ textAlign: "left" }}>
                            We don’t motivate. We restructure <br /> human architecture.
                        </p>
                        <img
                            src={BannerImage}
                            alt="Team illustration"
                            className="team-intro__image"
                            style={{ width: "245px", bottom: "0px", left: "100px" }}
                        />
                    </div>
                </section>
            </div>

            <div className="devlopment_fram">
                <p>
                    Comparative Matrix:
                </p>
                <h2>
                    TSOSM™ VS. Leading Personal Development Frameworks
                </h2>
                <img src={Fram} loading='lazy' />
            </div>

            <ComparisonSection />

            <div className="team_join">
                <JoinNow />
            </div>
        </>
    )
}

export default Program
