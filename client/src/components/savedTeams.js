import React, { Component } from 'react';

class SavedTeams extends Component {

	renderContent(){
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return(
					<div>
						you are not logged in!
					</div>
				);
			default:
				return(
					<div>
						here are your savedTeams
					</div>
				);
		}
	}

	render(){
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

export default SavedTeams;