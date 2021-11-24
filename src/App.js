import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';


function App() {
  return (
   <div>
     <Header/>
    
    <Dashboard/>
  
     <Footer/>
   </div>
  );
}
export default App;
