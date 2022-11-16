import react from 'react';
import { ReactDOM } from 'react';



const Greet = props => {



    return( 
    <div>
        <h1 className= 'text-center'>{props.greeting} {props.name}</h1>
        
        <ul></ul>
    </div>
)}

export default Greet;