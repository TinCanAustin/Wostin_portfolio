import { useState, useEffect } from 'react';   

import './links.css'

function Links(){
    const [logoIndex, changeIndex] = useState(0);

    const links = [
        "https://github.com/TinCanAustin",
        "https://tincanaustin.itch.io/",
        "https://www.youtube.com/@TinCan420"
    ]

    function indexIncrese(e) {
        if (e.code == "ArrowRight") {
            changeIndex(i => {console.log(i); return (i < 2) ? i + 1 : 0});
        }else if(e.code == "ArrowLeft"){
            changeIndex(i => {console.log(i); return (i > 0) ? i - 1 : 2});
        }
    }

    function enter(e){
        if(e.code == "Enter"){
            window.location.href = links[logoIndex];
        }
    }

    useEffect(
        ()=>{
            document.addEventListener("keydown", indexIncrese);
            document.addEventListener("keydown", enter);

            return ()=>{
                document.removeEventListener("keydown", indexIncrese);
                document.removeEventListener("keydown", enter);
            }
    }, []);

    return(
        <>
            <div className='body'>
                <div className='images'>
                    <img src="/github.svg" id="git" className={logoIndex == 0 ? "slide" : "slide slide-hide"}/>
                    <img src="/itch.io.svg" id='itch' className={logoIndex == 1 ? "slide" : "slide slide-hide"}/>
                    <img src="/youtube.svg" id='you' className={logoIndex == 2 ? "slide" : "slide slide-hide"}/>
                </div>
                <a href={links[logoIndex]} className='link'>[{links[logoIndex]}]</a>
            </div>
        </>
    );
}

export default Links;