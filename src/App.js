import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;
