const type = require('./actionType')
const api = require('./utils/api')
const {getUsers, getProfile, updateEducation, updateSkill, updateExperience, deleteEducation, deleteSkill, deleteExperience, addEducation, addSkill, addExperience} = require('./utils/api')


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
	setTheme: (type) => {
		return {
			type: type
		}
	},
	changeValue: (value) => {
		return {
			type: type.UPDATE_VALUE,
			payload: getProfile(value)
		}
	},
	updateSkill: (details) => {
		return {
			type: type.UPDATE_SKILL,
			payload: updateSkill(details)
		}
	},
	updateExperience: (details) => {
		return {
			type: type.UPDATE_EXPERIENCE,
			payload: updateExperience(details)
		}
	},
	updateEducation: (details) => {
		return {
			type: type.UPDATE_EDUCATION,
			payload: updateEducation(details)
		}
	},
	deleteSkill: (details) => {
		return {
			type: type.DELETE_SKILL,
			payload: deleteSkill(details)
		}
	},
	deleteExperience: (details) => {
		return {
			type: type.DELETE_EXPERIENCE,
			payload: deleteExperience(details)
		}
	},
	deleteEducation: (details) => {
		return {
			type: type.DELETE_EDUCATION,
			payload: deleteEducation(details)
		}
	},
	addSkill: (details) => {
		return {
			type: type.ADD_SKILL,
			payload: addSkill(details)
		}
	},
	addExperience: (details) => {
		return {
			type: type.ADD_EXPERIENCE,
			payload: addExperience(details)
		}
	},
	addEducation: (details) => {
		return {
			type: type.ADD_EDUCATION,
			payload: addEducation(details)
		}
	},
}
