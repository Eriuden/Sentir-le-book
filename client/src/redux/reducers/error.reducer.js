import { GET_BOOK_ERRORS } from "../actions/books.action";
import { GET_USER_ERRORS } from "../actions/users.action";

const initialState = { userError: [], bookError : {}}
 
export default function errorReducer(state = initialState, action) {
    switch( action.type){
        case GET_BOOK_ERRORS:
            return {
                bookError: action.payload,
                userErrors: []
            }
        case GET_USER_ERRORS:
            return{
                userError: action.payload,
                travelError: []
            }
            default:
                return state
    }
}