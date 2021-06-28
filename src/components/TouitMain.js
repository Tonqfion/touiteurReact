import React from "react";
import TouitContainer from "./TouitContainer";

class TouitMain extends React.Component {
    render() {
        return (
            <section className="w-8/12 flex flex-col items-center mx-8">
                <h2 className="text-gray-700 text-2xl font-semibold mt-4">Les touits</h2>
            <TouitContainer/>
            </section>
        )
    }
}

export default TouitMain;