import react, {Component} from 'react';

class User extends Component {

    render(){
        console.warn("Render Methhod" ,this.props)
       return(
        <div>
        <h1>Class User Component</h1>
        </div>
       )
    }
}
export default User;