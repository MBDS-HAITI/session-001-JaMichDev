import { useEffect,useState } from "react";

function Test() {
    const [state,setState]=useState(0);
    console.log("Test component with rendered state",state);
    fetch('http://localhost:8010/api/courses')
    .then(responce=>responce.json())
    .catch(error=>console.error('Error fetching data:', error));

    return(
        <div onClick={()=>setState(state+1)}>
            Test component
            <button>Increment state {state}</button>
        </div>
    );
}

export {Test};