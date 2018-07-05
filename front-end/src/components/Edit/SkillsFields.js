import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateSkill, deleteSkill} from '../../ducks/action'
import Radium from 'radium'
import style from './FieldsStyle'
import '../../App.css'



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

    const {title, spacer, competencySpacer, button, skillBox, inputStyle, iconStyle} = style

    return (
      <div>
        <div style={{marginRight: '30px'}}>
          <label style={skillBox}>
            <div style={spacer}>
              <span>Skill</span><input type="text" key="skill" style={inputStyle} value={this.state.skills.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
            </div>
            <div style={competencySpacer}>
              <span>Competency</span><input type="range" key="Competency" max="100" min="0" value={this.state.skills.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
              <span>{this.state.skills.lvl}%</span>
            </div>
            <i className="far fa-trash-alt" style={iconStyle} key="icon" onClick={()=>this.deleteSkill()}></i>
          </label>          
        </div>
        {this.state.skills !== this.props.skills
          ?
          <div style={{display: 'flex', width: '30%', justifyContent: 'space-between'}}>
            <button style={button} key="cancel" onClick={()=>this.cancelEdit()}>Cancel</button>
            <button style={button} key="Save" onClick={()=>this.saveEdit()}>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}

SkillsFields = Radium(SkillsFields)

const mapStateToProps = state => {
  return{
    skillTest: true
  }
}
export default connect(mapStateToProps, {updateSkill, deleteSkill})(SkillsFields)
