import { useState } from 'react'
import './App.css'

function App() {
  
  const [value, setvalue] = useState(0)
  const handleClick = () =>{
    setvalue(value+1);
  }
  return (
    <>
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayısı :{value}</div>
    </>
  )
}

export default App
