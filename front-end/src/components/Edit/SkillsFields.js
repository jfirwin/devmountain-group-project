import React, { Component } from 'react'

class SkillsFields extends Component{
  constructor() {
    super()
    this.state = {
      skills: {
        lvl: '',
        skill: '',
        id: ''
      }
    }
  }
  componentDidMount() {
    this.setState({skills: this.props.skills})
    console.log(this.state.skills)
  }
  updateSkill = (newValue) => {
    this.setState({skills: {...this.state.skills, skill: newValue}})
  }
  updateLevel = (newValue) => {
    this.setState({skills: {...this.state.skills, lvl: newValue}})
  }
  cancelEdit = () => {
    this.setState({skills: this.props.skills})
  }
  saveEdit = () => {
    this.props.update(this.state.skills)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.skills !== this.props.skills) {
      this.setState({skills: nextProps.skills})
    }
  }

  render(){
    return (
      <div>
        <div>
          <label>
            <div>
              Skill<input type="text" value={this.state.skills.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
            </div>
            <div>
              Level<input type="text" value={this.state.skills.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
            </div>
          </label>
          <button onClick={()=>this.props.delete()}>Delete</button>
        </div>
        {this.state.skills !== this.props.skills
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
export default SkillsFields
