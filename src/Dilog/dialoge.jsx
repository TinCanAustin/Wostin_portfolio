import { useState, useEffect } from 'react';
import { dialoges } from './dialoges';

import './dialoge.css'

let timer;

function Dialoge(){
    let [_index, increment] = useState(0);
    let [typer, setTyper] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    function indexIncrese(e) {
        if (e.code === "Space") {
            setTyper("");
            setCharIndex(0);
            increment(i => {
                if(i < (dialoges.length - 1)){
                    return i + 1;
                }else{
                    window.location.href = 'links';
                }
            });
        }
    }

    useEffect(
        ()=>{
            document.addEventListener("keydown", indexIncrese);
            return ()=>{
                document.removeEventListener("keydown", indexIncrese);
            }
    }, []);

    useEffect(
        ()=>{
            if (charIndex < dialoges[_index].dialoge.length) {
                const timeoutId = setTimeout(() => {
                    setTyper(prev => prev + dialoges[_index].dialoge[charIndex]);
                    setCharIndex(charIndex + 1);
                }, 50); // Adjust speed here
                return () => clearTimeout(timeoutId); // Clean up timeout
            }
        },
        [_index, typer, charIndex]
    )
    
    return(
        <div className="box">
            <div>
                <img src="/niko-background.png"/>
                <div className='Dialoge'>
                    <h3>{typer}</h3>
                    <img src={dialoges[_index].reaction}/>
                </div>
            </div>
            <div className='prompt'>
                <h3>[Click space to continue]</h3>
            </div>
        </div>
    );
}

export default Dialoge;