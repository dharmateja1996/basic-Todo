import {useState} from 'react'

export default function TodoForm(props) {
    const { lengthOfTodo} = props
    
    const [input, setInput] = useState('')

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    const onSubmitForm = (event) =>{
        event.preventDefault();
        props.onSubmit(
            {
                id:  lengthOfTodo,
                todoName: input,
            }
        
        )

        setInput('');
       

    }

  
  return (
    <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='Enter The Todo' value={input} onChange={onChangeInput}/>
      <button className='todo-button'>Add</button>
    </form>
  )
}
