import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addEducation} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'

class AddEducation extends Component{
  constructor() {
    super()
    this.state = {
      education: {
        school: '',
        emphasis: '',
        start_date: '',
        end_date: ''
      },
      add: false
    }
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
  cancelAdd = () => {
    this.setState({add: false, education: {school:'',emphasis:'',start_date:'',end_date:''}})
  }
  addEducation = () => {
    this.props.addEducation(this.state.education)
    this.setState({education:{school:'',emphasis:'',start_date:'',end_date:''},add: false})
  }

  render(){

    const {button, spacer, inputStyle, buttonSpacing} = style

    return (
      <div>
      {
        this.state.add
        ?
        <ReactTransitionModule>
          <div>
              <div style = {spacer}>
                <label>School</label><input style={inputStyle} type="text" key="School" value={this.state.education.school} onChange={(e) => this.updateSchool(e.target.value)}/>
              </div>
              <div style = {this.props.spacer}>
                <label>Emphasis</label><input style={this.props.inputStyle} type="text" key="Emphasis" value={this.state.education.emphasis} onChange={(e) => this.updateEmphasis(e.target.value)}/>
              </div>
              <div style = {this.props.spacer}>
                <label>Start Date</label><input style={this.props.inputStyle} type="date" key="Start Date" value={this.state.education.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
              </div>
              <div style = {this.props.spacer}>
                <label>End Date</label>End Date<input style={this.props.inputStyle} type="date" key="End Date" value={this.state.education.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
              </div>
            <div style={buttonSpacing}>
              <button style={button} key="cancel" onClick={()=>this.cancelAdd()}>Cancel</button>
              <button style={button} key="Add" onClick={()=>this.addEducation()}>Add</button>
            </div>
          </div>
        </ReactTransitionModule>
        :
        <button style={button} onClick={()=>this.setState({add: true})}>Add Education</button>
      }
      </div>
    )
  }
}

AddEducation = Radium(AddEducation)

export default connect(null, {addEducation})(AddEducation)
