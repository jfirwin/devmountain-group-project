import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSkill} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'

class AddSkill extends Component{
  constructor() {
    super()
    this.state = {
      skill: {
        skill: '',
        lvl: 50
      },
      add: false
    }
  }
  updateSkill = (newValue) => {
    this.setState({skill: {...this.state.skill, skill: newValue}})
  }
  updateLevel = (newValue) => {
    this.setState({skill: {...this.state.skill, lvl: newValue}})
  }
  cancelAdd = () => {
    this.setState({add: false, skill: {skill:'',lvl:''}})
  }
  addSkill = () => {
    this.props.addSkill(this.state.skill)
    this.setState({skill:{skill:'',lvl:''},add: false})
  }

  render(){

    const {spacer, competencySpacer, button} = style

    const addSkill = {
      height: '80px',
      marginBottom: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'Montserrat',
      familyWeight: '200'
    }

    return (

        <div>
        {
          this.state.add
          ?
          <ReactTransitionModule>
            <div>
              <label style = {addSkill}>
                <div style = {spacer}>
                  <span>Skill</span><input type="text" key="skill" value={this.state.skill.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
                </div>
                <div style = {competencySpacer}>
                  <span >Competency</span><input style={{border: 'none'}} type="range" min="0" max="100" key="competency" value={this.state.skill.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
                  {this.state.skill.lvl}%
                </div>
              </label>
              <div style={{display: 'flex', width: '30%', justifyContent: 'space-between'}}>
                <button style={button} key="cancel" onClick={()=>this.cancelAdd()}>Cancel</button>
                <button style={button} key="Add" onClick={()=>this.addSkill()}>Add</button>
              </div>
            </div>
          </ReactTransitionModule>
          :
          <button style={button} onClick={()=>this.setState({add: true})}>Add Skill</button>
        }
        </div>
    )
  }
}

AddSkill = Radium(AddSkill)

const mapStateToProps = state => {
  return{
    skillTest: true
  }
}
export default connect(mapStateToProps, {addSkill})(AddSkill)
