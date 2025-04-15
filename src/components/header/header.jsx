import React from "react";
import './header.css'

const Header = (params) => {
    const {nome, idade} = params;
    return(
        <>
            <div className="header">
                <h1>Olá, {nome}</h1>
            </div>
        </>
    )
}
export default Header;