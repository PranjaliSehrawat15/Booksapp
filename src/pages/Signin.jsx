import React,{useState} from "react";

const SigninPage =() => {
    return (
        <div className="signin-page">
            <h1>Signin Page</h1>
            <label>Email </label>
            <input type ="email " placeholder ="Enter your email here"/>
            <br/>
            <label>Password </label>
            <input type ="password " placeholder ="Enter your password here"/>
            <button > Signin me in </button>
        </div>
    );
};

export default SigninPage;