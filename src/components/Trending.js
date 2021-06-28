import React from "react";

class Trending extends React.Component {
    render() {
        return (
            <div className="bg-indigo-400 text-white flex flex-col w-full items-center justify-around py-4 rounded-xl tracking-wide shadow-lg">
                <h2 className="text-2xl font-semibold">Les mots qui trendent</h2>
                <div className="flex flex-wrap justify-center">
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                    <span className="m-4 p-2 bg-red-400 rounded transition duration-300 ease-in-out hover:bg-blue-600">#Carotte</span>
                </div>
            </div>
        )
    }
}

export default Trending;