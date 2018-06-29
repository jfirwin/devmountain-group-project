import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateEducation, deleteEducation} from '../../ducks/action'

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


    const title = {
      fontFamily: 'Montserrat',
      familyWeight: '200'
    }

    const spacer = {
      marginTop: 10
    }

    return (
      <div>
          <label>
            <div style={spacer}>
              <span style={title}>School</span> <input type="text" value={this.state.education.school} onChange={(e) => this.updateSchool(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span style={title}>Emphasis</span><input type="text" value={this.state.education.emphasis} onChange={(e) => this.updateEmphasis(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span style={title}>Start Date</span><input type="date" value={this.state.education.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span style={title}>End Date</span><input type="date" value={this.state.education.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
            </div>
          </label>
          <button onClick={()=>{this.deleteEducation()}}>Delete</button>
        {this.state.education !== this.props.school
          ?
          <div>
            <button onClick={()=>this.cancelEdit()}>Cancel</button>
            <button onClick={()=>this.saveEdit()}>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
    educationTest: true
  }
}
export default connect(mapStateToProps, {updateEducation, deleteEducation})(EducationField)
