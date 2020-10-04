import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import	Header from './Header';
import	Footer from './Footer';

import	Home from './Home';
import	Doctor from './Doctor';
import	Patient from './Patient';
import	Errpage from './Errpage';

let App=function(){
	return <Router>
			<Header />
					<Switch>	
						<div className="main">
							<Route exact path="/" component={Home} />
							<Route exact path="/doctor" component={Doctor} />
							<Route exact path="/patient" component={Patient} />
							{/*<Route component={Errpage} />*/}
						</div>
					</Switch>
			<Footer />
	</Router>	
}

export default App;