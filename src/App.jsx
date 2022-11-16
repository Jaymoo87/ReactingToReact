import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Greet from './components/Greeter'
import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
    const [loaded, setLoaded] = useState(false)
    const [username, setUsername] = useState(" ");

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000)
    })
 if (loaded === false) {
    return(
        <h2>Website loading...</h2>
    )
}
    const handleTextChange = e => {
        setUsername(e.target.value)
 }   
 return( 
    <div>
        <Greet greeting= "Hey Hey Hey, my name is" name= "Justin"/>
        <Greet greeting= "Hey there bud! My name is" name= "Jen"/>
        <Greet greeting= "I think my name is" name= "Jamie"/>
        <input value={username} onChange={handleTextChange} className="card" />
        <p>You are Logging in as: {username}</p>
    </div>
)}

export default App;