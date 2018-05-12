import React, { Component } from 'react'

class EducationField extends Component{
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
      }
    }
  }
  componentDidMount() {
    this.setState({experience: this.props.experience})
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
  cancelEdit = () => {
    this.setState({experience: this.props.experience})
  }
  saveEdit = () => {
    this.props.update(this.state.experience)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.experience !== this.props.experience) {
      this.setState({experience: nextProps.experience})
    }
  }

  render(){

    return (
      <div>
        <div>
          <label>
            <div>
              Company<input type="text" value={this.state.experience.company} onChange={(e) => this.updateCompany(e.target.value)}/>
            </div>
            <div>
              Title<input type="text" value={this.state.experience.title} onChange={(e) => this.updateTitle(e.target.value)}/>
            </div>
            <div>
              Location<input type="text" value={this.state.experience.location} onChange={(e) => this.updateLocation(e.target.value)}/>
            </div>
            <div>
              Description<input type="text" value={this.state.experience.description} onChange={(e) => this.updateDescription(e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" value={this.state.experience.start_date} onChange={(e) => this.updateStartDate(e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" value={this.state.experience.end_date} onChange={(e) => this.updateEndDate(e.target.value)}/>
            </div>
            <button onClick={()=>this.props.delete()}>Delete</button>
          </label>
        </div>
        {this.state.experience !== this.props.experience
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

export default EducationField
