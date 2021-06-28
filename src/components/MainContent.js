import React from "react";
import SideBar from "./SideBar";
import TouitMain from "./TouitMain";

class MainContent extends React.Component {
    render() {
        return (
            <main>
                <div className="container mx-auto flex">
                <SideBar/>
                <TouitMain/>

                </div>
            </main>
        )
    }
}

export default MainContent;