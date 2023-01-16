import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlogs from './Components/AddBlogs/AddBlogs';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Blogs/>} />
        <Route path='/home' element={<Blogs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/AddBlogs' element={<AddBlogs/>} />
      </Routes>
    </div>
  );
}

export default App;
