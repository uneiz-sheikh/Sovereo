import { useEffect } from 'react';
import MiniBanner from '../assets/Images/Archives.png'
import JoinNow from '../Components/JoinNow';

const Documentation = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: 'Private Jurisdiction and Membership Use Notice',
            text: 'Sovereo operates as a Values-Based Private Membership Association. All resources, communication, systems, and invitations are made available exclusively to private members only. This site does not engage in public commerce, offer services to the general public, or function under state or federal jurisdiction. Participation is governed by: - Private contractual agreement - Member acknowledgment of voluntary entry - Use within a private, non-public context'
        },
        {
            title: 'About The Science of Self-Mastery (TSOSM)',
            text: 'The Science of Self-Mastery (TSOSM) is not a program — it is a transformation framework offered only to members of our Private Membership Association. By joining the TSOSM PMA, members gain: - Access to proprietary alignment systems for identity, decision-making and performance - Non-commercial participation in mentorship, strategy sessions, and frameworks designed to support sovereign living - Confidential support outside of institutional systems and public data collection All participation is: - Voluntary and private - Protected by the member agreement - Governed by the laws of private association, not corporate consumer policy'
        },
        {
            title: 'Available Documentation (Private Use Only)',
            text: 'The following resources may be made available to accepted members: - Member Use Agreement (PDF) - Values-Based Association Declaration - TSOSM Framework Overview - Non-Public Access Notice All documents are shared within a secure, private context and are not intended for public or commercial use.'
        },
        {
            title: 'Joining the TSOSM Private Membership Association',
            text: 'To join the TSOSM PMA: 1. Submit a private invitation request 2. Review and accept the Member Use Agreement 3. Fulfill any required donation or access steps 4. Operate within the guidelines of the association Membership is granted based on alignment and private review—not public application or payment alone.'
        },
        {
            title: 'Confidential Use Notice',
            text: 'This website and its materials operate within the protected scope of a private, non-public membership association. Nothing presented here is intended as legal, medical, tax, or psychological advice. By viewing or downloading documents, you agree to do so under private terms, outside the scope of the public domain.'
        }
    ];

    return (
        <>
            <div className="mini_banner">
                <div className="mini_banner_cont">
                    <h2>
                        Documentation & Member <br />
                        Governance
                    </h2>
                </div>
                <img src={MiniBanner} loading="lazy" />
            </div>
            <div className="tsosm-container">
                {sections.map((section, idx) => (
                    <div className="tsosm-section" key={idx}>
                        <h3>{section.title}</h3>
                        <p>{section.text}</p>
                    </div>
                ))}
            </div>
            <JoinNow />
        </>
    )
}

export default Documentation
