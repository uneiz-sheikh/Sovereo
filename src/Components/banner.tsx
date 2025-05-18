import Todd from "../assets/Images/Todd Allyn 2.png"

const Banner = () => {
    return (
        <div className="hero-container ">
            <div className="hero-left">
                <div className="hero-tags">
                    <span>Power</span>
                    <span>✦</span>
                    <span>Prestige</span>
                    <span>✦</span>
                    <span>Precision</span>
                </div>
                <h1 className="hero-title">
                    You Weren’t Designed to Survive<br />
                    You Were Meant to Build
                </h1>
                <p className="hero-subtext">
                    The Science of Self-Mastery.<br />
                    Rebuild Your Identity, Reclaim Your Power.
                </p>
                <div className="hero-buttons">
                    <div className="shedule_btn_wrp">
                        <button className="schedule-btn">Schedule 1:1</button>
                    </div>
                    <button className="btn dark">Download Mastery Blueprint</button>
                </div>
            </div>
            <div className="hero-right">
                <img
                    src={Todd}
                    alt="Man holding newspaper"
                    className="hero-image"
                />
            </div>
        </div>
    );
};

export default Banner;
