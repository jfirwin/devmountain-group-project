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
  witdh: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-between',
  fontFamily: 'Montserrat',
  familyWeight: '200',
  marginBottom: '25px'
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
  marginTop: '15px'
}

const wrapper = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const box = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60vw',
    height: '70vh',
    border: '1px solid #E2E2E1',
    marginTop: 100
  }

  const boxNav = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: '100%',
    backgroundColor: 'rgb(253, 253, 253)'
  }

  const buttonStyle = {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(253, 253, 253)',
    border: 'none',
    ':focus': {backgroundColor: 'rgba(156, 140, 96, 0.1)', outline: 'none', border: 'none', boxShadow: 'none'},
    ':active': {boxShadow: 'none', border: 'none'},
    outline: 'none'
  }


  const inputProfileSpacer = {
    marginBottom: '40px'
  }

  const fullSizeTitle = {
    fontSize: 25,
    fontFamily: 'Montserrat',
    height: '100',
    marginRight: '50px'
  }

  const fullSizeFormContainer = {
    width: '35vw',
    height: '90%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'flex-start',
    overflow: 'auto'
  }

  const slider = {
    width: '50%'
  }

  const image = {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
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
    iconStyle: iconStyle,
    wrapper: wrapper,
    box: box,
    boxNav: boxNav,
    buttonStyle: buttonStyle,
    inputProfileSpacer: inputProfileSpacer,
    fullSizeFormContainer: fullSizeFormContainer,
    fullSizeTitle: fullSizeTitle,
    slider: slider,
    image: image
}
