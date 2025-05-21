import TeamMember1 from "../assets/Images/teammember1.png";
import TeamMember2 from "../assets/Images/teammember2.png";
import TeamMember3 from "../assets/Images/teammember3.png";
import TeamMember4 from "../assets/Images/teammember4.png";

const teamMembers = [
    {
        name: "Dr. Todd Allyn",
        title: "Founder & Strategic Architect – Global Identity Systems",
        bio: `Dr. Todd Allyn is a transformation strategist with 25+ years of experience helping individuals and organizations achieve clarity, alignment, and lasting results. As founder of Sovero and The Science of Self-Mastery (TSOSM), he builds frameworks that empower leaders to overcome confusion and lead with purpose.`,
        image: TeamMember1
    },
    {
        name: "Hader Palacios",
        title: "Director – Latin America Expansion & Identity Integration",
        bio: `Hader Palacio is an identity strategist and transformational guide leading Sovero’s work across Latin America. With 15 years of experience in youth development and leadership, he helps individuals and families unlock clarity, purpose, and personal transformation through localized identity systems.`,
        image: TeamMember4,
    },
    {
        name: "Seemant Vadnere",
        title: "Director – Asian Operations & Strategic Execution",
        bio: `Seemant is a systems thinker who drives Sovero’s growth across Asia. With expertise in AI-driven strategy, product innovation, and user experience, he transforms complex challenges into scalable solutions. His frameworks empower Asian leaders to thrive.`,
        image: TeamMember2,
    },
    {
        name: "Reginald Holmes",
        title: "Director – North America Strategy & Stabilization",
        bio: `Reginald Holmes blends executive clarity with grassroots leadership to lead Sovero’s stabilization efforts across North America. With deep experience in human performance and trauma healing, he facilitates identity realignment frameworks that restore stability in high-pressure environments.`,
        image: TeamMember3,
    },
];

export default function TeamPage() {
    return (
        <section className="team-page">
            <h2 className="team-heading">Meet the Visionaries Behind Sovero</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="team-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="team-info">
                            <h3>{member.name}</h3>
                            <h5>{member.title}</h5>
                            <p>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
