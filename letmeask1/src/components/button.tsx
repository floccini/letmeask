import { useState } from "react";

export function Button(){

    //let counter = 0;
    const [counter, setCounter] = useState(0)

    function increment(){
        //counter += 1;
        setCounter(counter + 1);
        //console.log(counter);
    }

    return(
        <button onClick={increment}>
            {counter}
        </button>
    )
}

/*Utilizando propriedades
 type ButtonProps = {
    children?: string;
}

export function Button(props: ButtonProps){
    return(
        <button>{props.children || 'Default'}</button>
    )
}
*/
