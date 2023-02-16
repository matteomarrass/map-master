import React from "react";
import Logo from '../img/logo.png';
import { Link } from "react-router-dom";
import '../app.css'
import StartGuessing from "./StartGuessing";

function Homepage(){
    return(
        <div className="homepage">
            <h2>Benvenuto! </h2>
            <img src={Logo} alt='logo-map-master'/>
            <h2>Clicca sul bottone per iniziare!</h2>
            <Link to='startguessing'><button>Inizia! 🌍</button> </Link>
        </div>
    )
}

export default Homepage;