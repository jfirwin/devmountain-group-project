import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateEducation, deleteEducation} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'

class EducationField extends Component{
  constructor() {
    super()
    this.state = {
      education: {
        school: '',
        emphasis: '',
        id: '',
        start_date: '',
        end_date: ''
      },
      checked: false
    }
  }
  componentDidMount() {
    this.setState({education: this.props.school})
    if(this.props.school.end_date){
      this.setState({checked: false})
    } else this.setState({checked: true})
  }
  updateSchool = (newValue) => {
    this.setState({education: {...this.state.education, school: newValue}})
  }
  updateEmphasis = (newValue) => {
    this.setState({education: {...this.state.education, emphasis: newValue}})
  }
  updateStartDate = (newValue) => {
    this.setState({education: {...this.state.education, start_date: newValue}})
  }
  updateEndDate = (newValue) => {
    this.setState({education: {...this.state.education, end_date: newValue}})
  }
  updateCheckbox = () => {
    if(!this.state.checked) {
      this.setState({education: {...this.state.education, end_date: ''}})
    } else {
      this.setState({education: {...this.state.education, end_date: this.props.school.end_date}})
    }
    this.setState({checked: !this.state.checked})
  }
  cancelEdit = () => {
    this.setState({education: this.props.school})
    if(this.props.school.end_date !== '') {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
    }
  }
  saveEdit = () => {
    this.props.updateEducation(this.state.education)
  }
  deleteEducation = () => {
    this.props.deleteEducation(this.state.education)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.school !== this.props.school) {
      this.setState({education: nextProps.school})
    }
  }

  render(){

    const {spacer, button, inputStyle, iconStyle} = style
    const {school, emphasis, start_date, end_date} = this.state.education
    const checked = this.state.checked
    const checkValidity =
      school.length > 0 &&
      emphasis.length > 0 &&
      (start_date !== '') &&
      (checked === true ||
        (end_date !== ''))

    return (
      <ReactTransitionModule>
        <div>
            <div style={spacer}>
              <span>School</span> <input style={inputStyle} key="school" type="text" value={this.state.education.school} onChange={(e) => this.updateSchool(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span>Emphasis</span><input style={inputStyle} key="emphasis" type="text" value={this.state.education.emphasis} onChange={(e) => this.updateEmphasis(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span>Start Date</span><input style={inputStyle} key="startDate" type="date" value={this.state.education.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            {
              this.state.checked === true
              ?
              null
              :
              <div style = {spacer}>
                <span>End Date</span><input style={inputStyle} type="date" key="End Date" value={this.state.education.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
              </div>
            }
            <div style = {spacer}>
              <input type="checkbox" checked={this.state.checked} onChange={()=>{this.updateCheckbox()}}/>I currently attend here
            </div>
            <i className="far fa-trash-alt" style={iconStyle} key="icon" onClick={()=>this.deleteEducation()}></i>
          {this.state.education !== this.props.school
            ?
            <div style={iconStyle}>
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

EducationField = Radium(EducationField)


export default connect(null, {updateEducation, deleteEducation})(EducationField)
