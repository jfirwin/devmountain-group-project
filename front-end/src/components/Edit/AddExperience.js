import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addExperience} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'

class AddExperience extends Component{
  constructor() {
    super()
    this.state = {
      experience: {
        company: '',
        description: '',
        title: '',
        location: '',
        start_date: '',
        end_date: ''
      },
      add: false
    }
  }
  updateCompany = (newValue) => {
    this.setState({experience: {...this.state.experience, company: newValue}})
  }
  updateDescription = (newValue) => {
    this.setState({experience: {...this.state.experience, description: newValue}})
  }
  updateTitle = (newValue) => {
    this.setState({experience: {...this.state.experience, title: newValue}})
  }
  updateLocation = (newValue) => {
    this.setState({experience: {...this.state.experience, location: newValue}})
  }
  updateStartDate = (newValue) => {
    this.setState({experience: {...this.state.experience, start_date: newValue}})
  }
  updateEndDate = (newValue) => {
    this.setState({experience: {...this.state.experience, end_date: newValue}})
  }
  cancelAdd = () => {
    this.setState({add: false, experience: {company:'',description:'',start_date:'',end_date:''}})
  }
  addExperience = () => {
    this.props.addExperience(this.state.experience)
    this.setState({experience:{company:'',description:'',start_date:'',end_date:''},add: false})
  }

  render(){

    const {button, deleteButton, spacer, inputStyle, buttonSpacing} = style
    

    return (
      <div>
      {
        this.state.add
        ?
        <div>
          <label>
            <div style = {spacer}>
              <span>Company</span><input style={inputStyle} type="text" key="Company" value={this.state.experience.company} onChange={(e) => this.updateCompany(e.target.value)}/>
            </div>
            <div style = {spacer}>
              <span>Title</span><input style={inputStyle} type="text" key="Title" value={this.state.experience.title} onChange={(e) => this.updateTitle(e.target.value)}/>
            </div>
            <div style = {spacer}>
              <span>Description</span><input style={inputStyle} type="text" key="Description" value={this.state.experience.description} onChange={(e) => this.updateDescription(e.target.value)}/>
            </div>
            <div style = {spacer}>
              <span>Location</span><input style={inputStyle} type="text" key="Location" value={this.state.experience.location} onChange={(e) => this.updateLocation(e.target.value)}/>
            </div>
            <div style = {spacer}>
              <span>Start Date</span><input style={inputStyle} type="date" key="startDate" value={this.state.experience.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            <div style = {spacer}>
              <span>End Date</span><input style={inputStyle} type="date" key="endDate" value={this.state.experience.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
            </div>
          </label>
          <div style={buttonSpacing}>
            <button style={button} key="cancel" onClick={()=>this.cancelAdd()}>Cancel</button>
            <button style={button} key="Add" onClick={()=>this.addExperience()}>Add</button>
          </div>
        </div>
        :
        <button style={button} onClick={()=>this.setState({add: true})}>Add Experience</button>
      }
      </div>
    )
  }
}

AddExperience = Radium(AddExperience)

const mapStateToProps = state => {
  return{
    experienceTest: true
  }
}
export default connect(mapStateToProps, {addExperience})(AddExperience)
