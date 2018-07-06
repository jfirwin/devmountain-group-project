import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {getUsersTiles, updateSearchString} from '../ducks/action'
import Radium from 'radium'
import {Link} from 'react-router-dom'
import ReactTransitionModule from './../ducks/utils/animation'



let Tiles = (props) => {

		const tileWrapper = {
			height: '100vh',
			width: '50vw',
			'display': 'flex',
			'flexDirection': 'column',
			alignItems: 'center',
			'padding': 20,
			border: '1px solid #AAAAAA',
			borderRadius: '8px',
			marginTop: '100px'
		}

		const tileStyle = {
			display: 'flex',
			height: 80,
			width: '90%',
			justifyContent: 'flex-start',
			alignItems: 'center',
			':hover': {'backgroundColor': 'rgba(156, 140, 96, 0.05)', border: '2px solid rgba(207, 163, 0, 0.2)'},
			padding: 20,
			borderRadius: '8px',
			color: 'black'
		}

		const imgStyle = {
			height: 50,
			borderRadius: '100%'
		}


		const title = {
			fontFamily: 'Montserrat',
			fontWeight: 'bold'
		}

		let tiles = props.users,
			searchString = props.searchString.trim().toLowerCase();
		if(searchString.length > 0) {
			tiles = tiles.filter(user => {

				return (
				user.firstname && user.firstname.toLowerCase().match(searchString) ||
				user.lastname && user.lastname.toLowerCase().match(searchString) ||
				user.description && user.description.toLowerCase().match(searchString)
				)
			})
		}

	return (
		<ReactTransitionModule>
			<div style={tileWrapper}>
				{
					tiles.map((user, index) => {
						if(user.username){
								return(
								<Link to={`/${user.username}`} style={tileStyle} key={user.username ? user.username : index}>
									<div key={user.username ? user.username : index} style={tileStyle}>
										<img src={user.imgurl} alt='avatar' style={imgStyle}/>
										<div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: 10}}>
											<div>
												<p><span style={title}>Name:</span> {user.firstname + ' ' + user.lastname}</p>
												<p><span style={title}>Username:</span> {user.username}</p>
											</div>
											<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
												<p>{user.description}</p>
											</div>
										</div>
									</div>
								</Link>
							)
						}
					})
				}
			</div>
		</ReactTransitionModule>
	)
}


class Search extends Component{

	componentDidMount() {
		this.props.getUsersTiles()
	}

	render(){


		const container = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100
		}

		const title = {
			fontFamily: 'Montserrat',
			fontSize: 30
		}

		const inputStyle ={
			width: '50vw',
			height: 100,
			borderTop: 'none',
			borderLeft: 'none',
			borderRight: 'none',
			borderBottom: '2px solid #F0F0F0',
			fontSize: 50,
			fontFamily: 'Montserrat',
			fontWeight: '200',
			':focus': {
				borderBottom: '2px solid rgba(207, 163, 0, 0.5)',
				outline: 'none'
			}
		}

		return(
			<div>
				<div>
					<Navbar />
				</div>
				<div style={container}>
					<input style={inputStyle} placeholder='Search Here' type="text" onChange={(e) => this.props.updateSearchString(e.target.value)}/>
					<Tiles users = {this.props.users} searchString = {this.props.searchString}/>
				</div>
			</div>
		)
	}
}

Tiles = Radium(Tiles)
Search = Radium(Search)

const mapStateToProps = state => {
	return {
		name: state.name,
		users: state.users,
		searchString: state.searchString
	}
}

export default connect(mapStateToProps, {getUsersTiles, updateSearchString})(Search)
