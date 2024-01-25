import react,{useState} from 'react'

function Login(){
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const[userErr,setUserErr] = useState(false);
    const[passErr, setPassErr] = useState("");

    function loginHandle(e){

        (user || password <3)?
        alert(" please type correct values")
        : alert("All good")

        e.preventDefault()
    }

    function userHandler(e){
        let item = e.target.value;
        item.length<3?
        setUserErr(true):
        setUserErr(false)

        setUser(item)
    }
    
    function passwordHandler(e){
        let item = e.target.value;
        item.length<3?
        setPassErr(true):
        setPassErr(false)

        setPassword(item)
    }

 
    return(

        <div>
            <h3>This is login Form</h3>
            <form onSubmit={loginHandle} >
                <input type="text" placeholder='enter you ID' onChange={userHandler} /> {userErr? <span>User not valid</span>:""} <br /><br />
                <input type="password" placeholder='enter password' onChange={passwordHandler} />{passErr? <span>Password not valid</span>:""}<br /><br />
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}
export default Login