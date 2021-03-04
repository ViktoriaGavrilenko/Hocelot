import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login/Login';
import TryNow from './pages/under_auth/TryNow/TryNow';
import CreateAccount from './pages/auth/CreateAccount/CreateAccount';
import Solutions from './pages/under_auth/Solutions/Solutions';
import Quality from "./pages/under_auth/Quality/Quality";
import QualityHocelot from "./pages/under_auth/QualityHocelot/QualityHocelot";



const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/account">
					<CreateAccount/>
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
				<Route path="/try">
					<TryNow/>
				</Route>
				<Route path="/solutions">
					<Solutions/>
				</Route>
				<Route path="/quality">
					<Quality/>
				</Route>
				<Route path="/qualityhocelot">
					<QualityHocelot/>
				</Route>

			</Switch>
		</div>
	);
};

export default App;
