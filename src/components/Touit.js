import React from "react";

class Touit extends React.Component {
    render() {
        const {name, message} = this.props;
        return (
            <article className="flex justify-center bg-indigo-400 m-2 p-3 text-white rounded-lg">
                <h3 className="font-extrabold mx-2">
                    {name} :
                </h3>
                <p className="mx-2">
                    {message}
                </p>
            </article>
        )
    }
}

export default Touit;