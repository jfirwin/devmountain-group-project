import React, { Component } from 'react'

class AddExperience extends Component{
  constructor() {
    super()
    this.state = {
      experience: {
        company: '',
        description: '',
        location: '',
        id: '',
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
    this.setState({add: false, experience: {company:'',description:'',location:'',start_date:'',end_date:''}})
  }
  addExperience = () => {
    this.props.add(this.state.experience)
    this.setState({add: false, experience: {company:'',description:'',location:'',start_date:'',end_date:''}})
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
              Company<input type="text" value={this.state.experience.company} onChange={(e) => this.updateCompany(e.target.value)}/>
            </div>
            <div>
              Description<input type="text" value={this.state.experience.description} onChange={(e) => this.updateDescription(e.target.value)}/>
            </div>
            <div>
              Location<input type="text" value={this.state.experience.location} onChange={(e) => this.updateLocation(e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" value={this.state.experience.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" value={this.state.experience.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
            </div>
          </label>
          <button onClick={()=>this.cancelAdd()}>Cancel</button>
          <button onClick={()=>this.addExperience()}>Add</button>
        </div>
        :
        <button onClick={()=>this.setState({add: true})}>Add Experience</button>
      }
      </div>
    )
  }
}

export default AddExperience
