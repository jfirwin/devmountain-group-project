const responsiveFormContainer = {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'auto',
    marginTop: '25px'
  }

  const responsiveSpacer = {
    width: '100%',
    height: '10vh',
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    fontFamily: 'Montserrat',
    familyWeight: '200'
  }

  const responsiveTitle = {
   fontFamily: 'Montserrat',
   fontWeight: 'bold' 
  }

  const responsiveInputStyle = {
    width: '100%',
    height: '25px',
    ':focus': {
      outline: 'none',
      border: '2px solid #E3E38A'
    }
  }

  const responsiveCompetencySpacer = {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between'
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

  const ResponsiveBox = {
    display: 'flex',
    flexDirection: 'column',
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
    backgroundColor: 'rgb(253, 253, 253)',
    marginTop: '25px'
  }

  const buttonStyle = {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(253, 253, 253)',
    border: 'none',
    ':focus': {backgroundColor: 'rgba(156, 140, 96, 0.1)', outline: 'none', border: 'none', boxShadow: 'none'},
    ':active': {boxShadow: 'none', border: 'none', borderStyle: 'outset'},
    outline: 'none'
  }

  const inputProfileSpacer = {
    marginBottom: '40px'
  }

  module.exports = {
    responsiveFormContainer: responsiveFormContainer,
    responsiveSpacer: responsiveSpacer,
    responsiveTitle: responsiveTitle,
    responsiveInputStyle: responsiveInputStyle,
    responsiveCompetencySpacer: responsiveCompetencySpacer,
    deleteButton: deleteButton,
    button: button,
    buttonSpacing: buttonSpacing,
    iconStyle: iconStyle,
    wrapper: wrapper,
    ResponsiveBox: ResponsiveBox,
    boxNav: boxNav,
    buttonStyle: buttonStyle,
    inputProfileSpacer: inputProfileSpacer
  }