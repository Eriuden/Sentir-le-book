import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import ConnexionForm from './Pages/ConnexionForm';
import InscriptionForm from './Pages/InscriptionForm';
import UserList from './Pages/UserList';
import Header from './Component/Header';
import Footer from './Component/Footer';


import './App.css';

function App() {
  //Ce qu'il faudrait
  //Home qui fait la liste de tout les bouqins dispo
  //Une page perso du livre
  //Une liste des livres de chaque user (indications sur la page vsc)
  //PE rajouter un système de commentaires
  
  
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route exact Path="/" element ={<Home/>}>Acceuil</Route>
        <Route exact Path="/" element ={<ConnexionForm/>}>Connexion</Route>
        <Route exact Path="/" element ={<InscriptionForm/>}>Inscription</Route>
        <Route exact Path="/" element ={<UserList/>}>Votre sélection</Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
