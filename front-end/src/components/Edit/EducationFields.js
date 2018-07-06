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
      }
    }
  }
  componentDidMount() {
    this.setState({education: this.props.school})
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
  cancelEdit = () => {
    this.setState({education: this.props.school})
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

    const {spacer, button, deleteButton, inputStyle, iconStyle} = style


    return (
      <ReactTransitionModule>
        <div>
            <label>
              <div style={spacer}>
                <span>School</span> <input style={inputStyle} key="school" type="text" value={this.state.education.school} onChange={(e) => this.updateSchool(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Emphasis</span><input style={inputStyle} key="emphasis" type="text" value={this.state.education.emphasis} onChange={(e) => this.updateEmphasis(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>Start Date</span><input style={inputStyle} key="startDate" type="date" value={this.state.education.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span>End Date</span><input style={inputStyle} key="endDate" type="date" value={this.state.education.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
              </div>
            </label>
            <i className="far fa-trash-alt" style={iconStyle} key="icon" onClick={()=>this.deleteEducation()}></i>
          {this.state.education !== this.props.school
            ?
            <div style={iconStyle}>
              <button style={button} key="cancel" onClick={()=>this.cancelEdit()}>Cancel</button>
              <button style={button} key="Save" onClick={()=>this.saveEdit()}>Save</button>
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

const mapStateToProps = state => {
  return{
    educationTest: true
  }
}
export default connect(mapStateToProps, {updateEducation, deleteEducation})(EducationField)
