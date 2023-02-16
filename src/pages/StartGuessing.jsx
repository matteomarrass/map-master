import React from "react";
import Logo from '../img/logo.png';
import CardGuessing from "../components/CardGuessing";

function StartGuessing(){
    return(
        <>
            <img src={Logo} alt="Logo-quiz" className="logo-quiz" />
            <CardGuessing />
        </>
    )
}

export default StartGuessing;