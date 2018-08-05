import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateExperience, deleteExperience} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'

class ExperienceFields extends Component{

  constructor() {
    super()
    this.state = {
      experience: {
        company: '',
        description: '',
        location: '',
        title: '',
        id: '',
        start_date: '',
        end_date: ''
      },
      checked: false
    }
  }
  componentDidMount() {
    this.setState({experience: this.props.experience})
    if(this.props.experience.end_date){
      this.setState({checked: false})
    } else this.setState({checked: true})
  }
  updateCompany = (newValue) => {
    this.setState({experience: {...this.state.experience, company: newValue}})
  }
  updateTitle = (newValue) => {
    this.setState({experience: {...this.state.experience, title: newValue}})
  }
  updateLocation = (newValue) => {
    this.setState({experience: {...this.state.experience, location: newValue}})
  }
  updateDescription = (newValue) => {
    this.setState({experience: {...this.state.experience, description: newValue}})
  }
  updateStartDate = (newValue) => {
    this.setState({experience: {...this.state.experience, start_date: newValue}})
  }
  updateEndDate = (newValue) => {
    this.setState({experience: {...this.state.experience, end_date: newValue}})
  }
  updateCheckbox = () => {
    if(!this.state.checked) {
      this.setState({experience: {...this.state.experience, end_date: ''}})
    } else {
      this.setState({education: {...this.state.education, end_date: this.props.experience.end_date}})
    }
    this.setState({checked: !this.state.checked})
  }
  cancelEdit = () => {
    this.setState({experience: this.props.experience})
    if(this.props.experience.end_date !== '') {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
    }
  }
  saveEdit = () => {
    this.props.updateExperience(this.state.experience)
  }
  deleteExperience = () => {
    this.props.deleteExperience(this.state.experience)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.experience !== this.props.experience) {
      this.setState({experience: nextProps.experience})
    }
  }

  render(){

    const {spacer, button, inputStyle, iconStyle} = style
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
      <ReactTransitionModule>
        <div>
          <div>
            <label>
              <div style={spacer}>
                <span>Company</span><input style={inputStyle} key="Company" type="text" value={this.state.experience.company} onChange={(e) => this.updateCompany(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Title</span><input style={inputStyle} key="Title" type="text" value={this.state.experience.title} onChange={(e) => this.updateTitle(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Location</span><input style={inputStyle} key="Location" type="text" value={this.state.experience.location} onChange={(e) => this.updateLocation(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Description</span><input style={inputStyle} key="Description" type="text" value={this.state.experience.description} onChange={(e) => this.updateDescription(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Start Date</span><input key="startDate" style={inputStyle} type="date" value={this.state.experience.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
              </div>
              <div style={spacer}>
              {
                this.state.checked === true
                ?
                <div style={spacer}>
                  I currently work here<input type="checkbox" checked={this.state.checked} onChange={() =>{this.updateCheckbox()}}/>
                </div>
                :
                <div>
                  <div>
                  <span>End Date</span><input key="EndDate" style={inputStyle} type="date" value={this.state.experience.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
                  </div>
                  <div>
                  <input type="checkbox" checked={this.state.checked} onChange={() =>{this.updateCheckbox()}}/>I currently work here
                  </div>
                </div>
              }
              </div>
              <i className="far fa-trash-alt" style={iconStyle} key="icon" onClick={()=>this.deleteExperience()}></i>
            </label>
          </div>
          {this.state.experience !== this.props.experience
            ?
            <div style={{display: 'flex', width: '30%', justifyContent: 'space-between'}}>
              <button style={button} key="cancel" onClick={()=>this.cancelEdit()}>Cancel</button>
              <button style={button} key="Save" onClick={()=>this.saveEdit()} disabled={!checkValidity}>Save</button>
            </div>
            :
            null
          }
        </div>
      </ReactTransitionModule>
    )
  }
}

ExperienceFields = Radium(ExperienceFields)

const mapStateToProps = state => {
  return{
    experienceTest: true
  }
}
export default connect(mapStateToProps, {updateExperience, deleteExperience})(ExperienceFields)
