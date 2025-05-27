import { useEffect } from 'react';
// import MiniBanner from '../assets/Images/Archives.png'
import JoinNow from '../Components/JoinNow';

const Disclaimer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mini_banner">
                <div className="mini_banner_cont">
                    <h2>
                        Disclaimer
                    </h2>
                    <p className='text-white'>
                        Sovereo and The Science of Self-Mastery™ operate under a <br /> Private Membership Association for educational purposes only. 
                    </p>
                </div>
                {/* <img src={MiniBanner} loading="lazy" /> */}
            </div>
            <div className="tsosm-container">

                <div className="tsosm-section">
                    <h3>Official Disclaimer (TSOSM / Sovereo / PMA)</h3>
                    <p><strong>Legal and Educational Disclaimer</strong></p>
                    <p>
                        Sovereo operates as the public-facing platform for The Science of Self-Mastery™ (TSOSM) a private educational program administered through an unincorporated Private Membership Association (PMA) and governed under ecclesiastical trust jurisdiction.
                    </p>
                    <p>
                        The information provided through TSOSM, Sovereo, and affiliated materials is strictly for educational, research, and personal development purposes only.
                    </p>
                    <p>
                        We do not provide legal, financial, psychological, or medical advice. <br />
                        We are not attorneys, licensed therapists, or medical professionals. We are private educators and trustees offering jurisdictional education, lawful trust strategy, and identity transformation protocols rooted in Scripture, science, and lawful administrative process.
                    </p>
                    <p>
                        We do not diagnose, treat, or cure any psychological, mental, or physical disorder. Our frameworks draw upon validated psychological models for educational purposes only and are not a substitute for professional healthcare or licensed clinical services.
                    </p>
                    <p>
                        We explicitly reject all forms of sovereign citizen ideology, redemption theory, and pseudolegal remedy. Our teachings are grounded in truth-based estate education, lawful administrative remedy, and spiritual alignment under divine jurisdiction.
                    </p>
                    <p>
                        Participation in TSOSM or engagement with Sovereo resources signifies your agreement to operate under private membership and ecclesiastical trust protection, and to hold harmless the educators, trustees, and affiliated entities from all public, commercial, or statutory claims.
                    </p>
                </div>

            </div>
            <JoinNow />
        </>
    )
}

export default Disclaimer
