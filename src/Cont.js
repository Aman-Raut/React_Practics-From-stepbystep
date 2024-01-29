import react,{useState} from 'react';

function Cont(){

    let[val,setVal] = useState("")
    return(
        <>
        <h1>Controlled Components</h1>
        <input type="text" placeholder='hello' value={val} onChange={(e)=>setVal(e.target.value)} />
        <h3>Typed: {val}</h3>
        </>
    )
}

export default Cont;