import React from "react";
import {Table} from 'react-bootstrap'

function Map(){

const users = [
    {name: 'Aman', email: 'aman@gmail.com', contact:'987'},
    {name: 'Pranjal', email: 'pranjal@gmail.com', contact:'876'},
    {name: 'Amandeep', email: 'deep@gmail.com', contact:'678'},
    {name: 'guru', email: 'guru@gmail.com', contact:'567'},

]
    return(
       <div>
        <h2>List with Bootstrap Table </h2>
        <Table striped variant="dark" > <tbody>
                <tr>
                    <td>Name </td>
                    <td>Email </td>
                    <td>Contact </td>
                </tr>    
            {
                users.map((item,i)=>
                
                <tr key={i}>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.contact} </td>
                </tr>
                )
            }   
            </tbody > 
            </Table>     
       </div>
    );
}

export default Map;