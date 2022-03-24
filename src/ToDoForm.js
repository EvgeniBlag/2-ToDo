import {useState} from 'react'

function ToDoForm({addTask}) {
    const [userInput,setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       addTask(userInput)
       setUserInput('')

    }

    
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

        <input className='inp'
            type="text"
            value={userInput}
            placeholder="Add item..."
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <button className='btn'>Guardar</button>
        </form>
    )
}

export default ToDoForm