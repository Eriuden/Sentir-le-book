import React from 'react'

export default function BookCard({bookProps}) {

  const dateFormater = (date) => {
    let [yy,mm,dd] = date.split("-")
    return [dd,mm,yy].join("/")
  }

  const addStorage = () => {
    let storeData = window.localStorage.books ?
    window.localStorage.books.split(",")
    : []

    if(!storeData.includes(bookProps.id.toString)){
      storeData.push (bookProps.id)
      window.localStorage.books = storeData
      window.location.reload()
    } else {
      window.alert("ce livre est déjà dans vos coups de coeur")
    }
  }

  const deleteStorage = () => {
    let storedData = window.localStorage.books.split(",")
    let newData = storedData.filter((id)=> id != bookProps.id)
    window.localStorage.books = newData
  }
  return (
    <div className='bookCard'>
    <h2>Nom:{bookProps.name}</h2>
    <h5> sorti en {bookProps.yearOfPublication}</h5>
    <p>Description:{bookProps.description}</p>
    <div onClick={() => addStorage()}>Ajouter aux coups de coeur</div>
    <div onClick={() => deleteStorage()}>Enlever des coups de coeur</div>
      
    </div>
  )
}
