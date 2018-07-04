const title = {
    fontFamily: 'Montserrat',
    familyWeight: '200'
  }

const spacer = {
    width: '70%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat',
    familyWeight: '200'
  }

const competencySpacer = {
  width: '100%',
  marginTop: 10,
  display: 'flex',
  justifyContent: 'space-between'
}

const deleteButton = {
  backgroundColor: 'white',
  border: '1px solid red',
  color: 'red',
  fontWeight: 'bold',
  marginTop: '15px'
}

const button = {
  backgroundColor: 'white',
  border: '1px solid black',
  fontWeight: 'bold',
  marginTop: '15px',
  ':hover': {
    backgroundColor: '#F3F3F3'
  }
}

const skillBox = {
  height: '120px',
  witdh: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-between',
  fontFamily: 'Montserrat',
  familyWeight: '200'
}

const skillSpacer = {
  marginBottom: '20px'
}

const inputStyle = {
  width: '50%',
  height: '25px',
  ':focus': {
    outline: 'none',
    border: '2px solid #E3E38A'
  }
}

const buttonSpacing = {
  display: 'flex',
  width: '30%',
  justifyContent: 'space-between'
}

const iconStyle = {
  ':hover': {cursor: 'pointer'},
  width: '20px',
  marginTop: '5px'
}

module.exports = {
    title: title,
    spacer: spacer,
    competencySpacer: competencySpacer,
    button: button,
    deleteButton: deleteButton,
    skillSpacer: skillSpacer,
    skillBox: skillBox,
    inputStyle: inputStyle,
    buttonSpacing: buttonSpacing,
    iconStyle: iconStyle
}