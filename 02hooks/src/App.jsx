import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  //let count = 1;

  const addValue = () => {
    if(count < 20){
      setCount(count+1);
    }
    
  }

  const removeValue = () => {
    if(count!=0){
      setCount(count-1)
    }
    
  }

  return (
    <>
     <p>Cahi aur React</p>
     <p>Counter Value is: {count}</p>
     <button
     onClick={addValue}
     >Add value</button>
     <button
     onClick={removeValue}
     >Remove value</button>
     <br />
     <footer>Footer: {count}</footer>
     if(count == 20){
      console.log("hii")
     }
    </>
  )
}

export default App
