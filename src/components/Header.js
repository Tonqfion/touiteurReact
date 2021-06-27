import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="bg-indigo-400 text-white" >
                <div className="container flex items-center justify-between mx-auto h-24">
                <div id="logo" className="">
                    TOUITEUR LE RETOUR
                </div>
                <h1 className="text-3xl">
                    Parce que c'est l'time de touiter again
                    yiha !
                </h1>
                </div>
            </header>
        )
    }
}

export default Header;