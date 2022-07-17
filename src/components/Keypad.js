import react from "react"
// Code Keypad Component Here

function Keypad () {
    return <div>
        <input
            type="password"
            name="password"
            onChange={() =>(console.log("Entering password..."))} />

    </div>
}

export default Keypad