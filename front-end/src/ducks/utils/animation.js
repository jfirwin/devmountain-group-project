import React from 'react'
import ReactTransition from 'react-addons-css-transition-group'

const ReactTransitionModule = (props) => {
    return (
        <ReactTransition
        transitionName='fade'
        transitionEnter={true}
        transitionLeave={true}
        transitionAppear={true}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
      {props.children}
      </ReactTransition>
    )
}

export default ReactTransitionModule  