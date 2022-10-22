import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import { Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/WithRouter';
import Preloader from './components/common/Preloader/Preloader';
import { useEffect } from 'react';

const App = props => {

	useEffect(() => {
		const fetchData = async () => await props.initializeApp();
		fetchData();
	});

	if (!props.initialized) {
		return <Preloader></Preloader>;
	}

	return (
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
					<Route path='/login' element={<Login></Login>}></Route>
				</Routes>
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp, })
)(App);