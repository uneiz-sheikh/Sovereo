import { useEffect } from "react";
import JoinNow from "../Components/JoinNow"

const JoinPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mini_banner">
                <div className="mini_banner_cont">
                    <h2>
                        Join the Sovereo Circle
                    </h2>
                    <p className="text-white" style={{ fontSize: "20px" }}>
                        Step into a world of exclusive insights, early access, and powerful connections. <br /> Become part of a community where innovation meets opportunity.
                    </p>
                </div>
                {/* <img src={MiniBanner} loading="lazy" /> */}
            </div>
            <div className="team_join">
                <JoinNow />
            </div>
        </>
    )
}

export default JoinPage
