import React ,{useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from '../firebase';

const auth = getAuth();

const SignupPage =()=> {

    const[email,setEmail] =useState("");
    const [password,setPassword] = useState("");

    const createUser =()=>{
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"));
    }
    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
        <label>Email</label>
        <input onChange={e => setEmail(e.target.value)}
        value={email}
         type ="email " reruired placeholder ="Enter your email here"/>
         <br/>
        <label>Password</label>
        <input onChange={e => setPassword(e.target.value)}
        value={password}
         type ="password " reruired placeholder ="Enter your password here"/>
        <button onClick ={createUser}>Signup</button>
        </div>
    );
};
export default SignupPage;