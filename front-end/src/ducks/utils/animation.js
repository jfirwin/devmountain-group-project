import React from 'react'
import ReactTransition from 'react-addons-css-transition-group'

const FirstChild = (props) => {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null;
}

const ReactTransitionModule = (props) => {
    return (
        <ReactTransition
        transitionName='fade'
        transitionEnter={true}
        transitionLeave={true}
        transitionAppear={true}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        component={FirstChild}
      >
      {props.children}
      </ReactTransition>
    )
}

export default ReactTransitionModule  