import { useEffect } from 'react';
import MiniBanner from '../assets/Images/faq.png'
import JoinNow from '../Components/JoinNow';
import Accordion from '../Components/faqAccordian';

const FaqPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mini_banner faq_banner">
                <div className="mini_banner_cont">
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <p>
                        Get clear answers to common questions about our systems, science, <br /> and what makes TSOSM™ uniquely effective.
                    </p>
                </div>
                <img src={MiniBanner} loading="lazy" />
            </div>
            <Accordion />
            <JoinNow />
        </>
    )
}

export default FaqPage
