

const comparisons = [
    {
        title: "TSOSM vs Tony Robbins",
        content:
            "Tony Robbins is a master motivator, but TSOSM goes beyond emotion. – Tony gives you emotional breakthroughs—TSOSM gives you nervous system rewiring. – Tony teaches mindset—TSOSM builds identity using neuroscience, biology, and execution frameworks. – TSOSM replaces peak states with permanent self-command.",
    },
    {
        title: "TSOSM vs Huberman Lab",
        content:
            "Andrew Huberman brings cutting-edge science—but TSOSM makes it personal and transformational. – Huberman teaches knowledge—TSOSM gives you applied protocols. – Huberman helps you understand brain science—TSOSM trains you to master your biology and behavior. – TSOSM integrates neuroscience into identity, not just performance.",
    },
    {
        title: "TSOSM vs Mindvalley",
        content:
            "Mindvalley delivers flashy content and metaphysics—TSOSM delivers identity-rooted change. – Mindvalley teaches “abundance thinking”—TSOSM trains wealth identity and execution. – Mindvalley leans on mysticism—TSOSM builds legacy based on values, structure, and biology. – TSOSM turns potential into protocol and fluff into results.",
    },
    {
        title: "TSOSM vs Goggins/SEAL Mindset",
        content:
            "David Goggins teaches extreme toughness—TSOSM teaches strategic resilience. – Goggins trains grit—TSOSM trains grit, recovery, breath, and endurance psychology. – Goggins breaks comfort—TSOSM builds structure that transforms pressure into purpose. – TSOSM doesn’t just make you hard—it makes you whole.",
    },
    {
        title: "TSOSM vs Landmark Forum",
        content:
            "Landmark teaches self-awareness through language—TSOSM builds a new identity through science. – Landmark creates cognitive insight—TSOSM installs neurological, biological, and emotional frameworks. – Landmark may deconstruct beliefs—TSOSM reconstructs purpose, execution, and authority. – TSOSM builds the man or woman who can lead, love, and leave legacy.",
    },
];

const ComparisonSection = () => {
    return (
        <div className="comparison-container">
            <h1 className="comparison-heading">
                Most personal development programs promise change. TSOSM delivers total transformation.
            </h1>
            <div className="comparison-grid">
                {comparisons.map((item, index) => (
                    <div key={index} className="comparison-card">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-content">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonSection;
