import { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";

function App() {
  // const[data , setData] = useState({
  //   "email": "",
  //   "password":""
  // })
  // const handleChange = (e) => {
  //   console.log("HandleChange");
  //   console.log(e.target.name , e.target.value);
  // }
  return (
    <div className="App">
      Hey!
      <TextField/>
    </div>
  );
}

export default App;
