import {useState} from 'react'
import './App.css';
import Fun from './Fun';
import Student from './Student'
import Input from './Input'
import Toggle from './Toggle'
import Form from './Form';
import Login from './Login';
import User from './User'
import Effect from './Effect';
import Map from './Map'


function App() {
const [data,setData]= useState(0);
const[name,setName] = useState("Aman")

function updateData(){
  setData(data+1)
}

  return (
    <div className="App">
      <Student name={"Aman"} Email ={"amanraut13@gmail.com "} />
      <Student name ={"Manu"} />
      <h1>{data} </h1>
      <button onClick={updateData}>Tap to add</button>
      <Input />
      <Toggle />
      <Form />
      <Login />
      <Effect />
      <User name={name} />
      <button onClick={()=>setName("Aman Raut")}>Update Name</button>
      <Map />
    </div>
  )
}

export default App;
