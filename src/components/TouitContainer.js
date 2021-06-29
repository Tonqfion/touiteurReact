import React from "react";
import Touit from "./Touit";
import TouitAPI from "../api/TouitAPI";

class TouitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "touits" : []
        }
        this.lastTimeStamp = 0;
    }

    refresh = () => {
        TouitAPI.getTouits(this.lastTimeStamp, resp => {
            if (resp.messages.length > 0) {
                this.setState({
                    "touits": [...this.state.touits, ...resp.messages]
                });
            }
            this.lastTimeStamp = resp.ts;
        });
    };

    componentDidMount() {
        this.intervalID = setInterval(this.refresh, 1000);
    }

    componentWillUnmount() {
        if (this.intervalID !== false){
            clearInterval(this.intervalID)
            }
        }


    render() {
        const {touits} = this.state;
        return (
            <div className="flex flex-wrap justify-around">
                {touits.sort((a,b) => b.ts - a.ts).map(t => <Touit key={t.id} {...t} />)}
            </div>
        )
    }
}

export default TouitContainer;