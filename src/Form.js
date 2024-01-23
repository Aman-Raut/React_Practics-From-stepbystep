import React,{useState} from "react" 

function Form(){
const[name,setName] = useState("");
const[tnc, setTnc] = useState(false);
const[interest, setInterest] = useState("");

    function getFormData(e){
        console.log(name,tnc,interest)
        e.preventDefault()
    }


    return(
        <div>
            <h2> **If you like this web page <br /> Fill the react form</h2>
            <form onSubmit={getFormData}>
            <input type="text" placeholder="FullName" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Marvel</option>
                <option>DC</option>
                <option>Anime</option> <br /><br />
            </select>
                <br /><br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept THe terms and conditions</span>
            <br />
            <button type="submit">Submit</button>
            <button>Clear</button>
        </form>
        </div>

    )
}
export default Form;