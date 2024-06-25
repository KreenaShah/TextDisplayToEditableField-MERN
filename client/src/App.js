import "./App.css";
import FullNameTextField from "./components/FullNameTextField";
import EmailTextField from "./components/EmailTextField"

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
      <FullNameTextField/>
      <EmailTextField/>
    </div>
  );
}

export default App;
