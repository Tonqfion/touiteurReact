import React from "react";
import TouitAPI from "../api/TouitAPI";

class Trending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "words" : []
        }
    }


    componentDidMount() {
        TouitAPI.getTrending(resp => {
            this.setState( {
                "words": Object.entries(resp).map(([k,v]) => ({"key" : k, "value":v})).sort((a,b) => b.value - a.value).slice(0,10)
            })

        })
    }

    render() {
        const {words} = this.state
        return (
            <div
                className="bg-indigo-400 text-white flex flex-col w-full items-center justify-around py-4 rounded-xl tracking-wide shadow-lg">
                <h2 className="text-2xl font-semibold">Les mots qui trendent</h2>
                <div className="flex flex-wrap justify-center">
                    {words.map(word => <span key={word.key} className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">{word.key}</span>)}

                </div>
            </div>
        )
    }
}

export default Trending;