import React, { Component  } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header';
import SavedTeams from './savedTeams';
import Searchbar from './searchbar';

//location-search should have the search params

class App extends Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render(){
		return (
			<MuiThemeProvider>
				<div className="container">
					<BrowserRouter>
						<div>
							<Header />
							<Route exact path="/saved" component={SavedTeams} />
							<Route path='/' component={Searchbar} />
						</div>
					</BrowserRouter>
				</div>
			</MuiThemeProvider>
		);
	}
};

export default connect(null, actions)(App);