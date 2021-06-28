import React from "react";

class SendMessageForm extends React.Component {
    render() {
        return (
            <form className="flex flex-col m-4 p-4 bg-red-400 text-white w-full rounded-lg">
                <label  className="italic flex flex-col" htmlFor="touit-input"> Tapez votre touit ci-dessous
                <textarea className="w-full p-2 text-black rounded-lg h-36 resize-none my-2" id="touit-input" /></label>
                <input className="cursor-pointer self-center p-2 rounded-lg w-4/12 m-2 bg-indigo-400" type="submit" value="ENVOYER" />
            </form>
        )
    }
}

export default SendMessageForm;