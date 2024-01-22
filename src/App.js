import{BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SinglePage from './components/SinglePage';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />}>
          </Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail/:id' element={<SinglePage />}></Route>
          <Route path='/favorite' element={<Favorites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
