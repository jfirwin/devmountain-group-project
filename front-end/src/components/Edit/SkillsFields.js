import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateSkill, deleteSkill} from '../../ducks/action'
import Radium from 'radium'
import style from './FieldsStyle'
import ReactTransitionModule from './../../ducks/utils/animation'
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

    const {title, competencySpacer, button, skillBox, inputStyle, iconStyle} = style

    return (
      <ReactTransitionModule>
        <div>
          <div style={skillBox}>
              <div style={this.props.spacer}>
                <span>Skill</span><input type="text" key="skill" style={inputStyle} value={this.state.skills.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
              </div>
              <div style={this.props.competencySpacer}>
                <span>Competency</span><input style={this.props.slider} type="range" key="Competency" max="100" min="0" value={this.state.skills.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
                <span>{this.state.skills.lvl}%</span>
              </div>
              <i className="far fa-trash-alt" style={iconStyle} key="icon" onClick={()=>this.deleteSkill()}></i>         
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
      </ReactTransitionModule>
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
