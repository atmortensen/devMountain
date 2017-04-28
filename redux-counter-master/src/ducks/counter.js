// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false
import axios from 'axios'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CHARS = 'GETCHARS'

const initialState = { currentValue: 0, increment: false }

export default function counter(state=initialState, action){
	switch(action.type){
		case INCREMENT:
			return { currentValue: state.currentValue + action.ammount }
		case DECREMENT:
			return { currentValue: state.currentValue - action.ammount }
		case CHARS:
			console.log(action.payload)
			return Object.assign({}, state, {people: action.payload.data})
		default:
			return state
	}
}

export function increment(ammount){
	return {
		type: INCREMENT,
		ammount
	}
}

export function decrement(ammount){
	return {
		type: DECREMENT,
		ammount
	}
}

export function SWChars(){
	axios.get('http://swapi.com/api/people').then(data=>{
		return {
			type: CHARS,
			payload: data
		}
	})
}