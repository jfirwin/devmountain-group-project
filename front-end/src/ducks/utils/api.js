var axios = require('axios')
const {setTheme} = require ('../action')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	},
	auth() {
		return axios.get('http://localhost:3005/auth/me', {withCredentials: true})
	},
	getUserEdit: () => {
		return axios.get('http://localhost:3005/auth/userEdit', {withCredentials: true})
	},
	getProfile: (username) => {
    return axios.get(`http://localhost:3005/api/users/${username}`)
  },
	addEducation: (details) => {
		return axios.post(`http://localhost:3005/api/users/education`, details, {withCredentials: true})
	},
	updateEducation: (details) => {
		return axios.put(`http://localhost:3005/api/users/education`, details, {withCredentials: true})
	},
	deleteEducation: (details) => {
		return axios.delete(`http://localhost:3005/api/users/education`, {data: details, withCredentials: true})
	},
	addSkill: (details) => {
		return axios.post(`http://localhost:3005/api/users/skills`, details, {withCredentials: true})
	},
	updateSkill: (details) => {
		return axios.put(`http://localhost:3005/api/users/skills`, details, {withCredentials: true})
	},
	deleteSkill: (details) => {
		return axios.delete(`http://localhost:3005/api/users/skills`, {data: details, withCredentials: true})
	},
	addExperience: (details) => {
		return axios.post(`http://localhost:3005/api/users/experience`, details, {withCredentials: true})
	},
	updateExperience: (details) => {
		return axios.put(`http://localhost:3005/api/users/experience`, details, {withCredentials: true})
	},
	deleteExperience: (details) => {
		return axios.delete(`http://localhost:3005/api/users/experience`, {data: details, withCredentials: true})
	},
	updateUser: (user) => {
		console.log(user)
		return axios.put(`http://localhost:3005/api/users`, user, {withCredentials: true})
	}
}
