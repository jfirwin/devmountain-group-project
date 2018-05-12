var axios = require('axios')
const {setTheme} = require ('../action')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	},
	getProfile: (username) => {
    return axios.get(`http://localhost:3005/api/users/${username}`)
  },
	updateEducation: (details) => {
		return axios.put(`http://localhost:3005/api/users/education`, details)
	},
	updateExperience: (details) => {
		return axios.put(`http://localhost:3005/api/users/experience`, details)
	},
	updateSkill: (details) => {
		console.log(details)
		return axios.put(`http://localhost:3005/api/users/skills`, details)
	},
	deleteEducation: (details) => {
		console.log('delete education fired', details)
		return axios.delete(`http://localhost:3005/api/users/education`, {data: details})
	},
	deleteExperience: (details) => {
		return axios.delete(`http://localhost:3005/api/users/experience`, {data: details})
	},
	deleteSkill: (details) => {
		return axios.delete(`http://localhost:3005/api/users/skills`, {data: details})
	},
	addEducation: (details) => {
		return axios.post(`http://localhost:3005/api/users/education`, details)
	},
	addExperience: (details) => {
		return axios.post(`http://localhost:3005/api/users/experience`, details)
	},
	addSkill: (details) => {
		return axios.post(`http://localhost:3005/api/users/skills`, details)
	}
}
