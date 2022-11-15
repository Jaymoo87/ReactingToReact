import React from "react";
import { ReactDOM } from "react";
import Greet from './components/Greeter'



const App = () => {

    return( 
    <div>
        <Greet />
        <input type="button" value="Greeting" />
    </div>
)}

export default App;