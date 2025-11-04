import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";
import "./App.css";

const auth=getAuth(app);
function App() {
 const signupUser =() => {
  createUserWithEmailAndPassword(auth, "pranjali@gmail.com","abc123456").then((value) => console.log(value));

  
 };
  return (
    
      <div className="App">
      <h1>Fire base auth</h1>
      <button onClick={signupUser}>Create user</button>
      </div>
    
  );
}

export default App
