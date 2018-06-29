import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSkill} from '../../ducks/action'

class AddSkill extends Component{
  constructor() {
    super()
    this.state = {
      skill: {
        skill: '',
        lvl: ''
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

    return (
      <div>
      {
        this.state.add
        ?
        <div>
          <label>
            <div>
              Skill<input type="text" value={this.state.skill.skill} onChange={(e) => this.updateSkill(e.target.value)}/>
            </div>
            <div>
              Competency<input type="range" min="0" max="100" value={this.state.skill.lvl} onChange={(e) => this.updateLevel(e.target.value)}/>
              {this.state.skill.lvl}%
            </div>
          </label>
          <button onClick={()=>this.cancelAdd()}>Cancel</button>
          <button onClick={()=>this.addSkill()}>Add</button>
        </div>
        :
        <button onClick={()=>this.setState({add: true})}>Add Skill</button>
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
export default connect(mapStateToProps, {addSkill})(AddSkill)
