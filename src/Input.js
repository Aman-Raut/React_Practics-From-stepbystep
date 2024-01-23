import React,{useState} from "react";

function Input(){
const[data,setData] =useState(null)
const[print,setPrint] = useState(false)
    function getData(val)
    {
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <div>
    <h2>Give you favourable input here</h2>
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)}> Print Me </button>
        {
            print?
            <h3>{data}</h3>
            :null
        }
        
</div>
    )
}
export default Input;