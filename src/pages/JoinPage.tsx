import JoinNow from "../Components/JoinNow"

const JoinPage = () => {
    return (
        <>
            <div className="mini_banner">
                <div className="mini_banner_cont">
                    <h2>
                        Join Our Circle 
                    </h2>
                    <p className="text-white" style={{fontSize: "20px"}}>
                        Join the Sovero Circle Unlock
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
