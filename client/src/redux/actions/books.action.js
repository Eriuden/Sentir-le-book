import axios from "axios";

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_BOOK = "GET_BOOK";
export const GET_BOOK_ERRORS = "GET_BOOK_ERRORS";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const LIKE_BOOK = "LIKE_BOOK"
export const UNLIKE_BOOK = "UNLIKE_BOOK"

export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"

/*
 Les explications dont je parlais en reducer
 On exporte déjà chacune, le nom de const en majuscule
 la valeur sera une string reprenant le nom
 ca servira pour le type, (le fameux action.type en param du reducer)
 Du coup, pour chaque action
 export const nomquondonne
 return(dispatch) fonction fléchée
 return axios (l'ajax de react)
 .l'opération à effectuer en axios (get, post, put, delete, patch)
 on lui donne l'url
 .then(donc on lui demande une promesse)
 on met toujours en param de then res
 on dispatch le type, donc la const à string en haut
 le payload est ce que vise l'action
 par ex pour get, on lui demande les données du résultat
 update, il doit modifier les champs donc va les viser
 et delete, il vise l'id pour repérer et supprimer

*/

export const getAllBooks= () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.API_URL}api/books`)
      .then((res) => {
        dispatch({ type: GET_ALL_BOOKS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getBook = () => {
  return (dispatch) => {
    return axios

      .get(`${process.env.API_URL}api/books/:id`)
      .then((res) => {
        dispatch({ type: GET_BOOK, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addBook= (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.API_URL}api/books/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_BOOK_ERRORS, payload: res.data.errors });
        }
      });
  };
};

export const updateBook = (
  bookId,
  name,
  author,
  editor,
  yearOfPublication,
  description,
  
  
) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.API_URL}api/books/${bookId}`,
      data: { description },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_BOOK,
          payload: { name, author, editor, yearOfPublication, description},
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteBook = (
  bookId,
  name,
  author,
  editor,
  yearOfPublication,
  description
  
) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.API_URL}api/books/${bookId}`,
      data: {  name, author, editor, yearOfPublication, description },
    })
      .then((res) => {
        dispatch({ type: DELETE_BOOK, payload: { bookId } });
      })
      .catch((err) => console.log(err));
  };
};

export const likeBook = (bookId, userId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url:`${process.env.API_URL}/api/books/like-book/` + bookId,
            data: { id: userId }
        })
        .then((res) => {
            dispatch({type: LIKE_BOOK, payload:{bookId, userId}})
        })
        .catch((err) => console.log(err))
    }
}

export const unlikeBook = (bookId, userId) => {
    return(dispatch) => {
        return axios({
            method:'patch',
            url: `${process.env.API_URL}/api/books/unlike-book/` + bookId,
            data: { id: userId}
        })
        .then((res) => {
            dispatch({type: UNLIKE_BOOK, payload: {bookId, userId}})
        })
        .catch((err) => console.log(err))
    }
}

export const addComment = (bookId, commenterId, text, commenterName) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.API_URL}api/books/comment-book/${bookId}`,
            data:{commenterId, text, commenterName},
        })
        .then((res) => {
            dispatch({ type: ADD_COMMENT, payload: {bookId} })
        })
        .catch((err) => console.log(err))
    }
}

export const editComment = (bookId, commentId, text) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.API_URL}api/books/edit-comment-book/${bookId}`,
            data:{commentId, text},
        })
        .then((res) => {
            dispatch({ type: EDIT_COMMENT, payload: {bookId, commentId, text} })
        })
        .catch((err) => console.log(err))
    }
}

export const deleteComment = (bookId, commentId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.API_URL}api/books/delete-comment-book/${bookId}`,
            data:{commentId},
        })
        .then((res) => {
            dispatch({ type: DELETE_COMMENT, payload: {bookId, commentId} })
        })
        .catch((err) => console.log(err))
    }
}
