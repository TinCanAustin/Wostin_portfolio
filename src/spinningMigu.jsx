function SpinningMigu(){
    function redirect(){
        window.location.href = "https://www.youtube.com/watch?v=UIp6_0kct_U";
    }

    return(
        <img src="/miku-hatsune.gif" height={80} onClick={redirect}/>
    );
}

export default SpinningMigu;