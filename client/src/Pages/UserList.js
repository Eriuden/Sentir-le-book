import React, {useState, useEffect} from 'react'
import BookCard from '../Component/BookCard'
import { useDispatch } from 'react-redux'
import { getAllBooks } from '../redux/actions/books.action'

export default function UserList() {
  //S'inspirer de l'user List de newMovieDB
    //Rechercher si c'est possible de le stocker
    //autrement qu'en localStorage (oui, surement Redux)
    //LS dépendant du cache, il peut être supprimé
    //PE le système de like de desocializer peut y répondre
    //Afficher un tableau dans le userModel à ce sujet
    //Le système de like peut marcher en effet
    //Pour chacun dont on retrouve l'id dans les likes
    //On affiche la carte
  const [listData, setListData] = useState([])
  const dispatch = useDispatch()

  useEffect(()=> {
    let booksId = window.localStorage.books
    ? window.localStorage.books.split(",")
    : []

    for (let i = 0; i < booksId.length; i++) {
      dispatch(getAllBooks(booksId[i]).then((res) => 
      setListData((listData) => [...listData, res.data])))
    }
  }, [])
    
  return (
    <div className='user-list'>
      <h2>Vos coups de coeur</h2>
      <div className='result'>
        {listData.length > 0 ? (
          listData.map((book)=>
          <BookCard bookProps={book} key={book.id} />)
        ) :(
          <h2>Aucun coup de coeur</h2>
        )}
      </div>
    </div>
  )
}
