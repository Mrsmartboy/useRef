import {useRef,useEffect} from 'react'


const App =()=>{
  const inputElement = useRef(null)

  const onSubmitHandler=(event)=>{
    event.preventDefault()
    console.log(inputElement.current.value)
    inputElement.value=""
  }

  useEffect(()=>{
    inputElement.current.focus()
  },[])

  return(
    <div>
      <center>
        <form onSubmit={onSubmitHandler}>       
           <input ref={inputElement} type="text" placeholder='Enter your name' /> <br/>
        <input type="submit"/>
        </form>

      </center>
    </div>
  )
}

export default App;
