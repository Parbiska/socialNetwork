import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <main className='app__main'>
          <Routes>            
            <Route path='/profile' element={<ProfileContainer></ProfileContainer>}></Route>
            <Route path='/profile/:userId' element={<ProfileContainer></ProfileContainer>}></Route>
            <Route path='/messages/*' element={<MessagesContainer></MessagesContainer>}></Route>
            <Route path='/news' element={<News></News>}></Route>
            <Route path='/music' element={<Music></Music>}></Route>
            <Route path='/settings' element={<Settings></Settings>}></Route>
            <Route path='/users' element={<UsersContainer></UsersContainer>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
