import { useEffect } from "react";

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className="blog_wrp" style={{ backgroundColor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "90dvh", borderBottom: "1px solid #fff" }}>
                <h1 className="text-white">
                    Comig Soon
                </h1>
            </div>
        </>
    )
}

export default Blog
