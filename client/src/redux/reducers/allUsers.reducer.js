import { GET_USERS } from "../actions/users.action"

const initialState = {}

export default function allUsersReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return action.payload
        default:
            return state
    }
}