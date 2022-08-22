import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [hamburger, setHamburger] =useState(false)
  return (
    <div>
      <h1>Sentir le book</h1>
      <h2>J'ai pas d'idée pour le sous titre, démerdez vous</h2>

      <nav className='hidden flex-row justify-around mt-3 sm:flex'>

      <Link to ={"/"}>Acceuil</Link>
      <Link to ={"/connexion"}>Connexion</Link>
      <Link to ={"/inscription"}>Inscription</Link>
      <Link to ={"/userlist/:id"}>Votre liste de coups de coeur</Link> 

      </nav>

      <h2 className='flex m-2 sm:hidden' onClick={()=>setHamburger(!hamburger)}>Cliquez ici</h2>

      {hamburger ? (
        <nav className='flex flex-col items-start m-2 justify-start border-spacing-1
        absolute border-2 border-black bg-orange-100 opacity-100 sm:hidden'>
            <Link className='border-black w-full border-b-2 text-start' to={"/"}><p className='mx-1'>Acceuil</p></Link>
            <Link className='border-black w-full border-b-2 text-start' to={"/connexion"}><p className='mx-1'>Connexion</p></Link>
            <Link className='w-full text-start' to={"/inscription"}><p className='mx-1'>Inscription</p></Link>
        </nav>
      ):""
    }
    
    
    </div>
  )
}
