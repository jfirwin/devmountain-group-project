import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {getUsersTiles, updateSearchString} from '../ducks/action'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import ReactTransitionModule from './../ducks/utils/animation'
import MediaQuery from 'react-responsive'


let Tiles = (props) => {

		const tileWrapper = {
			height: '100vh',
			width: '50vw',
			'display': 'flex',
			'flexDirection': 'column',
			alignItems: 'center',
			border: '1px solid #AAAAAA',
			borderRadius: '8px',
			marginTop: '100px',
			overflow: 'auto'
		}

		const tileStyle = {
			display: 'flex',
			height: 80,
			width: '100%',
			alignItems: 'center',
			':hover': {'backgroundColor': 'rgba(156, 140, 96, 0.05)', border: '2px solid rgba(207, 163, 0, 0.2)'},
			padding: 20,
			borderRadius: '8px',
			color: 'black',
			marginBottom: '35px',
			marginTop: '35px'
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
				(user.firstname && user.firstname.toLowerCase().match(searchString)) ||
				(user.lastname && user.lastname.toLowerCase().match(searchString)) ||
				(user.description && user.description.toLowerCase().match(searchString))
				)
			})
		}

	return (
		<ReactTransitionModule>
			<div style={props.responsiveTileWrapper || tileWrapper}>
				{
					tiles.map((user, index) => {
						if(user.firstname && user.lastname && user.username){
								return(
								<Link to={`/${user.username}`} style={props.responsiveTileStyle || tileStyle} key={user.username ? user.username : index}>
									<div key={user.username} style={props.responsiveTileStyle || tileStyle}>
										<img src={user.imgurl ? user.imgurl : require('../images/user_default.png')} alt='avatar' style={imgStyle}/>

										<div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: 10}}>
											<div style={{width: '70%'}}>
												<p>{`Name: ${user.firstname} ${user.lastname}`}</p>
												<p>{`Username: ${user.username}`}</p>
											</div>
											<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box'}}>
												<p>{user.description}</p>
											</div>
										</div>
									</div>
								</Link>
							)
						}
						else return null
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

		const responsiveTileStyle = {
			display: 'flex',
			height: 200,
			width: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
			borderRadius: '8px',
			marginBottom: 15,
			color: 'black'
		}

		const responsiveTileWrapper = {
			height: '100%',
			width: '100%',
			padding: 'none',
			'display': 'flex',
			'flexDirection': 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			borderRadius: '8px',
			marginTop: 20,
			overflow: 'auto'
		}

		const responsiveContainer = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100,
			width: '100%'
		}

		const container = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100
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
				<MediaQuery query='(min-width: 1000px)' >
					<div style={container}>
						<input style={inputStyle} key='fullSizeSearchInput' placeholder='Search Here' type="text" onChange={(e) => this.props.updateSearchString(e.target.value)}/>
						<Tiles users = {this.props.users} searchString = {this.props.searchString}/>
					</div>
				</MediaQuery>
				<MediaQuery query='(max-width: 1000px)'>
					<div style={responsiveContainer}>
						<input style={{...inputStyle, fontSize: 35}} key='midSizeSearchInput' placeholder='Search' type="text" onChange={(e) => this.props.updateSearchString(e.target.value)}/>
						<Tiles users = {this.props.users} searchString = {this.props.searchString} responsiveTileWrapper={{...responsiveTileWrapper, padding:10}} responsiveTileStyle={responsiveTileStyle}/>
					</div>
				</MediaQuery>
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
