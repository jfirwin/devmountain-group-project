import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUserEdit, updateEditSelected, goBackEditPage} from '../../ducks/action'
import FullSizeEditPage from './FullSizeEdit'
import ResponsiveEditPage from './ResponsiveEdit'
import Radium from 'radium'
import MediaQuery from 'react-responsive'
import '../../App.css'



class Edit extends Component{
  componentDidMount() {
    this.props.getUserEdit()

  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user != nextProps.user || this.props.editSelected != nextProps.editSelected) {
      return true
    } else return false
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.username !== nextProps.match.params.username) {
      this.props.getProfileDetails(nextProps.match.params.username)
    }
  }

	render(){
		return(
			<div>
        <MediaQuery query='(min-width: 1000px)'>
          <FullSizeEditPage 
            user={this.props.user}
            updateEditSelected={this.props.updateEditSelected}
            editSelected={this.props.editSelected}
            />
        </MediaQuery>
        <MediaQuery query='(max-width: 1000px)'>
          <ResponsiveEditPage 
            user={this.props.user}
            updateEditSelected={this.props.updateEditSelected}
            editSelected={this.props.editSelected}
            goBackEditPage={this.props.goBackEditPage}
          />
        </MediaQuery>
      </div>
    )
  }
}


Edit = Radium(Edit)

const mapStateToProps = state => {
	return {
		user: state.user,
    loading: state.loading,
    editSelected: state.editSelected
  }
}

export default connect(mapStateToProps, {getUserEdit, updateEditSelected, goBackEditPage})(Edit)
