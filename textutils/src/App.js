// import logo from './logo.svg';
import './App.css';
// import React, { useState } from "react";
// import confirmdialog from "./confirmdialog";
// import { Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Textbox from './components/textbox';



function App() {
  return (
    <>
    
<Navbar title="Pak Fan" Contactali="whatsapp"/>  
<div className="Container my-3">
    <Textbox heading="Enter the text to Analyze "/>


</div>

{/* <Navbar/> */}


    {/* <h1>this is my website</h1>
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Faisal
        </a>
      </header>
    </div> */}
    </>
  );
  
}

export default App;
// ---------------------------- confirmdialog ---------------------------

// const App = () => {
//   const [showConfirm, setShowConfirm] = useState(false);
// 
//   const handleDelete = () => {
//     setShowConfirm(true);
//   };

//   const confirmAction = () => {
//     setShowConfirm(false);
//     alert("Action confirmed!");
//   };

//   const cancelAction = () => {
//     setShowConfirm(false);
//   };

//   return (
//     <div classNameName="App">
//       <h1>React Custom Confirm Box</h1>
//       <button onClick={handleDelete}>Show Confirm</button>

//       {/* Confirm Dialog Component */}
//       <ConfirmDialog
//         show={showConfirm}
//         message="Are you sure you want to proceed?"
//         onConfirm={confirmAction}
//         onCancel={cancelAction}
//       />
//     </div>
//   );
// };

// // export default App;