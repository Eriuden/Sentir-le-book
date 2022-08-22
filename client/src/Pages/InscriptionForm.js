import React, {useState} from 'react'
import axios from 'axios'
import ConnexionForm from './ConnexionForm'



export default function InscriptionForm() {
  const [formSubmit, setFormSubmit] = useState(false)
  const [name, setName] =useState('')
  const [email, setEmail] = useState('')
 
  const [password, setPassword] = useState('')
  const [passwordControl, setPasswordControl] = useState('')

  const handleRegister = async(e) => {
    e.preventDefault()
    const terms = document.getElementById("terms")
    const nameError = document.querySelector(".name.error")
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    const passwordConfError = document.querySelector(".password-conf.error")
    
    const termsError = document.querySelector(".terms.error")
    
    passwordConfError.innerHTML=""
    termsError.innerHTML=""

    if(password !== passwordControl || !terms.checked) {
      if(password !== passwordControl)
      passwordConfError.innerHTML ="Les mots de passe ne correspondent pas"
    
      if (!terms.checked)
      termsError.innerHTML ="Veuillez valider les conditions générales"
    } else {
      await axios({
        method:"post",
        url: `${process.env.REACT_APP_API_URL}api/users/register`,
        data: {
          name,
          email,
          password,
          
        }
      })
      .then((res)=> {
        console.log(res)
        if (res.data.errors) {
          nameError.innerHTML = res.data.errors.name
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password 
        } else {
          setFormSubmit(true)
        }
      })
      .catch((err)=> console.log(err))
    }
  }


  return (
    <div className='flex flex-col'>
      <>
        {formSubmit ? (
          <>
            <h4 className='sucess'>Votre inscription a fonctionné, veuillez vous connecter</h4>
            <ConnexionForm/>
          </>
        ) : (
          <form action="" onSubmit={handleRegister} className=" flex flex-col border-2 border-black mx-36 my-4">
            <label htmlFor="name">Nom</label>
              <input className='border-2 border-black mx-2' type="text" name="name" id="name" value={name}
              onChange={(e)=> setName(e.target.value)} />
            <div className='name error'></div>

            <label htmlFor='email'>Email</label>
              <input className='border-2 border-black mx-2' type="text" name="email" id="email" value={email}
              onChange={(e)=> setEmail(e.target.value)} />
            <div className='email error'></div>

            <label htmlFor='password'> mot de passe</label>
               <input className='border-2 border-black mx-2' type="password" name="password" id="password" value={password}
               onChange={(e) =>setPassword(e.target.value)} />
            <div className="password error"></div>

            <label htmlFor='password-conf'>Confirmer Mot de passe</label>
              <input className='border-2 border-black mx-2' type="password" name="password" id="password-conf" value={passwordControl}
              onChange={(e) =>setPasswordControl(e.target.value)} />
            <div className="password-conf error"></div>
  
            <label className=' mx-2 my-2' htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales</a></label>
              <input type="checkbox" id="terms" />
            <div className="terms error"></div>
                
            <input type="submit" className='border-2 border-black my-2 mx-4' value ="inscription" />

          </form>
        )}
      </>
    </div>
  )
}
