// import Todd from "../assets/Images/Todd Allyn 2.png"
import Video from "../assets/Images/vide.mp4"
import DownloadModal from "./modal";
import SuccessModal from "./successModel";
import { useState } from "react";

const Banner = () => {

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
                        You Weren’t Designed to Survive <br />
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
                        <button
                            className="btn dark"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Download Mastery Blueprint
                        </button>
                    </div>
                </div>
                <div className="hero-right">
                    <video src={Video} controls autoPlay muted loop className="h-auto rounded-lg" />
                </div>
                {/* <div className="hero-right">
                    <img
                        src={Todd}
                        alt="Man holding newspaper"
                        className="hero-image"
                    />
                </div> */}
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
};

export default Banner;
