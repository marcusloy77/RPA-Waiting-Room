import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import AddPatient from './components/AddPatient'
import NewPatient from './components/NewPatient'
//components needed:
//title of some sort - Waiting Room
//time waiting: default 15mins
//plus symbol
//alert func when timer is up/possibly sound play
//box section displaying the current times in order
//delete button
//edit button
//

function App() {

  const [popup, setpopup] = useState(false)

  const patientPopUp = () => {
    
    setpopup(true)
  }

  const addNewPatient = (event) => {
    //readTarget then
    event.preventDefault()
    setpopup(false)
  }
  const cancel = (event) => {
    //readTarget then
    event.preventDefault()
    setpopup(false)
  }

  return (
    <div className="App">
      <Title></Title>
      <NewPatient patientPopUp={patientPopUp}></NewPatient>
      <AddPatient popup={popup} addNewPatient={addNewPatient} cancel={cancel}></AddPatient>
    </div>
  );
}

export default App;
