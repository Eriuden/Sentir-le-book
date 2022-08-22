import React, {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { getAllBooks } from '../redux/actions/books.action'
import BookCard from './BookCard'

export default function BookForm() {

    const [BooksData, setBooksData] = useState([])
    const [search, setSearch] = useState("")
    
    const dispatch=useDispatch()
    useEffect(()=> {
        dispatch(getAllBooks)
    }, [search])


  return (
    <div>
        <div className='form-component'>
            <div className='form-container'>
                <form action="" className='my-4'>
                    <input type="text" className='border-2 border-black mx-2' placeholder='Entrer un titre de livre' id="search-input"
                    onChange={(e)=> setSearch(e.target.value)} />

                    <input type="submit" value="Rechercher" className='border-2 border-black rounded-md px-2'/>
                </form>

            </div>    
        </div>

        <div className='result'>
            {BooksData.slice(0,20)
            .sort((a,b)=> {
                return a.name - b.name
            })
            .map((book)=>{
                return <BookCard key={book.id} props={book}/>
            })}
        </div>
    </div>

    
  )
}
