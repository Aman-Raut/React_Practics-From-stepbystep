import {useState} from 'react'
import './App.css';
import Fun from './Fun';
import Student from './Student'
import Input from './Input'
import Toggle from './Toggle'
import Form from './Form';


function App() {
const [data,setData]= useState(0)

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
    </div>
  )
}

export default App;
