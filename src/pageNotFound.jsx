import { useEffect } from "react";

function PageNotFound(){
    const style = {
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -5  0%)",
        fontSize: "2vw"
    }

    function exit(e){
        window.location.href = "/";
    }

    useEffect(
        ()=>{
            document.addEventListener("keydown", exit);

            return ()=>{
                document.removeEventListener("keydown", exit);
            }
    }, []);

    return <p style={style}>N o</p>
}

export default PageNotFound;