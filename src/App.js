 
import './App.css';
 
import Demo from './Demo'
import Button from './UI/Button'
import { useState } from 'react'
////props = eto sposob peredachi dannyx JS to redenelx
// children eto svoistvo parnogo elementa 


function App() {
  const [toggle, setToggle] = useState(true)

  
  const toggleHandler = () => {
    setToggle(prevState => !prevState)
  }

  let nums = [4, 5, 1, 2, 3, 8, 11, 23, 55]
  return (

   <div className='App'>
 <h1>{toggle && <p>Hello</p>}</h1>
 <Demo text={'This is demo page? men Tynchtyk'} list={nums} />
 <Button onClick={toggleHandler}>Toggle</Button>
 <Button>Add Button</Button>
 <Button>Add Button</Button>
 <Button>Add Button</Button>

   </div>
  );
}

export default App;
