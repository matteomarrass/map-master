import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import CardGuessing from "../components/CardGuessing";

function StartGuessing(){
    return(
        <>
            <Link to='/'><img src={Logo} alt="Logo-quiz" className="logo-quiz" /></Link>
            <CardGuessing />
        </>
    )
}

export default StartGuessing;