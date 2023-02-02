import s from './App.module.css';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withRouter } from './hoc/WithRouter';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = ({ initializeApp, initialized }) => {

	useEffect(() => {
		const fetchData = async () => await initializeApp();

		fetchData();
	});

	if (!initialized) {
		return <Preloader></Preloader>;
	}

	return (
		<div className={s.app}>
			<HeaderContainer></HeaderContainer>
			<Navbar></Navbar>
			<main className={s.app__main}>
				<Suspense fallback={<div><Preloader></Preloader></div>}>
					<Routes>
						<Route path="/" element={<Navigate to="/users" />} />
						<Route path='/profile' element={<ProfileContainer></ProfileContainer>} />
						<Route path='/profile/:userId' element={<ProfileContainer></ProfileContainer>} />
						<Route path='/messages/*' element={<MessagesContainer></MessagesContainer>}></Route>
						<Route path='/news' element={<News></News>}></Route>
						<Route path='/music' element={<Music></Music>}></Route>
						<Route path='/settings' element={<Settings></Settings>}></Route>
						<Route path='/users' element={<UsersContainer></UsersContainer>}></Route>
						<Route path='/login' element={<Login></Login>}></Route>
						<Route path='*' element={<div className={s.error}>Error 404: Page not found</div>}></Route>
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp, })
)(App);

const MainApp = () => {
	return (
		// BrowserRouter basename={process.env.PUBLIC_URL}
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	);
}

export default MainApp;