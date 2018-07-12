const responsiveFormContainer = {
    width: '80%',
    height: '70%',
    display: 'flex',
    flexDirection : 'column',
    alignContent: 'center',
    overflow: 'auto'
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
    marginTop: '25px',
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
  }

  const ResponsiveBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80vh',
    border: '1px solid #E2E2E1'
  }

  const boxNav = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '80%',
    marginTop: '95px',
    flexWrap: 'wrap'
  }

  const icons = {
    fontSize: '100px',
    color: '#E3E38A'
  }

  const iconDiv = {
    textAlign: 'center',
    height: '150px',
    width: '150px'
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
    inputProfileSpacer: inputProfileSpacer,
    icons: icons,
    iconDiv: iconDiv
  }