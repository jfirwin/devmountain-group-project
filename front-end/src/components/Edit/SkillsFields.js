import React, { Component } from 'react'

class SkillsFields extends Component{
  constructor() {
    super()
    this.state = {
      skills: {
        skill: '',
        lvl: '',
        id: ''
      }
    }
  }
  componentDidMount() {
    let skills = this.props.value
    this.setState({skills})
  }
  updateValue(newValue) {
    this.setState({skills: newValue})
  }
  cancelEdit() {
    this.setState({skills: this.props.value})
  }
  render(){
    return (
      <div>
        <div>
          <label>
            <div>
              Skill<input type="text" value={this.state.skills.skill} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              Level<input type="text" value={this.state.skills.lvl} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
          </label>
        </div>
        {this.state.skills !== this.props.value
          ?
          <div>
          <button onClick={()=>this.cancelEdit()}>Cancel</button>
          <button>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}
export default SkillsFields
