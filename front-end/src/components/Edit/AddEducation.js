import React, { Component } from 'react'

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
    this.props.add(this.state.education)
    this.setState({education:{school:'',emphasis:'',start_date:'',end_date:''},add: false})
  }

  render(){

    return (
      <div>
      {
        this.state.add
        ?
        <div>
          <label>
            <div>
              School<input type="text" value={this.state.education.school} onChange={(e) => this.updateSchool(e.target.value)}/>
            </div>
            <div>
              Emphasis<input type="text" value={this.state.education.emphasis} onChange={(e) => this.updateEmphasis(e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" value={this.state.education.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" value={this.state.education.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
            </div>
          </label>
          <button onClick={()=>this.cancelAdd()}>Cancel</button>
          <button onClick={()=>this.addEducation()}>Add</button>
        </div>
        :
        <button onClick={()=>this.setState({add: true})}>Add Education</button>
      }
      </div>
    )
  }
}

export default AddEducation
