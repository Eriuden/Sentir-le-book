import { GET_ALL_BOOKS } from "../actions/books.action"


const initialState = {}
export default function allBooksReducer(state = initialState, action ) {
  switch (action.type) {
    case GET_ALL_BOOKS:
        return action.payload
    default: 
        return state
  }
}