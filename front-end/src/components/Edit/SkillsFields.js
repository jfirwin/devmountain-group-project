import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateSkill, deleteSkill} from '../../ducks/action'

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
    this.props.updateSkill(this.state.skills)
  }
  deleteSkill = () => {
    this.props.deleteSkill(this.state.skills)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.skills !== this.props.skills) {
      this.setState({skills: nextProps.skills})
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
        <div>
          <label>
            <div style={spacer}>
              <span style={title}>Skill</span><input type="text" value={this.state.skills.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
            </div>
            <div style={spacer}>
              <span style={title}>Competency</span><input type="range" max="100" min="0" value={this.state.skills.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
              <span>{this.state.skills.lvl}%</span>
            </div>
          </label>
          <button onClick={()=>this.deleteSkill()}>Delete</button>
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
const mapStateToProps = state => {
  return{
    skillTest: true
  }
}
export default connect(mapStateToProps, {updateSkill, deleteSkill})(SkillsFields)
