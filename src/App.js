import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header></Header>
        <Navbar></Navbar>
        <main className='app__main'>
          <Routes>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/messages/*' element={<MessagesContainer></MessagesContainer>}></Route>
            <Route path='/news' element={<News></News>}></Route>
            <Route path='/music' element={<Music></Music>}></Route>
            <Route path='/settings' element={<Settings></Settings>}></Route>
            <Route path='/users/*' element={<UsersContainer></UsersContainer>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
