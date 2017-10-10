import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Google from 'material-ui-community-icons/icons/google';
import Facebook from 'material-ui-community-icons/icons/facebook';
import Twitter from 'material-ui-community-icons/icons/twitter';
import FaGoogle from 'react-icons/lib/fa/google';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

class Header extends Component {

	handleTouchTap(){
		alert('onClick triggered on the title component');
	}

	renderContent(){
		const styles = {
			title: {
				cursor: 'pointer',
		  	},
		};

		const style = {
		    marginTop: 6,
		    marginBottom: 6,
		    marginLeft: 13,
		    marginRight: 13
		};

		switch(this.props.auth) {
			case null:
				return;
			case false:
				return(
					<AppBar
					    title={<span style={styles.title}>Fate/Grand Order View</span>}
					    showMenuIconButton={false}
					    iconElementRight={
					    	<div>
					    		<RaisedButton 
					    			icon={<Google />}
					    			style={style}
					    			href={"/auth/google"}
					    		/>
					    		<RaisedButton 
					    			icon={<Facebook />} 
					    			style={style}
					    			href={"/auth/facebook"}
					    		/>
					    		<RaisedButton 
					    			icon={<Twitter />}
					    			style={style}
					    			href={"/auth/twitter"}
					    		/>
					    	</div>
					    }
					/>
				);
			default:
				return(
					<AppBar
					    title={<span style={styles.title}>Fate/Grand Order View</span>}
					    showMenuIconButton={false}
					    iconElementRight={
					    	<FlatButton 
					    		label="Logout"
					    		href={"/api/logout"} 
					    	/>
					    }
					/>
				);
		}
	}

	renderEmailSignup() {
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return(
					<div>
						sign up here with email
					</div>
				);
			default:
				return;
		}
	}


	render(){
		return(
			<div>
				{this.renderContent()}
				{this.renderEmailSignup()}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { 
		auth: state.auth
	};
}

export default connect(mapStateToProps, null)(Header);