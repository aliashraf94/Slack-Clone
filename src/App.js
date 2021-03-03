import React from "react"
import './App.css';
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"

function App() {
  return (
   <div className="App">
     <h1 className="app_indevelopment">Slack Clone in development </h1>

     {/* Header */}
     <Header/>
     {/*Sidebar*/}
     <Sidebar/>
     {/*React-Router for switching between channels*/}

   </div>
  );
}

export default App;
