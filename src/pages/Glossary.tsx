import { useEffect } from 'react';
import MiniBanner from '../assets/Images/Character.png'
import JoinNow from '../Components/JoinNow';
import GlossaryItem from '../Components/GlossaryItem';

const Glossary = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mini_banner faq_banner Glossary">
                <div className="mini_banner_cont">
                    <h2>
                        Glossary
                    </h2>
                    <p>
                        Your go-to resource for to understand key terms and concepts that
                        <br />
                        shape effective leadership and productive work environments.
                    </p>
                </div>
                <img src={MiniBanner} loading="lazy" />
            </div>
            <GlossaryItem />
            <div className="team_join">
                <JoinNow />
            </div>
        </>
    )
}

export default Glossary
