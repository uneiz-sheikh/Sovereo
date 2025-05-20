
const cards = [
    {
        title: "Wealth & Influence",
        description:
            "Financial intelligence, high-status networking, and persuasion power.",
        imgAlt: "Wealth Icon",
        className: "wealth",
    },
    {
        title: "Leadership & Power",
        description:
            "Executive presence, elite decision-making, and influence mastery.",
        imgAlt: "Leadership Icon",
        className: "leadership",
    },
    {
        title: "Peak Performance",
        description: "Energy, biohacking, and extreme focus.",
        imgAlt: "Performance Icon",
        className: "performance",
    },
];

export default function SovereoFramework() {
    return (
        <div className="sovereo-wrapper inner_padding pb-5">
            <div className="header">
                <h2>
                    Master Every Aspect of Life — <br /> The Sovereo Framework
                </h2>
                <p className="hero-subtext">
                    The Science of Self-Mastery, <br /> Rebuild Your Identity, Reclaim
                    Your Power.
                </p>
            </div>

            <div className="card-grid">
                {cards.map((card, index) => (
                    <div className={`so_card ${card.className}`} key={index}>
                        <div className="card_body">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-grid">
                <div className="so_card freedom">
                    <div className="card_body">
                        <h3>Freedom & Lifestyle Design</h3>
                        <p>Travel, autonomy, and high-value
                            experiences.
                        </p>
                    </div>
                </div>
                <div className="so_card legacy">
                    <div className="card_body">
                        <h3>Legacy & Impact</h3>
                        <p>Building generational success and
                            creating a lasting mark.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero-buttons">
                <button className="schedule-btn mx-auto mt-2" style={{maxWidth: "325px", border: "1px solid #fff"}}>Get Access to Sovereo Blueprint</button>
            </div>
        </div>
    );
}
