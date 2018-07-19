const type = require('./actionType')
const api = require('./utils/api')

module.exports = {
	updateName: name => {
		return {
			type: type.UPDATE_NAME,
			payload: name
		}
	},
	getUsersTiles: () => {
		return {
			type: type.GET_USERS,
			payload: api.getUsers()
		}
	},
	getProfileDetails: (username) => {
		return {
			type: type.GET_PROFILE_DETAILS,
			payload: api.getProfile(username)
		}
	},
	updateUser: (user) => {
		return {
			type:type.UPDATE_USER,
			payload: api.updateUser(user)
		}
	},
	setTheme: (type) => {
		return {
			type: type
		}
	},
	changeValue: (value) => {
		return {
			type: type.UPDATE_VALUE,
			payload: api.getProfile(value)
		}
	},
	addEducation: (details) => {
		return {
			type: type.ADD_EDUCATION,
			payload: api.addEducation(details)
		}
	},
	updateEducation: (details) => {
		return {
			type: type.UPDATE_EDUCATION,
			payload: api.updateEducation(details)
		}
	},
	deleteEducation: (details) => {
		return {
			type: type.DELETE_EDUCATION,
			payload: api.deleteEducation(details)
		}
	},
	addSkill: (details) => {
		return {
			type: type.ADD_SKILL,
			payload: api.addSkill(details)
		}
	},
	updateSkill: (details) => {
		return {
			type: type.UPDATE_SKILL,
			payload: api.updateSkill(details)
		}
	},
	deleteSkill: (details) => {
		return {
			type: type.DELETE_SKILL,
			payload: api.deleteSkill(details)
		}
	},
	addExperience: (details) => {
		return {
			type: type.ADD_EXPERIENCE,
			payload: api.addExperience(details)
		}
	},
	updateExperience: (details) => {
		return {
			type: type.UPDATE_EXPERIENCE,
			payload: api.updateExperience(details)
		}
	},
	deleteExperience: (details) => {
		return {
			type: type.DELETE_EXPERIENCE,
			payload: api.deleteExperience(details)
		}
	},
	updateSearchString: (name) => {
		return {
			type: type.UPDATE_SEARCH_STRING,
			payload: name
		}
	},
	updateEditSelected: (option) => {
		return {
			type: type.UPDATE_EDIT_SELECTED,
			payload: option
		}
	},
	auth: () => {
		return {
			type:type.AUTH,
			payload: api.auth()
		}
	},
	getUserEdit: () => {
		return {
			type: type.GET_USER_EDIT,
			payload: api.getUserEdit()
		}
	},
	goBackEditPage:() => {
		return {
			type: type.GO_BACK_EDIT_PAGE
		}
	}
}
