import { GET_BOOK, LIKE_BOOK, UNLIKE_BOOK, UPDATE_BOOK, DELETE_BOOK, DELETE_COMMENT, EDIT_COMMENT } from "../actions/books.action"

const initialState = {}

export default function bookReducer(state= initialState, action) {
    switch (action.type) {
        case GET_BOOK:
            return action.payload
        case LIKE_BOOK:
            return state.map((book, userId) => {
                if (book._id === action.payload.bookId)
                    return {
                        ...book,
                        likers: [action.payload,userId, ...book.likers]
                    }
            })
        case UNLIKE_BOOK:
            return state.map((book) => {
                if (book._id === action.payload.bookId)
                    return {
                        ...book,
                        likers: book.likers.filter((id) => id !== action.payload.userId)                       
                    }
                return book
            })
        case UPDATE_BOOK:
            return state.map((book) => {
                if (book.id === action.payload.bookId) {
                    return {
                        ...book,
                        name: action.payload.name,
                        description: action.payload.description,
                        author: action.payload.author,
                        editor: action.payload.editor,
                        yearOfPublication: action.payload.yearOfPublication
                    }
                } else return book
            })
        case DELETE_BOOK:
            return state.filter((book) => book._id !== action.payload.bookId)

        case EDIT_COMMENT:
            return state.map((book) => {
                //on commence par mapper les voyages et chercher le bon
                if(book._id === action.payload.bookId){
                    return {
                        ...book,
                        //Puis ensuite on fait pareil avec les comments
                        comment: book.comment.map((comment) => {
                            if (comment._id === action.payload.commentId) {
                                return {
                                    //On empèche l'écrasement des données, puis on charge le texte
                                    ...comment,
                                    text: action.payload.text
                                }
                            } else {
                                return comment
                            }
                        })
                    }
                } else return book
            })
        case DELETE_COMMENT:    
            return state.map((book) => {
                if (book.id === action.payload.bookId) {
                    return {
                        ...book,
                        comments: book.comment.filter((comment) => comment._id !== action.payload.commentId)
                }
        
            } else return book
        }) 

        default:
            return state
    }
}
