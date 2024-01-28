import {useEffect,useState} from 'react'

function Effect(){
    const[count,setCount] = useState(0)

    useEffect(()=>{
        console.warn("Mitron ganno")
    })
    return(
        <div>
            <h1>meow {count}</h1>
            <button onClick={()=>setCount(count+1)}>Meow</button>
        </div>
    )
}

export default Effect;