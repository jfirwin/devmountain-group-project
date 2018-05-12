import type from './actionType'
import {dark, light, defaultTheme} from '../components/Themes/themes'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false,
	color: null,
	theme: defaultTheme,
}

function reducer(state = initialState, action){
	switch(action.type){
		case type.UPDATE_NAME:
			return Object.assign({}, state, {name: action.payload})

		case type.GET_USERS_FULFILLED:
			return Object.assign({}, state, {users: action.payload})

		case type.GET_PROFILE_DETAILS_PENDING:
			return Object.assign({}, state, {loading: true})

		case type.GET_PROFILE_DETAILS_FULFILLED:
			return Object.assign({}, state, {loading: false, user: action.payload.data[0]})

		case type.DEFAULT:
			return Object.assign({}, state, {theme: defaultTheme})

		case type.LIGHT:
			return Object.assign({}, state, {theme: light})

		case type.DARK:
			return Object.assign({}, state, {theme: dark})

		case type.UPDATE_EDUCATION:
			return Object.assign({}, state)

		case type.UPDATE_EDUCATION_FULFILLED:
			console.log('UPDATE_EDUCATION_FULFILLED fired')
			let educationStateUpdate = Object.assign({}, state)
			let educationUserUpdate = Object.assign({}, educationStateUpdate.user)
			let educationUpdate = Object.assign([], educationUserUpdate.education)
			console.log(educationUpdate)
			let educationIndex = educationUpdate.findIndex(school => {
				return school.id === action.payload.data[0].id
			})
			educationUpdate[educationIndex] = action.payload.data[0]
			educationUserUpdate.education = educationUpdate
			educationStateUpdate.user = educationUserUpdate
			return educationStateUpdate

		case type.ADD_EDUCATION:
			return Object.assign({}, state)

		case type.ADD_EDUCATION_FULFILLED:
			console.log('UPDATE_EDUCATION_FULFILLED fired')
			let addEducationStateUpdate = Object.assign({}, state)
			let addEducationUserUpdate = Object.assign({}, addEducationStateUpdate.user)
			let addEducationUpdate = Object.assign([], addEducationUserUpdate.education)
			addEducationUpdate.push(action.payload.data[0])
			addEducationUserUpdate.education = addEducationUpdate
			addEducationStateUpdate.user = addEducationUserUpdate
			return addEducationStateUpdate

		case type.DELETE_EDUCATION:
			return Object.assign({}, state)

		case type.DELETE_EDUCATION_FULFILLED:
			console.log('delete', action.payload.data[0])
			let deleteEducationState = Object.assign({}, state)
			let deleteEducationUser = Object.assign({}, deleteEducationState.user)
			let deleteEducationUpdate = Object.assign([], deleteEducationUser.education)
			console.log(deleteEducationUpdate.update)
			let deleteEducationIndex = deleteEducationUpdate.findIndex(education => {
				return education.id === action.payload.data[0].id
			})
			deleteEducationUpdate.splice(deleteEducationIndex, 1)
			deleteEducationUser.education = deleteEducationUpdate
			deleteEducationState.user = deleteEducationUser
			return deleteEducationState

		case type.UPDATE_EXPERIENCE:
			return Object.assign({}, state)

		case type.UPDATE_EXPERIENCE_FULFILLED:
			console.log('UPDATE_EXPERIENCE_FULFILLED fired')
			let experienceStateUpdate = Object.assign({}, state)
			let experienceUserUpdate = Object.assign({}, experienceStateUpdate.user)
			let experienceUpdate = Object.assign([], experienceUserUpdate.experience)
			let experienceIndex = experienceUpdate.findIndex(experience => {
				return experience.id === action.payload.data[0].id
			})
			experienceUpdate[experienceIndex] = action.payload.data[0]
			experienceUserUpdate.experience = experienceUpdate
			experienceStateUpdate.user = experienceUserUpdate
			return experienceStateUpdate

			case type.DELETE_EXPERIENCE:
				return Object.assign({}, state)

			case type.DELETE_EXPERIENCE_FULFILLED:
				console.log('DELETE_EXPERIENCE_FULFILLED fired')
				return Object.assign({}, state)

		case type.UPDATE_SKILL:
			return Object.assign({}, state)

		case type.UPDATE_SKILL_FULFILLED:
			let skillStateUpdate = Object.assign({}, state)
			let skillUserUpdate = Object.assign({}, skillStateUpdate.user)
			let skillUpdate = Object.assign([], skillUserUpdate.skills)
			let skillIndex = skillUpdate.findIndex(skill => {
				return skill.id === action.payload.data[0].id
			})
			skillUpdate[skillIndex] = action.payload.data[0]
			skillUserUpdate.skills = skillUpdate
			skillStateUpdate.user = skillUserUpdate
			return skillStateUpdate

			case type.DELETE_SKILL:
				return Object.assign({}, state)

			case type.DELETE_SKILL_FULFILLED:
				console.log('DELETE_SKILL_FULFILLED fired')
				return Object.assign({}, state)

		default:
			return state
	}
}

export default reducer
