import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Blogs />

      <br />
      <hr />

      {/* <Login/> */}
      <SignUp/>
    </div>
  );
}

export default App;
