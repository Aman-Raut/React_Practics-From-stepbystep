import React,{useState, useRef} from "react";

function HighOrderCnt(){
    return(
        <>
        <h1>Hoc</h1>
        <HOCred cmp={Counter} />
        <HOCgreen cmp={Counter2} />
        </>
    )
};
function HOCred(props){
    return(
        <>
        <h3 style={{backgroundColor:'red', width:150}} > <props.cmp /> </h3>
        </>
    )
};
function HOCgreen(props){
    return(
        <>
        <h3 style={{backgroundColor:'green', width:150}} > <props.cmp /> </h3>
        </>
    )
};

function Counter(){
    const[count,setCount] = useState(0)
    return(
        <div>
        <h3>HOC Counter : {count}</h3>
        <button onClick={()=>setCount(count+1)} >Update</button>
        </div>
    )
}
function Counter2(){
    const[count,setCount] = useState(1)
    return(
        <div>
        <h3>HOC Counter : {count}</h3>
        <button onClick={()=>setCount(count*2)} >Update</button>
        </div>
    )
}


export default HighOrderCnt;