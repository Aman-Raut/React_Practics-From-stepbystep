import React,{useState} from "react";

function Toggle(){
    const[status,setStatus] = useState(true)

    return(
        <div>
            {/* <button onClick={()=>setStatus(false)} >Hide</button>
            <button onClick={()=>setStatus(true)} >Show</button> */}

            <button onClick={()=>setStatus(!status)} >Toggle</button>
            {
                status?
                <h2>Status is Shown, tap toggle to hide</h2>
                : <h2>Status is hidden, tap toggle to show</h2>
            }

        </div>
    )
}
export default Toggle