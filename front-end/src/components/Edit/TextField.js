// import React, { Component } from 'react'

// class TextField extends Component{
//   constructor() {
//     super()
//     this.state = {
//       value: ''
//     }
//   }
//   componentDidMount() {
//     this.setState({value: this.props.value})
//   }
//   updateValue(newValue) {
//     this.setState({value: newValue})
//   }
//   cancelEdit() {
//     this.setState({value: this.props.value})
//   }
//   render(){
//     const titleText = {
//       width: '100px',
//       fontFamily: 'Montserrat',
//       fontWeigth: '200'
//     }

//     const labelDisplay ={
//       display: 'flex',
//       height: '40px',
//       marginTop: '20px'
//     }

//     return (
//       <div>
//         <label style={labelDisplay}>
//           <p style={titleText}>{this.props.title}</p>
//           <input type="text" value={this.state.value} onChange={(e) => this.updateValue(e.target.value)}/>
//           {this.state.value !== this.props.value
//             ?
//             <div>
//               <button onClick={()=>this.cancelEdit()} className='editPageButton'>Cancel</button>
//               <button className='editPageButton'>Save</button>
//             </div>
//             :
//             null
//           }
//         </label>
//       </div>
//     )
//   }
// }
// export default TextField
