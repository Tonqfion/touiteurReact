import React from "react";
import Touit from "./Touit";
import TouitAPI from "../api/TouitAPI";

class TouitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "touits" : []
        }
    }

    componentDidMount() {
        TouitAPI.getTouits(resp => {
            this.setState( {
                "touits" : resp.messages
            })
        })
    }

    render() {
        const {touits} = this.state;
        return (
            <div className="flex flex-row-reverse flex-wrap-reverse justify-around">
                {touits.map(t => <Touit key={t.id} {...t} />)}
            </div>
        )
    }
}

export default TouitContainer;