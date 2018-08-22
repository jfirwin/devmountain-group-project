var axios = require('axios')

module.exports = {
	getUsers: () => {
		console.log(process.env)
		return axios.get(process.env.REACT_APP_GET_TILES).then(response => response.data)
	},
	auth: () => {
		return axios.get(process.env.REACT_APP_CHECK_AUTH, {withCredentials: true})
	},
	getUserEdit: () => {
		return axios.get(process.env.REACT_APP_GET_USER_EDIT, {withCredentials: true})
	},
	getProfile: (username) => {
    return axios.get(`${process.env.REACT_APP_GET_USER}${username}`)
  },
	addEducation: (details) => {
		return axios.post(process.env.REACT_APP_POST_EDUCATION, details, {withCredentials: true})
	},
	updateEducation: (details) => {
		return axios.put(process.env.REACT_APP_PUT_EDUCATION, details, {withCredentials: true})
	},
	deleteEducation: (details) => {
		return axios.delete(process.env.REACT_APP_DELETE_EDUCATION, {data: details, withCredentials: true})
	},
	addSkill: (details) => {
		return axios.post(process.env.REACT_APP_POST_SKILLS, details, {withCredentials: true})
	},
	updateSkill: (details) => {
		return axios.put(process.env.REACT_APP_PUT_SKILLS, details, {withCredentials: true})
	},
	deleteSkill: (details) => {
		return axios.delete(process.env.REACT_APP_DELETE_SKILLS, {data: details, withCredentials: true})
	},
	addExperience: (details) => {
		return axios.post(process.env.REACT_APP_POST_EXPERIENCE, details, {withCredentials: true})
	},
	updateExperience: (details) => {
		return axios.put(process.env.REACT_APP_PUT_EXPERIENCE, details, {withCredentials: true})
	},
	deleteExperience: (details) => {
		return axios.delete(process.env.REACT_APP_DELETE_EXPERIENCE, {data: details, withCredentials: true})
	},
	updateUser: (user) => {
		return axios.put(process.env.REACT_APP_PUT_USER_DETAILS, user, {withCredentials: true})
	}
}
