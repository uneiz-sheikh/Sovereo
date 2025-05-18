import React, { useState } from 'react';

interface GlossaryItem {
    term: string;
    definition: string;
}

const glossaryData: GlossaryItem[] = [
    // A
    {
        term: "Analysis Paralysis",
        definition: "Analysis paralysis is a common term in decision- making and problem - solving.It refers to the state of over - analyzing or over - thinking a situation to the extent that a decision or action is delayed or never taken."
    },
    {
        term: "Appreciative Inquiry",
        definition: "Appreciative Inquiry (AI) is a positive approach to organisational change and leadership. Instead of focusing on problems, AI looks for what is working well and builds on those strengths."
    },
    {
        term: "Authoritarian Leadership",
        definition: "Authoritarian Leadership is a style where a leader makes decisions without much input from others. This leader tends to give orders and expects them to be followed without question. "
    },
    {
        term: "Active Listening",
        definition: "Active listening is a way of communicating in which you fully focus on what someone is saying. It involves hearing someone’s words and truly understanding the speaker’s intent and feelings."
    },
    {
        term: "Adaptability Quotient",
        definition: "Adaptability Quotient (AQ) refers to an individual’s ability to adjust and thrive in a changing environment. It measures how effectively someone can respond to new situations"
    },
    {
        term: "Aversive Reinforcement",
        definition: "Aversive reinforcement, also known as aversive conditioning, is a technique for stopping unwanted behaviours by making them unpleasant."
    },

    // B
    { term: "Brainstorming", definition: "Generating many creative ideas quickly in a group." },
    { term: "Bias for Action", definition: "A strong inclination to act quickly without overthinking." },
    { term: "Benchmarking", definition: "Comparing performance to best-in-class practices." },
    { term: "Backlog Grooming", definition: "Prioritizing and refining the product backlog." },
    { term: "Behavioral Economics", definition: "How psychology impacts economic decision-making." },
    { term: "Business Agility", definition: "The ability of a business to adapt quickly to market changes." },

    // C
    { term: "Critical Thinking", definition: "Objective analysis and evaluation of an issue to form a judgment." },
    { term: "Change Agent", definition: "A person who helps an organization transform by driving change." },
    { term: "Customer Centricity", definition: "Placing the customer at the core of all decisions." },
    { term: "Continuous Improvement", definition: "Ongoing efforts to improve products or processes." },
    { term: "Cross-functional Team", definition: "A team composed of members from different departments." },
    { term: "Communication Skills", definition: "The ability to convey information effectively." },

    // D
    { term: "Design Thinking", definition: "Creative problem-solving focused on user needs." },
    { term: "Decision Matrix", definition: "A tool to evaluate and prioritize different options." },
    { term: "Delegation", definition: "Assigning responsibility to others to complete tasks." },
    { term: "Data Literacy", definition: "Understanding and using data effectively in decisions." },
    { term: "Deep Work", definition: "Focused work without distraction for high productivity." },
    { term: "Digital Transformation", definition: "Adopting digital technologies to improve business." },

    // E
    { term: "Emotional Intelligence", definition: "Recognizing and managing emotions in yourself and others." },
    { term: "Empowerment", definition: "Giving people authority and confidence to make decisions." },
    { term: "Efficiency Ratio", definition: "A measure of operational efficiency." },
    { term: "Escalation Protocol", definition: "Steps to follow when an issue needs attention." },
    { term: "Ethical Leadership", definition: "Leading with integrity, fairness, and transparency." },
    { term: "Executive Summary", definition: "A brief overview of a document’s key points." },

    // F
    { term: "Feedback Loop", definition: "Using results as input to improve performance." },
    { term: "Flow State", definition: "A mental state of deep focus and immersion." },
    { term: "Foresight", definition: "Ability to anticipate future trends and consequences." },
    { term: "Facilitation Skills", definition: "Helping groups work together effectively." },
    { term: "Fail Fast", definition: "Testing ideas quickly and learning from failure." },
    { term: "Functional Expertise", definition: "Deep knowledge in a specific area or discipline." },
];

const Glossary: React.FC = () => {
    const [search, setSearch] = useState('');
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [expandedGroups, setExpandedGroups] = useState<{ [letter: string]: boolean }>({});

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setSelectedLetter(null);
    };

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
        setSearch('');
    };

    const toggleExpand = (letter: string) => {
        setExpandedGroups((prev) => ({
            ...prev,
            [letter]: !prev[letter],
        }));
    };

    const filtered = glossaryData.filter((item) => {
        if (search) {
            return item.term.toLowerCase().includes(search.toLowerCase());
        } else if (selectedLetter) {
            return item.term.toUpperCase().startsWith(selectedLetter);
        }
        return true;
    });

    const grouped: { [key: string]: GlossaryItem[] } = {};
    filtered.forEach((item) => {
        const letter = item.term[0].toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(item);
    });

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="glossary-container">
            <div className="input_wrp">

                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search for words"
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />

                <div className="alphabet-index">
                    {alphabet.map(letter => (
                        <span
                            key={letter}
                            className={`alphabet-letter ${selectedLetter === letter ? 'active' : ''}`}
                            onClick={() => handleLetterClick(letter)}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>


            {Object.entries(grouped).map(([letter, items]) => {
                const isExpanded = expandedGroups[letter];
                const visibleItems = isExpanded ? items : items.slice(0, 3);

                return (
                    <div key={letter} className='alpha_wrp'>
                        <div className="results-label">#{letter}</div>
                        <div className="card_srp">

                            <div className="cards">
                                {visibleItems.map((item, idx) => (
                                    <div key={idx} className="card">
                                        <h3>{item.term}</h3>
                                        <p>{item.definition}</p>
                                        <a href="#" className="read-more">Read more →</a>
                                    </div>
                                ))}

                            </div>
                            {items.length > 3 && (
                                <button className="load-more-btn" onClick={() => toggleExpand(letter)}>
                                    {isExpanded ? 'Show Less' : 'Load More'}
                                </button>
                            )}
                        </div>


                    </div>
                );
            })}

            {filtered.length === 0 && <p>No results found.</p>}
        </div>
    );
};

export default Glossary;
