import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addExperience} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'

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
      add: false,
      checked: true
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
  updateCheckbox = () => {
    if(this.state.checked) {
      this.setState({experience: {...this.state.experience, end_date: ''}})
    }
    this.setState({checked: !this.state.checked})
  }
  cancelAdd = () => {
    this.setState({add: false, checked: false, experience: {company:'',description:'',start_date:'',end_date:''}})
  }
  addExperience = () => {
    this.props.addExperience(this.state.experience)
    this.setState({experience:{company:'',description:'',start_date:'',end_date:''},add: false})
  }

  render(){

    const {button, spacer, inputStyle, buttonSpacing} = style
    const {company, description, title, location, start_date, end_date} = this.state.experience
    const checked = this.state.checked
    const checkValidity =
      company.length > 0 &&
      description.length > 0 &&
      title.length > 0 &&
      location.length > 0 &&
      (start_date !== '') &&
      (checked === true ||
        end_date !== '')

    return (
      <div>
      {
        this.state.add
        ?
        <ReactTransitionModule>
          <div>
              <div style={spacer}>
                <label>Company</label><input style={inputStyle} type="text" key="Company" value={this.state.experience.company} onChange={(e) => this.updateCompany(e.target.value)}/>
              </div>
              <div style={spacer}>
                <label>Title</label><input style={inputStyle} type="text" key="Title" value={this.state.experience.title} onChange={(e) => this.updateTitle(e.target.value)}/>
              </div>
              <div style={spacer}>
                <label>Description</label><input style={inputStyle} type="text" key="Description" value={this.state.experience.description} onChange={(e) => this.updateDescription(e.target.value)}/>
              </div>
              <div style={spacer}>
                <label>Location</label><input style={inputStyle} type="text" key="Location" value={this.state.experience.location} onChange={(e) => this.updateLocation(e.target.value)}/>
              </div>
              <div style={spacer}>
                <label>Start Date</label><input style={inputStyle} type="date" key="startDate" value={this.state.experience.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
              </div>
              {
                this.state.checked === true
                ?
                <div style={spacer}>
                  <input type="checkbox" checked={this.state.checked} onChange={()=>{this.updateCheckbox()}}/>I currently work here
                </div>
                :
                <div>
                  <div style={spacer}>
                    <span>End Date</span><input style={inputStyle} type="date" key="endDate" value={this.state.experience.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
                  </div>
                  <div style={spacer}>
                    <input type="checkbox" checked={this.state.checked} onChange={()=>{this.updateCheckbox()}}/>I currently work here
                  </div>
                </div>
              }
            </label>
            <div style={buttonSpacing}>
              <button style={button} key="cancel" onClick={()=>this.cancelAdd()}>Cancel</button>
              <button style={button} key="Add" onClick={()=>this.addExperience()} disabled={!checkValidity}>Add</button>
            </div>
          </div>
        </ReactTransitionModule>
        :
        <button style={button} onClick={()=>this.setState({add: true})}>Add Experience</button>
      }
      </div>
    )
  }
}

AddExperience = Radium(AddExperience)

export default connect(null, {addExperience})(AddExperience)
