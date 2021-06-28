import React from "react";
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";

class SideBar extends React.Component {
    render() {
        return (
            <aside className="w-4/12 flex flex-col items-center">
                <SendMessageForm/>
                <Trending/>
            </aside>
        )
    }
}

export default SideBar;