import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Routes,Route,Link} from 'react-router-dom';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Header">Header</Link></li>
        <li><Link to="/Content">Content</Link></li>
        <li><Link to="/Footer">Footer</Link></li>
      </ul>
      <Routes>
        <Route path="/"></Route>
        <Route path="/Header" element={<Header/>}></Route>
        <Route path="/Content" element={<Content/>}></Route>
        <Route path="/Footer" element={<Footer/>}></Route>
        <Route path="/Content/:id" element={<Post/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
